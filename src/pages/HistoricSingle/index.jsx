import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const HistoricSingle = () => {
  const { params } = useRouteMatch();
  console.log(params);

  return <h1>React: {params.id}</h1>;
};

export default HistoricSingle;
