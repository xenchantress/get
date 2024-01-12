// import logo from "./logo.svg";
// import "./App.css";
// import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
// import Login from "./src/pages/Login.js";
// import Register from "./pages/Register";
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
// import Navbar from './components/Navbar';
// //import Home from './components/Home'; // Create Home component
// //import Transactions from './components/Transactions'; // Create Transactions component
// //import Beneficiary from './components/Beneficiary'; // Create Beneficiary component
// //import Login from './components/Login';
// //import Register from './components/Register';

// const queryClient = new QueryClient();

// const App = () => {

//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/transactions" component={Transactions} />
//         <Route path="/beneficiary" component={Beneficiary} />
//         {/* Add other routes as needed */}
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//       </Switch>
//     </Router>
//   )
// };
//   const [user, setUser] = useState(null);

//   const handleLogin = (userData) => {
//     setUser(userData);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? <Component {...props} /> : <Redirect to="/Login" />
//       }
//     />
//   );

//   return (
//     <Router>
//       <div>
//         <header>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               {user ? (
//                 <>
//                   <li>
//                     <Link to="/dashboard">Dashboard</Link>
//                   </li>
//                   <li>
//                     <button onClick={handleLogout}>Logout</button>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <Link to="/login">Login</Link>
//                   </li>
//                   <li>
//                     <Link to="/register">Register</Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </nav>
//         </header>

//         <main>
//           <Switch>
//             <Route
//               path="/login"
//               render={(props) => <Login {...props} onLogin={handleLogin} />}
//             />
//             <Route path="/register" component={Register} />

//             <PrivateRoute path="/dashboard" component={Dashboard} />
//           </Switch>
//         </main>

//         <footer></footer>
//       </div>
//     </Router>
//   );
// };

// const Dashboard = () => {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// };

// export default App;

// function Example() {
//   const { isPending, error, data } = useQuery({
//     queryKey: ["repoData"],
//     queryFn: () =>
//       fetch("https://api.github.com/repos/TanStack/query").then((res) =>
//         res.json()
//       ),
//   });

//   if (isPending) return "Loading...";

//   if (error) return "An error has occurred: " + error.message;

//   return (
//     <router>
//       <div>
//         <h1>{data.name}</h1>
//         <p>{data.description}</p>
//         <strong>👀 {data.subscribers_count}</strong>{" "}
//         <strong>✨ {data.stargazers_count}</strong>{" "}
//         <strong>🍴 {data.forks_count}</strong>
//       </div>
//     </router>
//   );
// }

import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  Router,
  Route,
  Routes,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
//import Home from './pages/Home'; // Assuming you have a Home component
//import Transactions from './pages/Transactions'; // Assuming you have a Transactions component
//import Beneficiary from './pages/Beneficiary'; // Assuming you have a Beneficiary component
import Login from "./pages/Login";
import Register from "./pages/Register";
//import { Navigate } from "react-router-dom";
//import { clear } from "@testing-library/user-event/dist/clear";
import { getToken } from "./api/storage";
import UserContext from "./context/UserContext";

//const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(false); //null

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []); // its empty to avoid infinite loop

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono">
      <Navbar/>
        <div className="">{`${user}`}</div>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};
export default App;
