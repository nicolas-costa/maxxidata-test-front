import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

export default class Table extends Component {
  constructor() {
    super();
  }

  render() {
    const { columns, rows = [] } = this.props;

    return (
      <div style={{ height: 400, width: "100%", marginTop: 30 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    );
  }
}
