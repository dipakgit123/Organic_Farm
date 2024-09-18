// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';





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
    <div className='App'>
   <RouterProvider router={route}></RouterProvider>
    </div>

    
  );
}

export default App;
