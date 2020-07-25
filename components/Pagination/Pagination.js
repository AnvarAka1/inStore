import React from 'react';
import {Pagination as BPPagination} from "react-bootstrap";
import {useRouter} from 'next/router'

const ITEMS_PER_PAGE = 10
const PAGE_SHOW_THRESHOLD = 4

function Pagination({numberOfItems, active, onChange}) {
    const activePage = parseInt(active)
    const router = useRouter()
    const pages = Math.ceil(parseInt(numberOfItems) / ITEMS_PER_PAGE)
    const numberOfPages = pages > 1 ? pages : 0
    const {pathname, query} = router;
    let path = pathname + '?'
    for (let key in query) {
        if (key === 'page') continue
        path += `${key}=${query[key]}&`
    }
    const onChangePage = (page) => {
        return onChange(page)
            .then(() => router.push(`${path}page=${page}`))
            .then(() => window.scrollTo(0, 0))
    }
    const items = []
    for (let number = 1; number <= numberOfPages; number++) {
        let pagination = (
            <BPPagination.Item
                key={number}
                active={number === activePage}
                onClick={() => onChangePage(number)}
            >
                {number}
            </BPPagination.Item>
        )
        if(numberOfPages > PAGE_SHOW_THRESHOLD) {
            if(Math.abs(active - number) === 3) {
                pagination = <BPPagination.Ellipsis key={number} disabled />
            }
            if(Math.abs(active - number) > 3 && number > 1 && number < numberOfPages){
                continue;
            }
        }
        items.push(pagination)
    }
    return (
        <BPPagination className="mt-5 mb-4 pt-5 pb-5 justify-content-end" size="sm">
            {numberOfPages > 0 && (
                <>
                    <BPPagination.First onClick={() => onChange(1)}/>
                    <BPPagination.Prev onClick={() => onChange(activePage - 1)} disabled={activePage <= 1}/>
                    {items}
                    <BPPagination.Next onClick={() => onChange(activePage + 1)} disabled={activePage + 1 >= pages}/>
                    <BPPagination.Last onClick={() => onChange(pages)}/>
                </>
            )}
        </BPPagination>
    )
}
Pagination.defaultProps = {
    onChange: () => Promise.resolve()
}
export default Pagination