import './App.css';
import MainPage from './components/MainPage';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from './redux/userData';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/loginComponents/Login';
import Body from './components/Body';

import SportsNews from './components/news/SportsNews';
import TechNews from './components/news/TechNews';
import TopHeadLines from './components/news/TopHeadLines';
import Journal from './components/news/Journal';



function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
  },[])

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Login/>,
      
    },
    {
      path:'/mainpage',
      element:<MainPage/>,
      children:[
        {
            path:'/mainpage',
            element:<Body/>, 
        },
        {
          path:'/mainpage/journal',
          element:<Journal/>,
        },{
          path:'/mainpage/sports',
          element:<SportsNews/>
        },{
          path:'/mainpage/tech',
          element:<TechNews/>
        },{
          path:'mainpage/topheadlines',
          element:<TopHeadLines/>,
        }
      ]
    },
      
  ])
  return (
    <div >
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
