import {
  chakra,
  Flex as CkFlex,
  Box as CkBox,
  Tag as CkTag,
  Button as CkButton,
} from "@chakra-ui/react";

export const AdminContainer = chakra(CkBox, {
  baseStyle: () => ({
    padding: {
      base: "16px",
      sm: "24px",
    },
    background: "#fff",
    marginTop: "25px",
  }),
});

export const AdminTableContainer = chakra(CkBox, {
  baseStyle: () => ({
    background: "#fff",
    marginTop: "24px",
    marginBottom: "24px",
  }),
});
