  
import React from 'react'
import Moviecard from "./moviecard"
const  Movieliste =(props) =>{
    return (
        <div style={{display:"flex",marginTop:"20px",flexWrap: "wrap"}}>
             {props.movieliste.filter(el=> props.searchstar.rating===el.star  ).filter(el=>el.title.includes(props.keyword))
             .map(el=> ( 
      <Moviecard star ={el.star} title={el.title} image={el.image} description={el.description}/>   )  )  } 
        </div>
    )
}
export default Movieliste