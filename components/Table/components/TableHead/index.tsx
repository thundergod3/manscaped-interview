import React, { ReactElement } from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";

import NormalText from "components/NormalText";

import { TableHeadProps } from "./tableHead.schema";

const TableHead: React.FC<TableHeadProps> = ({ columnData }): ReactElement => (
  <Thead>
    <Tr>
      {columnData.map((column, index) => (
        <Th
          whiteSpace="nowrap"
          scope="col"
          key={column?.columnId + index}
          width={{
            base: column?.widthMobile || "max-content",
            md: column?.width || "max-content",
          }}
          px={{
            base: 2,
            md: 6,
          }}>
          {column?.label && (
            <NormalText
              text={column?.label}
              color={column?.textColor || "text.grey.600"}
              textTransform="capitalize"
              bold
            />
          )}
        </Th>
      ))}
    </Tr>
  </Thead>
);

export default TableHead;
