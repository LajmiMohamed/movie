import React from 'react'

const  Movieliste =(props) =>{
    return (
        <div>
             {props.movieliste.filter(el=>el.title.includes(props.keyword)).map(el=> ( 
        <div style={{marginTop:"20px",  }}>
          <h2 style={{color:"blue"}}>{el.title}</h2> 
           <img  style={{height:"200px"}} src={el.image}/>
     <p> {el.description}</p>
           
        </div>   )  )  } 
        </div>
    )
}
export default Movieliste