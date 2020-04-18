import React,{useState} from 'react';
import {v4 as uuidv4} from "uuid";
import { Form } from "react-bootstrap";
import img1 from "./img1.png"
import img2 from "./img2.jpg"
import './App.css';
import Movieliste from './movieliste';
import Search from './search';
function Moviecontainer() {
 
  const[keyword,setkeyword]=useState("")
  const[movie,setmovie]=useState({})
  const [addmovie,setaddmovie]=useState(false)

  const [movieliste,setmovieliste]=useState([
    { title:"the ring",
     id:uuidv4(),
  image : img1,
  description:"tells the film about a suspicious video with some strange scenes, after the viewer watches it, a phone call comes to him informing him that he will die after 7 days"
    },
    { title :"the grudge",
      id:uuidv4(),
   image:img2,
   description:"tells the story of the film, the life of a student called (Karen) studying social sciences in Japan, and to noble morals agree to replace a nurse, if that nurse did not go to work on that day, and indeed (Karen) goes home instead of the nurse to care for an old American lady who does not The movement can be called Emma, but it discovers that the house is inhabited by evil spirits and ghosts as a result of the horrific killing of a person earlier."
    }
  ])
 
  const add =()=>{
    setmovieliste(movieliste.concat({id:uuidv4(),title:movie.title,description:movie.description})) 
    setaddmovie(false)
 }
 const handleChange=(event)=> {
  setaddmovie(movieliste.concat({
    image: URL.createObjectURL(event.target.files[0])
  }))
}
  return (
    <div className="App">
      <header className="App-header">
       <Search setkeyword={setkeyword} keyword={keyword}/>
       { addmovie ? 
        (
          <div>
          <input type="text" placeholder="title movie" onChange={e=>setmovie({...movie, title:e.target.value })} value={movie.title}/>
          <form>
          <Form.File
            id="custom-file-translate-scss"
            lang="en" 
            onChange={handleChange}
             />
         
          <br />
          <textarea style={{ border: "1px solid #ced4da"}  } rows={5}  placeholder="description" defaultValue={""}
          onChange={e=>setmovie({...movie , description:e.target.value })} value={movie.description} />
       
          </form>
          
          <button onClick={add}>finish</button>
        </div> 
        ):
          <div>
        
        </div>}
       <button  onClick={()=>{  setaddmovie (true)}}>add movie</button>
   <Movieliste  movieliste={movieliste} keyword={keyword}/>
        </header>
    </div>
  );
}

export default Moviecontainer;
