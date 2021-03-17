import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

export default class Table extends Component {
  constructor() {
    super();
  }

  state = {
    rows: [],
  };

  render() {
    const { columns } = this.props;
    const { rows } = this.state;

    return (
      <div style={{ height: 400, width: "100%", marginTop: 30 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    );
  }
}
