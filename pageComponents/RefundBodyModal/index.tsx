import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import TextAreaField from "components/TextAreaField";

const RefundBodyModal: React.FC = (): ReactElement => (
  <Box>
    <TextAreaField label="Reason why you refund this order" />
  </Box>
);

export default RefundBodyModal;
