import React, { ReactElement } from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";

import { TableHeadProps } from "./tableHead.schema";

import NormalText from "components/NormalText";

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
            md: 4,
          }}>
          {column?.label && (
            <NormalText
              text={column?.label}
              color={column?.textColor || "text.grey.600"}
              textTransform="uppercase"
              bold
              margin={column?.center ? "auto" : 0}
            />
          )}
        </Th>
      ))}
    </Tr>
  </Thead>
);

export default TableHead;
