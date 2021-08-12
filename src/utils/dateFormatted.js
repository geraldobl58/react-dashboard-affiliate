function dateFormatted(date) {
  const day = date.split('-')[0];
  const month = date.split('-')[1];
  const year = date.split('-')[2];

  return `${year}/${`0${month}`.slice(-2)}/${`0${day}`.slice(-2)}`;
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

export default dateFormatted;
