import { TextareaProps } from "@chakra-ui/react";

export interface TextAreaFieldProps extends TextareaProps {
  type?: string;
  label?: string;
  onSubmit?: () => void;
  usingEnterInput?: boolean;
  formControlStyle?: any;
  formLabelStyle?: any;
  showingFocusBorder?: boolean;
  isDisabled?: boolean;
  error?: string;
  touched?: boolean;
  name?: string;
}
