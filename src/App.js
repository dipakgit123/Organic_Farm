<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




=======
import './App.css';
import Home from './components/Home';
>>>>>>> 71ec946a45c2c47d46662f1b9d734aae320d8714

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
<<<<<<< HEAD
    <div className='App'>
   <RouterProvider router={route}></RouterProvider>
    </div>

    
=======
    <>
    <Home/>
    </>
>>>>>>> 71ec946a45c2c47d46662f1b9d734aae320d8714
  );
}

export default App;
