import React, { ReactElement } from "react";

import { NormalTextProps } from "./normalText.schema";

import { NormalTextContainer, Text } from "./normalText.styles";

const NormalText: React.FC<NormalTextProps> = ({
  text,
  bold,
  center,
  right,
  fontSizeProps = "14px",
  fontSizeMobileProps,
  normalTextContainerStyle = {},
  ...rest
}): ReactElement => (
  <NormalTextContainer
    center={center}
    right={right}
    {...normalTextContainerStyle}>
    <Text
      fontSizeProps={fontSizeProps}
      fontSizeMobileProps={fontSizeMobileProps}
      bold={bold}
      center={center}
      right={right}
      {...rest}>
      {text}
    </Text>
  </NormalTextContainer>
);

export default NormalText;
