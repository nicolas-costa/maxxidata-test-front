import React from "react";
import { Typography } from "@material-ui/core";
import Table from "../../components/molecules/Table";

const ProfessionalType = (props) => {
  const columns = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "descricao", headerName: "Descrição", width: 350 },
    { field: "situacao", headerName: "Situação", width: 150 },
  ];

  return (
    <div>
      <Typography variant="h4">Tipos de profissional</Typography>
      <Table columns={columns} />
    </div>
  );
};

export default ProfessionalType;
