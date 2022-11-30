import { TextProps } from "@chakra-ui/react";

export interface NormalTextProps extends TextProps {
  text?: string | JSX.Element;
  bold?: boolean;
  center?: boolean;
  textPosition?: string;
  fontSizeProps?: string;
  fontSizeMobileProps?: any;
  normalTextContainerStyle?: any;
}

export enum TEXT_POSITION {
  CENTER = "center",
  RIGHT = "right",
}
