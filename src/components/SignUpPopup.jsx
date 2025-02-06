// import React, { useState } from "react";

// const SignUpPopup = ({ isOpen, onClose, addUser }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const newUser = { name, email, password };
    
//     const response = await fetch("https://fakestoreapi.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });

//     if (response.ok) {
//       alert("Sign Up successful!");
//       addUser(newUser);
//       onClose();
//     } else {
     
//       alert("Error adding user, please try again!");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg w-96">
//         <h2 className="text-xl mb-4">Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full h-10 p-2 mb-4 border rounded-md"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full h-10 p-2 mb-4 border rounded-md"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full h-10 p-2 mb-4 border rounded-md"
//           />
//           <button type="submit" className="bg-orange-500 w-full h-10 text-white rounded-md">
//             Create Account
//           </button>
//         </form>
//         <button onClick={onClose} className="mt-4 text-10 pl-35 hover:text-orange-500 text-black-600">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUpPopup;
