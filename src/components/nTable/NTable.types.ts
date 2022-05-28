export type Order = "asc" | "desc";

export type IHeadCell<T> = {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric: boolean;
  rightAligned?: boolean;
};

export type ITableProps<T> = {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
};
