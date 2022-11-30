import { Box, Td } from "@chakra-ui/react";
import React, { ReactElement, useMemo } from "react";

import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import Loading from "components/Loading";
import NormalText from "components/NormalText";

import { TableProps } from "./table.schema";

import { TableContainer, TableLoadingContainer } from "./table.styles";

const Table: React.FC<TableProps> = ({
  tableData,
  columnData,
  loading,
  renderEmptyData,
  textEmpty = "No data found",
  footerData,
}): ReactElement => {
  const isEmptyData = useMemo(() => !tableData?.length, [tableData?.length]);

  return (
    <Box overflowX="auto">
      <Box
        width={{
          base: isEmptyData ? "100%" : "max-content",
          sm: "100%",
        }}>
        {loading ? (
          <TableLoadingContainer>
            <Loading />
          </TableLoadingContainer>
        ) : isEmptyData ? (
          renderEmptyData || (
            <TableLoadingContainer>
              <NormalText text={textEmpty} fontSize="20px" />
            </TableLoadingContainer>
          )
        ) : (
          <>
            <TableContainer>
              <TableHead columnData={columnData} />
              <TableBody
                tableData={tableData}
                columnData={columnData}
                footerData={footerData}
              />
            </TableContainer>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Table;
