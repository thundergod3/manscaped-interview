import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { OrderDetailFormBodyModalProps } from "./orderDetailFormBodyModal.schema";

import { OrderItem } from "shared/schemas";

import InputField from "components/InputField";

const OrderDetailFormBodyModal: React.FC<OrderDetailFormBodyModalProps> = ({
  data,
  setModalState,
  ...rest
}): ReactElement => {
  const [orderDetail, setOrderDetail] = useState<OrderItem | undefined>();

  const handleChangeOrderDetail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setOrderDetail({
        ...orderDetail,
        [name]: name === "productName" ? value : Number(value),
      });
    },
    [orderDetail]
  );

  useEffect(() => {
    if (data) {
      setOrderDetail(data);
    }
  }, [data]);

  useEffect(() => {
    if (orderDetail) {
      setModalState({
        ...rest,
        data: orderDetail,
      });
    }
  }, [data, orderDetail, rest, setModalState]);

  return (
    <Box>
      <Box mb="12px">
        <InputField
          label="Product"
          name="productName"
          value={orderDetail?.productName}
          onChange={handleChangeOrderDetail}
        />
      </Box>
      <Box mb="12px">
        <InputField
          type="number"
          label="Quantity"
          name="qty"
          value={orderDetail?.qty}
          onChange={handleChangeOrderDetail}
        />
      </Box>
      <InputField
        type="number"
        label="Price"
        name="price"
        value={orderDetail?.price}
        onChange={handleChangeOrderDetail}
      />
    </Box>
  );
};

export default React.memo(OrderDetailFormBodyModal);
