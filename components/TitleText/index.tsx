import React, { ReactElement } from "react";

import { TitleTextProps } from "./titleText.schema";

import { Text } from "./titleText.styles";

const TitleText: React.FC<TitleTextProps> = ({
  fontSize = "28px",
  lineHeight = "36px",
  title = "",
  textPosition = "left",
  fontSizeMobileProps,
  ...rest
}): ReactElement => (
  <Text
    textPosition={textPosition}
    fontSizeProps={fontSize}
    fontSizeMobileProps={fontSizeMobileProps}
    lineHeightProps={lineHeight}
    {...rest}>
    {title}
  </Text>
);

export default TitleText;
