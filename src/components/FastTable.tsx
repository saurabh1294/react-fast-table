import { List } from "react-virtualized";

export default function FastTable(props: any) {
    return (
    <List
      width={props.width}
      height={props.height}
      rowRenderer={props.data}
      rowCount={props.rowCount}
      rowHeight={props.rowHeight}
    />
  );
}