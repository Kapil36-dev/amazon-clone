import React ,{useEffect}from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Payment from './components/Payment'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase/firebase';
import { useStateValue } from './components/StateProvider';
import Footer from './components/Footer'



function App() {
  const [{},dispatch]= useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  const searchitem =(input)=>{
    const prod = document.getElementsByClassName('product');
    Array.from(prod).filter((e)=>{
      let title = e.getElementsByTagName("p")[0].innerText;
      title = title.toLowerCase();
      title.includes(input)
      if(title.includes(input)){
        e.style.display = 'block';
      }
      else{
        e.style.display = "none";
      }
      const logo = document.querySelector('.header-logo')
      logo.addEventListener('click',()=>{
        Array.from(prod).map((e)=>{
          e.style.display = 'block';
        })
      })
  
  })
  }

  return (
    <Router >
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/">
            <Header searchitem={searchitem}/>
            <Home searchitem={searchitem}/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
