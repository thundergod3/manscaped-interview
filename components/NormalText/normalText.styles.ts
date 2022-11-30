import { Text as CkText, Flex as CkFlex } from "@chakra-ui/react";

import chakraShouldForwardProp from "utils/chakraShouldForwardProp";
import { TEXT_POSITION } from "./normalText.schema";

export const Text = chakraShouldForwardProp(
  CkText,
  ({ bold, textPosition, fontSizeProps, fontSizeMobileProps }: any) => ({
    fontFamily: "Arial, sans-serif",
    fontSize: {
      base: fontSizeMobileProps || fontSizeProps,
      md: fontSizeProps,
    },
    fontWeight: bold ? "bold" : "normal",
    color: "text.grey.600",
    textAlign:
      textPosition === TEXT_POSITION.CENTER
        ? "center"
        : textPosition === TEXT_POSITION.RIGHT
        ? "end"
        : "start",
    wordBreak: "break-word",
    whiteSpace: "normal",
    lineHeight: "22px",
  })
);

export const NormalTextContainer = chakraShouldForwardProp(
  CkFlex,
  ({ textPosition }: any) => ({
    justifyContent:
      textPosition === TEXT_POSITION.CENTER
        ? "center"
        : textPosition === TEXT_POSITION.RIGHT
        ? "flex-end"
        : "flex-start",
    alignItems: "center",
  })
);
