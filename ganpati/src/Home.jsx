import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    try{
      localStorage.removeItem('token');
      toast.error('Please Login!!!');
      navigate('/admin/login');

    }catch(error){
      console.log("error",error);
    }
  }
  return (
    <div>
      Home Page
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Home
