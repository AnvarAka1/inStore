import { prop } from 'ramda'

export const getValuesFromResponse = (res) => {
  const booksProps = prop('results', data)

  return {
    booksProps,
    pagination
  }
}
