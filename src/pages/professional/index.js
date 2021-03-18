import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Table from "../../components/molecules/Table";
import Fab from "../../components/atoms/Fab";
import { getAll } from "../../services/professional";
import New from "./new";
import columns from "./columns";

const Professional = (props) => {
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    const res = await getAll();

    if (res) {
      setRows(res);
    }
  }, []);

  return (
    <div>
      <Typography variant="h4">Profissionais</Typography>
      <Table columns={columns} rows={rows} />
      <Fab color="primary" to={"/novo-profissional"} aria="add" />
    </div>
  );
};

export default Professional;
export { New };
