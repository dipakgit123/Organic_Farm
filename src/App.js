// import logo from './logo.svg';
import './App.css';
import './About.css';
import './Community.css'
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import './App.css';
// import Contact from './components/Contact';
// import Home from './components/Home';

<<<<<<< HEAD
<<<<<<< HEAD
// import Services from './components/Services';
=======
=======
>>>>>>> 4ebf5706dcff495a3c628d243f0bf11f5f004fb9
import About  from './components/About';
import Community from './components/Community';
import Services from './components/Services';
>>>>>>> 4ebf5706dcff495a3c628d243f0bf11f5f004fb9



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
<<<<<<< HEAD
<<<<<<< HEAD
    {/* <Services/>
    <Contact/> */}
=======
=======
>>>>>>> 4ebf5706dcff495a3c628d243f0bf11f5f004fb9
    <Home/>
    <Services/>
    <About/>
    <Community/>
    
<<<<<<< HEAD
>>>>>>> 4ebf5706dcff495a3c628d243f0bf11f5f004fb9
=======
>>>>>>> 4ebf5706dcff495a3c628d243f0bf11f5f004fb9
    
    <div className='App'>
   <RouterProvider router={route}></RouterProvider>
    </div>

    
    
    {/* <Contact/> */}
    </>
  );
}

export default App;
