import { prop } from 'ramda'

export const getPaginationFromResponse = data => {
  const next = prop('next', data)
  const previous = prop('previous', data)
  const count = prop('count', data)

  return {
    next,
    previous,
    count
  }
}
