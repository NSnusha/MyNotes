import React from 'react'

import { useNavigate } from 'react-router-dom'
import{ReactComponent as AddIcon}  from '../assets/add.svg'

const AddButton = () => {
    const navigate = useNavigate(); 

    const AddNew=() =>{
        navigate("/note/new");

    }
  return (
    <div onClick={AddNew} className="floating-button">
      <AddIcon />
    </div>
  )
}

export default AddButton
