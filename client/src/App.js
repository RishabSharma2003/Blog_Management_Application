import { useState } from 'react';
import './App.css';

//from auth
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Header from './components/navbar/Header';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route, Navigate, Outlet} from 'react-router-dom'

const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated?
    <>
      <Header/>
      <Outlet/>
    </>
    :
    <>
      <Navigate replace to='/login'/>
    </>
}



function App() {
  const [isAuthenticated,isUserAuthenticated]=useState(false)
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <div style={{marginTop:64}}>
            <Routes>
              <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path='/' element={<Home/>}/>
              </Route>
            </Routes>
          </div>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
