/* eslint-disable react/prop-types */
import React from 'react'

const Pagination = ({postsPerPage,length,handlePagination,currentPage}) => {
    const paginationNumber = [];
    for(let i=1;i<= Math.ceil(length/postsPerPage);i++){
        paginationNumber.push(i);
    }
    console.log("postsPerPage,length",postsPerPage,length);
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        {paginationNumber.map((item,index) => {
            return (
                <div key={index} style={{"padding":"10px","margin":"10px","fontSize":"larger"}} className={currentPage === item ? 'active' : ''} onClick={() => handlePagination(item)}>
                    {item}
                </div>
            )
        })}

    </div>
  )
}

export default Pagination

// import React from 'react'

// const Pagination = ({ postsPerPage, length, handlePagination, currentPage }) => {
//     let paginationNumber = []
//     for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
//         paginationNumber.push(i);
//     }
//     return (
//         <div className='pagination'>
//             {
//                 paginationNumber.map((data) => {
//                     console.log("data",data);
//                     return (
//                         <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ? 'active' : ''}>
//                             {data}
//                         </button>
//                     )

//                 })
//             }
//         </div>
//     )
// }
// export default Pagination













