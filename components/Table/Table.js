import React from 'react';
import {Table} from 'react-bootstrap';
import Link from 'next/link';
import {useTranslation} from "react-i18next";

const table = ({rows, lang}) => {
    const {t} = useTranslation()

    return <Table striped bordered hover>
        <thead>
           <tr>
                <th>{t('profile.orders.table.book')}</th>
                <th>{t('profile.orders.table.price')}</th>
                <th>{t('profile.orders.table.author')}</th>
           </tr>
        </thead>
        <tbody>
        {rows.map(row=>(
            <tr key={row.id}>
                <td>
                    <Link href={`/books/[id]?l=${lang}`} as={`/books/${row.id}?l=${lang}`}>
                        <a>{row.title}</a>
                    </Link>
                </td>
                <td>{row.current_price}</td>
                <td>{row.author}</td>
            </tr>
        ))}
        </tbody>
    </Table>
}

export default table;