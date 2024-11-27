/* --------------------------------- Imports -------------------------------- */

// [Import React Components]
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//[Import local folders/files]
// * Components
import { Layout, PreLoader, ScrollToTop } from "./components/index";
import { Home, About, Cars, Contact, FAQ, ErrorPage } from "./pages/index";
import { User_Layout, MyProfile, EditProfile } from "./user-components/index";
import { DashboardHome, CarList, UserProfile, UserBookingTable, UserBookingForm } from "./user-pages/index";
import { AdminLogin, AdminHome, AdminCustomer, AdminCar, AdminBooking, AdminContact } from './admin-pages/index'
import { AdminLayout } from "./admin-components/index";
// * Stylesheet
import "./App.css";
import UserHome from './user-pages/UserHome';

function App() {

  const[loading, setloading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=> {
      setloading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes> 

        {/* 404 Error Page */}
        <Route path='*' element={<ErrorPage />} />

        {/* Main Pages Routes */}
        
        <Route path='/' element={<Layout />}>
          <Route index element={loading ? <PreLoader /> : <Home />}/>
          <Route path='about' element={<About />}></Route>
          <Route path='cars' element={<Cars />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='faq' element={<FAQ />}/>
        </Route>

        {/* User Dashboard Routes */}
        <Route path='/dashboard' element={loading ? <PreLoader /> : <User_Layout />}>
          <Route path='home' element={<UserHome />}/>
          <Route path='carlist' element={<CarList />}/>
          <Route path='newbooking' element={<UserBookingForm />}/>
          <Route path='mybooking' element={<UserBookingTable />}/>
          {/* <Route path='payments' element={<UserPayments />}/> */}
          <Route path='profile' element={<UserProfile />}>
            <Route index element={<MyProfile />}/>
            <Route path='edit' element={<EditProfile />}/>
          </Route>
        </Route>

        {/* Admin Dashboard Routes */}
        
        <Route path='/login' element={<AdminLogin />}/>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='home' element={<AdminHome />}/>
          <Route path='customers' element={<AdminCustomer />}/>
          <Route path='cars' element={<AdminCar />}/>
          <Route path='booking' element={<AdminBooking />}/>
          <Route path='contact_us' element={<AdminContact />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
