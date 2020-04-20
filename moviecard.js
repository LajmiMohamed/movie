import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

 const Moviecard = (props) => {
    return (
       
              <div style={{marginTop:"10px", height:"540px" ,width:"300px",marginLeft:"20px",backgroundColor:"rgba(0, 0, 0, 0.781)",flexWrap: "wrap",borderRadius:"20px"}}>
          <h2 style={{color:"blue"}}>{props.title}</h2> 
           <img  style={{height:"200px",width:"290px"}} src={props.image}/>
     <p style={{fontSize:"13px"}}> {props.description}</p>
     <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.star}
          
        />
        </div>
        
    )
}
export default Moviecard