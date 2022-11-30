import { TextProps } from "@chakra-ui/react";

export interface TitleTextProps extends TextProps {
  title?: string;
  textPosition?: string;
  fontSizeMobileProps?: any;
}
