import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const navigate = useNavigate();
   const [formdata,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    repassword:''
   });


   
   const handleSubmit = async(e) =>
   {
    e.preventDefault();
     if (formdata.password !== formdata.repassword) {
      toast.error("Passwords do not match");
      return;
    }

    try{
      const response = await axios.post('https://ganpati-mandal.onrender.com/api/admin/register',formdata);
      console.log("response", response);
      if(response.ok){
        toast.success("Admin Registered Successfully");
      }
      console.log(response);
      navigate('/');
      return;
    }
    catch(error){
      console.log("Error in Admin Registration",error);
      toast.error(error.response?.data?.message || "Something went wrong");
      return;
    }
   }

   const handleChange = (e) =>{
    const {id,value} = e.target;
    setFormData((prevFormData)=>({
      ...prevFormData,
      [id]:value
    }));
   }
   return (
    <div className="backdrop-blur-lg min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-red-300 dark:from-zinc-900 dark:to-zinc-800 px-4">
      <div className="backdrop-blur-lg w-full max-w-md bg-white-30 dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 my-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Welcome</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Please Register to be an Admin
        </p>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="name" className="block text-md font-medium text-gray-700 dark:text-gray-300">
                Full Name<span className='text-red-500 text-xl'>*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Pravin"
                className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700 dark:text-gray-300">
              Email Address<span className='text-red-500 text-xl'>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="projectmayhem@fc.com"
              className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='contact' className='block text-md font-medium text-gray-700 dark:text-gray-300'>Contact<span className='text-red-500 text-xl'>*</span></label>
            <input
              id="phone"
              type="tel"
              placeholder="98553xxxxx"
              className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700 dark:text-gray-300">
              Password<span className='text-red-500 text-xl'>*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="re-password" className="block text-md font-medium text-gray-700 dark:text-gray-300">
              ReType Password<span className='text-red-500 text-xl'>*</span>
            </label>
            <input
              id="repassword"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-white to-red-400 dark:from-zinc-800 dark:to-zinc-600 text-white font-semibold py-2 rounded-2xl shadow hover:brightness-110 transition-all"
            onClick={handleSubmit}
          >
            Sign up →
          </button>
          <h2 className="flex flex-wrap justify-center items-center gap-2 bg-red-200 shadow-md rounded-full px-6 py-3 text-lg font-semibold text-gray-800">
            Already have an account ?
            <button
              onClick={() => navigate('/')}
              className="bg-pink-500 hover:bg-red-200 transition-colors duration-600 text-white font-bold px-4 py-2 rounded-full"
            >
              Login
            </button>
          </h2>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent dark:via-gray-600" />
        </form>
      </div>
    </div>
  );
}

export default Register
