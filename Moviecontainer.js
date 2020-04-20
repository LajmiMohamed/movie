import React,{useState} from 'react';
import {v4 as uuidv4} from "uuid";
import { Form } from "react-bootstrap";
import img1 from "./img1.png"
import img2 from "./img2.jpg"
import './App.css';
import Movieliste from './movieliste';
import Search from './search';
import StarRatingComponent from 'react-star-rating-component';

function Moviecontainer() {
 
  const[keyword,setkeyword]=useState("")
  const[movie,setmovie]=useState({})
  const [addmovie,setaddmovie]=useState(false)
  const[star,setStar]=useState({rating:5})
  const[searchstar,setSearchstar]=useState({rating:5})
  const [movieliste,setmovieliste]=useState([
    { title:"the ring",
     id:uuidv4(),
  image : img1,
  description:"tells the film about a suspicious video with some strange scenes, after the viewer watches it, a phone call comes to him informing him that he will die after 7 days"
  , star:star.rating
},
    { title :"the grudge",
      id:uuidv4(),
   image:img2,
   description:"tells the story of the film, the life of a student called (Karen) studying social sciences in Japan, and to noble morals agree to replace a nurse, if that nurse did not go to work on that day, and indeed (Karen) goes home instead of the nurse to care for an old American lady who does not The movement can be called Emma, but it discovers that the house is inhabited by evil spirits and ghosts as a result of the horrific killing of a person earlier."
   , star:star.rating}
  ])
 
  const add =()=>{
    setmovieliste(movieliste.concat({id:uuidv4(),title:movie.title,description:movie.description,image:movie.file,

      star:star.rating})) 
    setaddmovie(false)
 }
  const handleChange=(event) =>{
  setmovie({...movie,
    file: URL.createObjectURL(event.target.files[0])
  })
}
 const onStarClick = (nextValue, prevValue, name)=> {
    setStar({rating: nextValue});
  }
  const onStarClicktwo = (nextValue, prevValue, name)=> {
    setSearchstar({rating: nextValue});
  }
  return (
    <div className="App">
      <header className="App-header">
       <Search setkeyword={setkeyword} keyword={keyword}/>
       <StarRatingComponent className="x"
          name="rate1" 
          starCount={10}
          value={searchstar.rating}
          onStarClick={onStarClicktwo.bind(setSearchstar)}
        />
       { addmovie ? 
        (
          <div>
          <input type="text" placeholder="title movie" onChange={e=>setmovie({...movie, title:e.target.value })} 
          value={movie.title}/>
          <form>
          <input type="file" onChange={handleChange}/>
         
          <br />
          <textarea style={{ border: "1px solid #ced4da"}  } rows={5}  placeholder="description" defaultValue={""}
          onChange={e=>setmovie({...movie , description:e.target.value })} value={movie.description} />
       
          </form>
          <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={star.rating}
          onStarClick={onStarClick.bind(setStar)}
        />
        <br/> 
          <button onClick={add}>finish</button>
        </div> 
        ):
          <div>
        
        </div>}
       <button  onClick={()=>{  setaddmovie (true)}}>add movie</button>
   <Movieliste  movieliste={movieliste} keyword={keyword} searchstar={searchstar}/>
   <br />
        </header>
    </div>
  );
}

export default Moviecontainer;