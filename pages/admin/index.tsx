import { Box, Button, Container, Flex, Icon } from "@chakra-ui/react";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { BiPencil, BiTrash } from "react-icons/bi";

import imageBall from "assets/images/ball.png";

import useModal from "hooks/useModal";
import useNotification from "hooks/useNotification";

import { OrderAddress, OrderItem } from "shared/schemas";

import Table from "components/Table";
import OrderDetailFormBodyModal from "pageComponents/OrderDetailFormBodyModal";
import TitleText from "components/TitleText";
import InputField from "components/InputField";

import { AdminContainer, AdminTableContainer } from "./admin.styles";
import { ORDER_DATA } from "shared/constants";

const Admin: React.FC = (): ReactElement => {
  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  const [orderAddress, setOrderAddress] = useState<OrderAddress | undefined>();

  const { openNotificationSuccess } = useNotification();

  const handleDeleteOrder = useCallback(
    async (data: any) => {
      setOrderList(orderList?.filter((record) => record?.id !== data?.orderId));
      openNotificationSuccess("Delete an order successful");
    },
    [openNotificationSuccess, orderList]
  );
  const handleOrderDetailForm = useCallback(
    async (data: any) => {
      if (data?.isCreated) {
        delete data?.isCreated;
        setOrderList([
          ...orderList,
          {
            ...data,
            id: Number(Math.random() * 1000000),
          },
        ]);
        openNotificationSuccess("Add an order successful");
      } else {
        setOrderList(
          orderList?.map((record) => (record?.id === data?.id ? data : record))
        );
        openNotificationSuccess("Update an order successful");
      }
    },
    [openNotificationSuccess, orderList]
  );

  const {
    open: openDeleteOrder,
    close: closeDeleteOrder,
    Dialog: DialogDeleteOrder,
  } = useModal({
    handleSubmit: handleDeleteOrder,
    submitText: "Delete",
  });
  const {
    open: openOrderDetailForm,
    close: closeOrderDetailForm,
    Dialog: DialogOrderDetailForm,
  } = useModal({
    modalBody: OrderDetailFormBodyModal,
    handleSubmit: handleOrderDetailForm,
    submitText: "Update",
  });

  const handleOpenDeleteOrder = useCallback(
    (id?: number) => {
      openDeleteOrder({
        title: "Are you sure want to delete this order?",
        data: {
          orderId: id,
        },
      });
    },
    [openDeleteOrder]
  );
  const handleOpenOrderDetailForm = useCallback(
    (data?: any) => {
      openOrderDetailForm({
        title: "Order Detail",
        data,
      });
    },
    [openOrderDetailForm]
  );

  const handleChangeOrderAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setOrderAddress({
        ...orderAddress,
        [name]: value,
      });
    },
    [orderAddress]
  );

  const handleSubmitOrderData = useCallback(() => {
    const orderData = {
      orderList,
      orderAddress,
      updatedAt: new Date(),
    };

    localStorage.setItem(ORDER_DATA, JSON.stringify(orderData));
    openNotificationSuccess("Updated order data successful");
  }, [openNotificationSuccess, orderAddress, orderList]);

  const columnData = useMemo(
    () => [
      {
        columnId: "image",
        render: (image: any) => (
          <Image src={imageBall} alt="Ball Image" objectFit="cover" />
        ),
      },
      {
        columnId: "productName",
        label: "Product",
        width: "180px",
      },
      {
        columnId: "qty",
        label: "Quantity",
        width: "120px",
      },
      {
        columnId: "price",
        label: "Price",
        render: (price: number) => "$" + price,
      },
      {
        columnId: "action",
        label: "Action",
        render: (_: any, record: OrderItem) => (
          <Flex alignItems="center">
            <Icon
              cursor="pointer"
              as={BiTrash}
              fontSize="18px"
              color="text.error"
              mr="12px"
              onClick={() => handleOpenDeleteOrder(record?.id)}
            />
            <Icon
              cursor="pointer"
              as={BiPencil}
              fontSize="18px"
              onClick={() => handleOpenOrderDetailForm(record)}
            />
          </Flex>
        ),
      },
    ],
    [handleOpenDeleteOrder, handleOpenOrderDetailForm]
  );

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem(ORDER_DATA) || "{}");

    setOrderList(orderData?.orderList || []);
    setOrderAddress(orderData?.orderAddress);
  }, []);

  return (
    <>
      <Container maxW="3xl">
        <AdminContainer>
          <TitleText title="Admin Site" textPosition="center" width="100%" />
          <AdminTableContainer>
            <Flex mb="12px">
              <Button
                background="blue.500"
                color="white"
                ml="auto"
                onClick={() =>
                  handleOpenOrderDetailForm({
                    isCreated: true,
                  })
                }>
                Add
              </Button>
            </Flex>
            <Table tableData={orderList} columnData={columnData} />
          </AdminTableContainer>
          <Box mb="24px">
            <Box mb="12px">
              <InputField
                label="Name"
                name="name"
                value={orderAddress?.name}
                onChange={handleChangeOrderAddress}
              />
            </Box>
            <InputField
              label="Address"
              name="address"
              value={orderAddress?.address}
              onChange={handleChangeOrderAddress}
            />
          </Box>
          <Flex justifyContent="center">
            <Button
              background="blue.500"
              color="white"
              onClick={handleSubmitOrderData}>
              Submit
            </Button>
          </Flex>
        </AdminContainer>
      </Container>
      {DialogDeleteOrder(closeDeleteOrder)}
      {DialogOrderDetailForm(closeOrderDetailForm)}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Admin;
