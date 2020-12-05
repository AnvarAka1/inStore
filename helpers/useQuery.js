import { useRouter } from 'next/router'
import { filter, flatten, fromPairs, includes, join, map, pipe, prop, propOr, split, toPairs } from 'ramda'

const getBasePath = pipe(
  propOr('', 'asPath'),
  split('?'),
  prop(0)
)
const getQueryObject = pipe(
  propOr('', 'asPath'),
  split('?'),
  propOr('', 1),
  split('&'),
  map(split('=')),
  fromPairs,
  JSON.stringify,
  JSON.parse
)

function useQuery () {
  const router = useRouter()
  const queryParams = getQueryObject(router)
  const basePath = getBasePath(router)

  const replaceParams = paramsObj => {
    const baseQuery = pipe(
      toPairs,
      filter(([key]) => !includes(key, Object.keys(paramsObj))),
    )(queryParams)

    const newQueryPairs = [...baseQuery, ...toPairs(paramsObj)]

    const newQueryParams = pipe(
      map(join('=')),
      join('&')
    )(newQueryPairs)
    const newAsPath = `${basePath}?${newQueryParams}`
    return router.replace(router.pathname, newAsPath)
  }

  return { queryParams, replaceParams }
}

export default useQuery
