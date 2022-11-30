import { InputProps } from "@chakra-ui/react";

export interface InputFieldProps extends InputProps {
  label?: string;
  onSubmit?: () => void;
  usingEnterInput?: boolean;
  formControlStyle?: any;
  formLabelStyle?: any;
  leftInputIcon?: any;
  leftText?: string;
  rightInputIcon?: any;
  showingFocusBorder?: boolean;
  isDisabled?: boolean;
  error?: string;
  touched?: boolean;
  name?: string;
}
