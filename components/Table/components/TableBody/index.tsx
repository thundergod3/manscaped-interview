import { Tbody, Tr, Td } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import { TableBodyProps } from "./tableBody.schema";

import NormalText from "components/NormalText";

const TableBody: React.FC<TableBodyProps> = ({
  tableData,
  columnData,
  footerData,
}): ReactElement => (
  <Tbody>
    {tableData.map((data, index) => (
      <React.Fragment key={index}>
        <Tr>
          {columnData.map((column, indexCol) => {
            const customCell = column?.render;

            return (
              <Td
                whiteSpace="nowrap"
                key={indexCol}
                textTransform="capitalize"
                px={{
                  base: 2,
                  md: 6,
                }}
                fontSize={{
                  base: "12px",
                  md: "16px",
                }}>
                {customCell?.(data?.[column?.columnId], data, index) ||
                  data?.[column?.columnId]}
              </Td>
            );
          })}
        </Tr>
      </React.Fragment>
    ))}
    {footerData && (
      <Tr>
        <Td
          border="none !important"
          whiteSpace="nowrap"
          textTransform="capitalize"
          px={{
            base: 2,
            md: 6,
          }}>
          <NormalText text={footerData?.leftText} fontSizeProps="16px" bold />
        </Td>
        <Td border="none !important" />
        <Td border="none !important" />
        <Td
          border="none !important"
          whiteSpace="nowrap"
          textTransform="capitalize"
          px={{
            base: 2,
            md: 6,
          }}>
          <NormalText text={footerData?.rightText} fontSizeProps="16px" />
        </Td>
      </Tr>
    )}
  </Tbody>
);

export default TableBody;
