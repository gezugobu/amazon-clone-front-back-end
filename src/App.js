
import './App.css';
import Header from './Header';
import Home from './Home';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from "react";
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51KfmUwCw9s7bA1Opm9E6GqKxHDL0dhB8rvIfeXW4RuWDE2y7oWLyxfo2k5mdiNDsT1xn8FeBm4W3J8Oib6d0ovu300cJlBysRG'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])
  return (
<Router>
    <div className="App">
    <Routes>
      <Route path='/orders' element={
            <><Header/><Orders /></>} />
        <Route path='/login' element={<Login />} />
        <Route path="/payment"element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>} />
          <Route path='/checkout' element={
            <><Header/><Checkout /></>} />
          <Route path="/" element={
            <><Header/><Home /><Footer/></>} />
    </Routes>
    </div>
</Router>
  );
}
export default App;


