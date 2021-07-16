import React from 'react'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    const pageItem = (page) => {
        paginate(page);
    }
    return (
        <nav >
            <ul className="pagination">
                {pageNumbers.map((page) => (
                    <li className='page-item' key={page}>
                        <a onClick={() => pageItem(page)} href='!#' className="page-link">{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
