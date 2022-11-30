import React, { ReactElement } from "react";
import { Center, Spinner, SpinnerProps } from "@chakra-ui/react";

const Loading: React.FC<SpinnerProps> = ({
  size = "xl",
  ...rest
}): ReactElement => (
  <Center w="full">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size={size}
      {...rest}
    />
  </Center>
);

export default Loading;
