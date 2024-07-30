import React,{useEffect, useState} from 'react'
//import ListItem from '../components/ListItem'
//import notes from '../assets/data';
import { useParams, useNavigate} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = (props,history) => {
  const { id } = useParams();// Retrieve id parameter from URL
  const navigate = useNavigate(); 
  //const noteIndex = parseInt(id, 10) - 1;
  const [note, setNote] = useState({body: ''});//null

  useEffect(()=>{
    const getNote = async () => {
      try {
        let response = await fetch(`/api/notes/${id}/`);
        if (response.ok) {
          let data = await response.json();
          setNote(data);
        } else {
          console.error("Failed to fetch note:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    getNote();
  }, [id]);

  let createNote =async() =>{
    await fetch(`/api/notes/`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(note)
    })
  }


  let updateNote =async() =>{
    await fetch(`/api/notes/${id}/`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(note)
    })
    
  }

  let deleteNote=async() =>{
    await fetch(`/api/notes/${id}/`,{
      method:`DELETE`,
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/');
  }



 
  const handleBackClick = () => {
    if(id !== 'new' && !note.body){
      deleteNote()
    }
    else if(id !== 'new'){ //===
      updateNote()
    }else if(id ==='new' && note.body ){ //note !== null
      createNote()
    }
    navigate(-1); // Go back to the previous page
  };
  

  if (!note) {
    return <p>Loading...</p>;
  }

  let handleChange=(value) =>{
    setNote(mote => ({...note,'body': value}))
    console.log("Handle Change:",note)
  }


  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <div onClick={handleBackClick}>
          <ArrowLeft />
          </div>
        </h3>
        {id !== 'new' && <button onClick={deleteNote}>Delete</button>}
      </div>
      <textarea onChange={(e)=> {handleChange(e.target.value)}} value={note.body}>

      </textarea>
      
    </div>
    
  )
}

export default NotePage
