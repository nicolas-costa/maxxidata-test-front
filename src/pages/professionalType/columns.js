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
        valueGetter: (params) => (params.row.situacao ? "Ativo" : "Inativo"),
    },
];

export default columns;
