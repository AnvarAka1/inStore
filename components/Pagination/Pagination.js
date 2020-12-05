import React from 'react'
import { Pagination as BPPagination } from 'react-bootstrap'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import useQuery from '../../helpers/useQuery'
import {propOr} from "ramda";

const ITEMS_PER_PAGE = 10
const PAGE_SHOW_THRESHOLD = 4

function Pagination ({ numberOfItems, ...props }) {
  const { queryParams, replaceParams } = useQuery()
  const activePage = parseInt(propOr('1', 'page', queryParams))
  const pages = Math.ceil(parseInt(numberOfItems) / ITEMS_PER_PAGE)
  const numberOfPages = pages > 1 ? pages : 0

  const onChange = page =>
    Promise.resolve(replaceParams({ page }))
      .then(() => window.scrollTo(0, 0))

  const items = []
  for (let number = 1; number <= numberOfPages; number++) {
    let pagination = (
      <BPPagination.Item
        key={number}
        active={number === activePage}
        onClick={() => onChange(number)}
      >
        {number}
      </BPPagination.Item>
    )
    if (numberOfPages > PAGE_SHOW_THRESHOLD) {
      if (Math.abs(activePage - number) === 3) {
        pagination = <BPPagination.Ellipsis key={number} disabled={true} />
      }
      if (Math.abs(activePage - number) > 3 && number > 1 && number < numberOfPages) {
        continue
      }
    }
    items.push(pagination)
  }

  return (
    <BPPagination className="mt-5 mb-4 pt-5 pb-5 justify-content-end" size="sm">
      {numberOfPages > 0 && (
        <>
          <BPPagination.First onClick={() => onChange(1)} />
          <BPPagination.Prev onClick={() => onChange(activePage - 1)} disabled={activePage <= 1} />
          {items}
          <BPPagination.Next onClick={() => onChange(activePage + 1)} disabled={activePage + 1 >= pages} />
          <BPPagination.Last onClick={() => onChange(pages)} />
        </>
      )}
    </BPPagination>
  )
}
Pagination.defaultProps = {
  onChange: () => Promise.resolve()
}

Pagination.propTypes = {
  active: PropTypes.bool.isRequired,
  numberOfItems: PropTypes.number.isRequired,
  onChange: PropTypes.func
}

export default Pagination
