import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Table from "../../components/molecules/Table";
import { getAll } from "../../services/professionalType";

const ProfessionalType = (props) => {
  const columns = [
    { field: "id", headerName: "Id", sortable: false, width: 70 },
    {
      field: "descricao",
      headerName: "Descrição",
      sortable: false,
      width: 350,
    },
    {
      field: "situacao",
      headerName: "Situação",
      sortable: false,
      width: 150,
      valueGetter: (params) => (params.situacao ? "Ativo" : "Inativo"),
    },
  ];

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
    </div>
  );
};

export default ProfessionalType;
