import { FormControl, Flex, Textarea } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import { TextAreaFieldProps } from "./textAreaField.schema";

import { FormLabel } from "./textAreaField.styles";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  type = "text",
  placeholder = "",
  label = "",
  onSubmit,
  usingEnterInput,
  formControlStyle = {},
  formLabelStyle = {},
  showingFocusBorder = true,
  isDisabled,
  error,
  touched,
  name,
  ...rest
}): ReactElement => {
  const handleOnKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      onSubmit?.();
    }
  };

  return (
    <FormControl isInvalid={error && touched} {...formControlStyle}>
      {label && <FormLabel {...formLabelStyle}>{label}</FormLabel>}
      <Flex alignItems="center">
        <Textarea
          name={name}
          type={type}
          placeholder={placeholder}
          onKeyDown={usingEnterInput ? (e) => handleOnKeyDown(e) : () => {}}
          focusBorderColor={!showingFocusBorder ? "transparent" : "blue.500"}
          disabled={isDisabled}
          background={error && touched ? "background.error" : "white"}
          {...rest}
        />
      </Flex>
    </FormControl>
  );
};

export default TextAreaField;
