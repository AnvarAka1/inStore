import React from 'react';
import {Table} from 'react-bootstrap';
import Link from 'next/link';
const table = ({rows, lang}) => {

    const bookCols = [
        ["#", "#", "#"],
        ["Книга", "Book", "Kitob"],
        ["Цена", "Price", "Uzb"],
        ["Автор", "Author", "Uzb"]
    ]
    return <Table striped bordered hover>
        <thead>
           <tr>{bookCols.map(col=>(
                <th key={col[0]}>{col[lang]}</th>
            ))}</tr>
        </thead>
        <tbody>
        {rows.map(row=>(
            <tr key={row.id}>
                <td>{row.id}</td>
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