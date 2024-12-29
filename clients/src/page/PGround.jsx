import React from 'react'
import { useNavigate, useParams } from "react-router-dom"; 


const PGround = () => {
  const { userId } = useParams();
  
  return <div>hii parent {userId} </div>;
}

export default PGround
