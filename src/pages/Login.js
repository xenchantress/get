// import React from "react";
// import "./Login.css";
// import { useState } from "react";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [image, setImage] = useState(null);

//   const handleRegister = () => {
//     console.log(
//       `Registering with username: ${username}, password: ${password}, and image: ${image}`
//     );
//   };

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];

//     setImage(selectedImage);
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Upload Image:
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </label>
//         <br />
//         <button type="button" onClick={handleRegister}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// src/pages/Login.js
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
//import axios from 'axios';
import { login } from "'./api/auth";
import UserContext from '../context/UserContext';

const Login =() => {
  const [userInfo, setUserInfo] = useState({});
  //getting the context value
  const [user, setUser] = useContext(UserContext)

  const { mutate } = useMutation({ 
    mutationKey:["login"],
    mutationFn: () => login(userInfo),
    onSuccess:() =>{
      setUser ("IT'S ME MARIO");
    },
    //onError
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleFormSubmit =(e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        </div>
    </div>
  );
};

export default Login;