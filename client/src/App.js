import { Outlet, Navigate, Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AddTripAdmins from './components/Admin/AddTripAdmin';
import ProfilePages from './pages/ProfilesPage';
import DetailTourPage from './pages/DetailTourPage';
// import './components/style/App.css';
import WaitingPayment from './pages/PaymentPendingPage';
import IncomeTrips from './components/IncomeTrip';
import ListTransactionAdmins from './components/Admin/ListTransactionAdmin';
import PaymentCardWaitingApprove from './components/Payment/PaymentApprove';
import { UserContext } from './context/userContext';
import { useContext, useEffect, useState } from 'react';
import { API, setAuthToken } from './config/api';
import Auth from './pages/Auth';
import './components/style/App.css'
import { PrivateRouteAdmin, PrivateRouteLogin, PrivateRouteUser } from './pages/PrivateRoute';

function App() {

  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate('/');
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false)
    }
  }, []);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      console.log("check user success : ", response)
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      setIsLoading(false)
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: 'AUTH_ERROR',
      });
      setIsLoading(false)
    }
  };

  return (
    <>
      {isLoading ? null :

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
          <Route element={<PrivateRouteAdmin />} >
            <Route path="/AddTripAdmin" element={<AddTripAdmins />} />
            <Route path="/IncomeTrips" element={<IncomeTrips />} />
            <Route path="/HomeAdmin" element={<ListTransactionAdmins />} />
          </Route>

          <Route element={<PrivateRouteLogin />} >
            <Route element={<PrivateRouteUser />} >
              <Route path="/ProfilePages" element={<ProfilePages />} />
              <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
              <Route path="/WaitingPayment" element={<WaitingPayment />} />
              <Route path="/WaitingApprove" element={<PaymentCardWaitingApprove />} />
            </Route>
          </Route>
        </Routes>

      }
    </>
  );
}

export default App;

