import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import TextAreaField from "components/TextAreaField";

const ResendTrackingBodyModal: React.FC = (): ReactElement => (
  <Box>
    <TextAreaField label="Reason why you resend tracking this order" />
  </Box>
);

export default ResendTrackingBodyModal;
