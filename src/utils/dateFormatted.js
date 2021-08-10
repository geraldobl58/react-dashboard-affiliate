function dateFormatted(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export default dateFormatted;
