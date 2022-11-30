import {
  chakra,
  Flex as CkFlex,
  Box as CkBox,
  Tag as CkTag,
  Button as CkButton,
} from "@chakra-ui/react";

export const AppHeaderContainer = chakra(CkFlex, {
  baseStyle: () => ({
    justifyContent: {
      base: "flex-start",
      sm: "space-between",
    },
    alignItems: {
      base: "flex-start",
      sm: "center",
    },
    flexDirection: {
      base: "column",
      sm: "row",
    },
    marginTop: "75px",
  }),
});

export const AppContainer = chakra(CkBox, {
  baseStyle: () => ({
    padding: {
      base: "16px",
      sm: "24px",
    },
    background: "#fff",
    marginTop: "25px",
  }),
});

export const AppTableContainer = chakra(CkBox, {
  baseStyle: () => ({
    background: "#fff",
    borderBottom: "solid 1px",
    borderBottomColor: "background.grey.100",
  }),
});

export const AppAddressContainer = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
    marginTop: "27px",
  }),
});

export const AppAddressTagContainer = chakra(CkFlex, {
  baseStyle: () => ({
    marginTop: "15px",
    alignItems: "center",
    borderBottom: "solid 1px",
    borderBottomColor: "background.grey.100",
    flexWrap: "wrap",
    paddingBottom: "20px",
  }),
});

export const TagAddress = chakra(CkTag, {
  baseStyle: () => ({
    borderRadius: "30px",
    background: "background.grey.200",
    color: "text.grey.500",
    textTransform: "capitalize",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "-0.06px",
    lineHeight: "20px",
    marginRight: "20px",
    borderBottom: "solid 1px",
    borderBottomColor: "background.grey.100",
    marginBottom: {
      base: "10px",
      sm: 0,
    },

    _last: {
      marginRight: 0,
    },
  }),
});

export const AppActionContainer = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    marginTop: "24px",
    flexWrap: "wrap",
  }),
});

export const ActionButton = chakra(CkButton, {
  baseStyle: () => ({
    background: "background.grey.400",
    fontSize: "15px",
    color: "#fff",
    marginRight: "13px",
    marginBottom: {
      base: "10px",
      md: 0,
    },

    _last: {
      marginRight: 0,
    },
  }),
});
