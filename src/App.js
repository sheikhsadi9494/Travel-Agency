import logo from './logo.svg';
import './App.css';
import HomeContainer from './pages/Home/HomeContainer/HomeContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Context/AuhtPorvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyBookings from './pages/MyBookings/MyBookings'
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import AddTravel from './pages/AddTravel/AddTravel';


function App() {
  return (
    <div>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='home' element={<HomeContainer/>}/>
        <Route path='/services/:id' element={<PrivateRoute><PlaceOrder/></PrivateRoute>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='myBookings' element={<PrivateRoute><MyBookings/></PrivateRoute>}/>
        <Route path='manageAllOrders' element={<PrivateRoute><ManageAllOrders/></PrivateRoute>}/>
        <Route path='addTravelPlan' element={<PrivateRoute><AddTravel/></PrivateRoute>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
