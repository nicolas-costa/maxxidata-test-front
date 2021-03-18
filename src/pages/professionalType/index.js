import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Table from "../../components/molecules/Table";
import { getAll } from "../../services/professionalType";
import Fab from "../../components/atoms/Fab";
import New from "./new";
import columns from "./columns";

const ProfessionalType = (props) => {
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    const res = await getAll();

    if (res) {
      setRows(res);
    }
  }, []);

  return (
    <div>
      <Typography variant="h4">Tipos de profissional</Typography>
      <Table columns={columns} rows={rows} />
      <Fab color="primary" to={"/novo-tipo-de-profissional"} aria="add" />
    </div>
  );
};

export default ProfessionalType;
export { New };
