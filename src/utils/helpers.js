export function normalizeCurrency(value) {
  let data = value.replace('$ ', '')
  data = data.replace('+', '')

  return data;
}



