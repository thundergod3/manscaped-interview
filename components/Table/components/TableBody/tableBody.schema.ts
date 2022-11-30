import { ColumnData, FooterData } from "components/Table/table.schema";

export type TableBodyProps = {
  tableData: any[];
  columnData: ColumnData[];
  footerData?: FooterData;
};
