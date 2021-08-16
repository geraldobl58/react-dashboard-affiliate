const columns = [
  {
    name: 'bandeira',
    label: 'Bandeira',
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: 'publisher',
    label: 'Publisher',
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: 'transactionId',
    label: 'Transaction ID',
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: 'sku',
    label: 'Sku',
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: 'vendaUnidade',
    label: 'Valor Unidade',
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value);
      },
    },
  },
  {
    name: 'comissao',
    label: 'Comissão',
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: 'comissaoValor',
    label: 'R$ Comissão',
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value);
      },
    },
  },
  {
    name: 'status',
    label: 'Status',
    options: {
      filter: false,
      sort: true,
    },
  },
];

export default columns;
