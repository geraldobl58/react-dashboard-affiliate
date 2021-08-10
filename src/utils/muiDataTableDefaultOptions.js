const options = {
  filterType: 'checkbox',
  filter: false,
  print: false,
  download: false,
  textLabels: {
    body: {
      noMatch: 'Nenhum item encontrado',
      toolTip: 'Sort',
      columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
    },
    pagination: {
      next: 'Próxima Página',
      previous: 'Página Anterior',
      rowsPerPage: 'Itens por Página',
      displayRows: 'registro(s) - total',
    },
    toolbar: {
      search: 'Pesquisar',
      downloadCsv: 'Download CSV',
      print: 'Imprimir',
      viewColumns: 'Ver Colunas',
      filterTable: 'Filtrar Tabela',
    },
    selectedRows: {
      text: 'Items selecionados',
    },
    filter: {
      all: 'Todos',
      title: 'Filtros',
      reset: 'Redefinir',
    },
    viewColumns: {
      title: 'Mostrar Colunas',
      titleAria: 'Mostrar/Esconder colunas da tabela',
    },
  },
};

export default options;
