import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import { BrowserRouter, Switch ,useHistory} from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import {reducer,initialState} from './components/reducers/userReducer';
import NavBar from './components/Navbar';
import Homesection from './cards/card';
import Homepage from './pages/home/home';
import About from './pages/about/about';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Contact from './pages/contact/contact';
export const UserContext = createContext();


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Switch>
//         <Route path="/" exact component={Homepage} />
//         {/* <Route path="/login" exact component={Login} />
//         <Route path="/register" exact component={Register} />
//         <Route path="/about" exact component={About} />
//         <Route path="/services" exact component={Services} />
//         <Route path="/contact" exact component={Contact} /> */}
//       </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Homepage />
      </Route>
      <Route exact path="/about" >
      <About />
      </Route> <Route exact path="/contact" >
      <Contact />
      </Route>
      <Route exact path="/register" >
      <Register />
      </Route>
      <Route exact path="/login" >
      <Login />
      </Route>
      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
     {/* <NavBar /> */}
      <Routing />
      <Homesection />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
