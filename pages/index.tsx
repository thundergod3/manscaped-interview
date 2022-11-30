import { Box, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import dayjs from "dayjs";

import imageBall from "assets/images/ball.png";

import useModal from "hooks/useModal";
import useNotification from "hooks/useNotification";

import { OrderAddress, OrderItem } from "shared/schemas";

import NormalText from "components/NormalText";
import Table from "components/Table";
import CancelBodyModal from "pageComponents/CancelBodyModal";
import RefundBodyModal from "pageComponents/RefundBodyModal";
import ResendConfirmationBodyModal from "pageComponents/ResendConfirmationBodyModal";
import ResendTrackingBodyModal from "pageComponents/ResendTrackingBodyModal";
import { TEXT_POSITION } from "components/NormalText/normalText.schema";

import {
  AppAddressTagContainer,
  AppAddressContainer,
  AppHeaderContainer,
  AppTableContainer,
  TagAddress,
  AppActionContainer,
  ActionButton,
  AppContainer,
} from "pageStyles/index.styles";
import { ORDER_DATA } from "shared/constants";

const columnData = [
  {
    columnId: "image",
    center: true,
    render: () => (
      <Image
        src={imageBall}
        alt="Ball Image"
        objectFit="cover"
        style={{
          margin: "auto",
        }}
      />
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
    center: true,
  },
  {
    columnId: "price",
    label: "Price",
    render: (price: number) => "$" + price,
  },
];

const App: React.FC = (): ReactElement => {
  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  const [orderAddress, setOrderAddress] = useState<OrderAddress | undefined>();
  const [updatedAt, setUpdatedAt] = useState<Date>();

  const [checkMobileView] = useMediaQuery("(max-width: 48em)");
  const { openNotificationSuccess } = useNotification();

  const footerData = useMemo(
    () => ({
      leftText: "Total:",
      rightText:
        "$" +
        orderList?.reduce((a: number, b: OrderItem) => (a += b?.price || 0), 0),
    }),
    [orderList]
  );

  const handleSubmitCancel = useCallback(async () => {
    openNotificationSuccess("Cancel the order successful");
  }, [openNotificationSuccess]);
  const handleSubmitRefund = useCallback(async () => {
    openNotificationSuccess("Refund the order successful");
  }, [openNotificationSuccess]);
  const handleResendConfirmation = useCallback(async () => {
    openNotificationSuccess("Refund Confirmation the order successful");
  }, [openNotificationSuccess]);
  const handleSubmitResendTracking = useCallback(async () => {
    openNotificationSuccess("Refund Tracking the order successful");
  }, [openNotificationSuccess]);

  const {
    open: openCancel,
    close: closeCancel,
    Dialog: DialogCancel,
  } = useModal({
    modalBody: CancelBodyModal,
    handleSubmit: handleSubmitCancel,
  });
  const {
    open: openRefund,
    close: closeRefund,
    Dialog: DialogRefund,
  } = useModal({
    modalBody: RefundBodyModal,
    handleSubmit: handleSubmitRefund,
  });
  const {
    open: openResendConfirmation,
    close: closeResendConfirmation,
    Dialog: DialogResendConfirmation,
  } = useModal({
    modalBody: ResendConfirmationBodyModal,
    handleSubmit: handleResendConfirmation,
  });
  const {
    open: openResendTracking,
    close: closeResendTracking,
    Dialog: DialogResendTracking,
  } = useModal({
    modalBody: ResendTrackingBodyModal,
    handleSubmit: handleSubmitResendTracking,
  });

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem(ORDER_DATA) || "{}");

    setOrderList(orderData?.orderList || []);
    setOrderAddress(orderData?.orderAddress);
    setUpdatedAt(orderData?.updatedAt);
  }, []);

  return (
    <>
      <Container maxW="3xl">
        <AppHeaderContainer>
          <NormalText
            fontSizeProps="18px"
            text={
              <>
                <b>Order</b> US5426899
              </>
            }
          />
          <Flex flexDirection="column">
            <NormalText
              text="Created on Mar 6th 2021"
              textPosition={checkMobileView ? TEXT_POSITION.RIGHT : ""}
            />
            <NormalText
              text={`Last updated on ${dayjs(updatedAt).format("MMM D, YYYY")}`}
              textPosition={checkMobileView ? TEXT_POSITION.RIGHT : ""}
            />
          </Flex>
        </AppHeaderContainer>
        <AppContainer>
          <AppTableContainer>
            <Table
              tableData={orderList}
              columnData={columnData}
              footerData={footerData}
            />
          </AppTableContainer>
          <AppAddressContainer>
            <NormalText
              text="Shipping Address"
              bold
              textTransform="uppercase"
            />
            <NormalText text={orderAddress?.name} />
            <Box
              maxWidth={{
                base: "100%",
                sm: "200px",
              }}>
              <NormalText text={orderAddress?.address} />
            </Box>
            <AppAddressTagContainer>
              <TagAddress>SUBSCRIPTION_ORDER</TagAddress>
              <TagAddress>PAID</TagAddress>
              <TagAddress>UNFULFILLED</TagAddress>
            </AppAddressTagContainer>
          </AppAddressContainer>
          <AppActionContainer>
            <ActionButton
              onClick={() =>
                openCancel({
                  title: "Cancel",
                })
              }>
              Cancel
            </ActionButton>
            <ActionButton
              onClick={() =>
                openRefund({
                  title: "Refund",
                })
              }>
              Refund
            </ActionButton>
            <ActionButton
              onClick={() =>
                openResendConfirmation({
                  title: "Resend Confirmation",
                })
              }>
              Resend Confirmation
            </ActionButton>
            <ActionButton
              onClick={() =>
                openResendTracking({
                  title: "Resend Tracking",
                })
              }>
              Resend Tracking
            </ActionButton>
          </AppActionContainer>
        </AppContainer>
      </Container>
      {DialogCancel(closeCancel)}
      {DialogRefund(closeRefund)}
      {DialogResendConfirmation(closeResendConfirmation)}
      {DialogResendTracking(closeResendTracking)}
    </>
  );
};

export default App;
