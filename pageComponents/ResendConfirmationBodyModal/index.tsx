import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import TextAreaField from "components/TextAreaField";

const ResendConfirmationBodyModal: React.FC = (): ReactElement => (
  <Box>
    <TextAreaField label="Reason why you resend confirmation this order" />
  </Box>
);

export default ResendConfirmationBodyModal;
