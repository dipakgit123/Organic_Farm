// import logo from './logo.svg';
import './App.css';
import './About.css';
import './Community.css'
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';

import About  from './components/About';
import Community from './components/Community';
import Services from './components/Services';


function App() {
  const  route = createBrowserRouter([
    {
      path:"/",
      element: <Signup/>,
      
    },

    {
      path:'/signin',
      element: <SignIn/>,
      
    },
  ]);

  return (
    <>
    <Home/>
    <Services/>
    <About/>
    <Community/>
    
    
    <div className='App'>
   <RouterProvider router={route}></RouterProvider>
    </div>

    
    
    <Contact/>
    </>
  );
}

export default App;
