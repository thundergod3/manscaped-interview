import { chakra } from "@chakra-ui/react";

import isPropValid from "@emotion/is-prop-valid";

const chakraShouldForwardProp = (CkComponent: any, baseStyle: any) =>
  chakra(CkComponent, {
    shouldForwardProp: (props?: any) => isPropValid(props),
    baseStyle,
  });

export default chakraShouldForwardProp;
