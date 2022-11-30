export interface ColumnData {
  columnId: string;
  label?: string;
  widthMobile?: string;
  width?: string;
  textColor?: string;
  render?: (value?: any, record?: any, index?: number) => any;
}

export interface FooterData {
  leftText?: string | JSX.Element;
  rightText?: string | JSX.Element;
}

export interface TableProps {
  tableData: any[];
  columnData: ColumnData[];
  loading?: boolean;
  renderEmptyData?: JSX.Element;
  textEmpty?: string;
  footerData?: FooterData;
}
