// import React from 'react'

// const Post = ({ posts, loading }) => {
//     if (loading) {
//         return (
//             <h1>Loading.....</h1>
//         )
//     }
//     return (
//         <>
//             {posts.map((data, index) => (
//                 <div className='list' key={index}>
//                     <p >{data.title}</p>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default Post


/* eslint-disable react/prop-types */
import React from 'react'

const Post = ({posts}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>{posts.map((item,index) => <h1 key={item.id}>{item?.id + "  "}{item.title}</h1>)}</div>
  )
}

export default Post