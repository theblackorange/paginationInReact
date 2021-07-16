import React from 'react'

export const Post = ({posts, loading}) => {

    if(loading){
        return <h1>LOADING...</h1>
    }
    return (
        <ul className="list-group mb-4">
           { posts.map(post => (
               <li key={post.id} className="list-group-item">{post.name}</li>
           ))}
        </ul>
    )
}
