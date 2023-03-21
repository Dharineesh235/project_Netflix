import logo from './logo.svg';
import './App.css';
import './Styles/bootstrap.min.css';
import Login from './Main_Components/Login';
import Home from './Main_Components/HomeScreen';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/home",
    element:<Home/>
  }
])

function App() {
  return (
    <div className='app'>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
