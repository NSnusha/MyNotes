import React from 'react'
import { useNavigate } from 'react-router-dom';

let getTitle =(note)=>{
  let title = note.body.split('\n')[0]

  if (title.length >45 ){
    return title.slic(0,45)
  }

  return title
}
let getDate=(note)=>{
  return new Date(note.updated).toLocaleDateString()
}

let getContent=(note)=>{
  let title = getTitle(note)
  let content = note.body.replaceAll(`\n`,' ')
  content = content.replaceAll(title,"")

  if(content.length>45){
    return content.slice(0,45)
  }
  else{
    return content
  }
  
}

const ListItem = ({note}) => {
const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/note/${note.id}`);
  };
  return (
    <div className="notes-list-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
     <h2>{getTitle(note)}</h2>
     <p><span>{getDate(note)}</span>{getContent(note)}</p>
    </div>
  )
}

export default ListItem

//