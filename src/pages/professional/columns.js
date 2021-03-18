const columns = [
  { field: "id", headerName: "Id", sortable: false, width: 70 },
  {
    field: "nome",
    headerName: "Nome",
    sortable: false,
    width: 150,
  },
  {
    field: "telefone",
    headerName: "Telefone",
    sortable: false,
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 150,
  },
  {
    field: "tipoDeProfissional",
    headerName: "Tipo de profissional",
    sortable: false,
    width: 300,
    valueGetter: (params) => params.row.TipoDeProfissional.descricao,
  },
  {
    field: "situacao",
    headerName: "Situacao",
    sortable: false,
    width: 150,
    valueGetter: (params) => (params.row.situacao ? "Ativo" : "Inativo"),
  },
];

export default columns;
