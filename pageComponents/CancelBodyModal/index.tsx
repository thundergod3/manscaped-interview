import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

import TextAreaField from "components/TextAreaField";

const CancelBodyModal: React.FC = (): ReactElement => (
  <Box>
    <TextAreaField label="Reason why you cancel this order" />
  </Box>
);

export default CancelBodyModal;
