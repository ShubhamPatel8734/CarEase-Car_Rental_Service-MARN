/* --------------------------------- Imports -------------------------------- */

// [Import React Components]
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//[Import local folders/files]
// * Components
import { Layout } from "./components/index";
import { Home, About, Cars, Contact, FAQ } from "./pages/index";
import { User_Layout, MyProfile, EditProfile } from "./user-components/index";
import { DashboardHome, UserProfile } from "./user-pages/index";
import { AdminLogin, AdminHome, AdminCustomer, AdminCar, AdminBooking } from './admin-pages/index'
import { AdminLayout } from "./admin-components/index";

// * Stylesheet
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/cars" element={<Layout />}>
          <Route index element={<Cars />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/faq" element={<Layout />}>
          <Route index element={<FAQ />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/dashboard/home" element={<User_Layout />}>
          <Route index element={<DashboardHome />} />
        </Route>
        <Route path="/dashboard/profile" element={<User_Layout />}>
          <Route element={<UserProfile />}>
            <Route index element={<MyProfile />} />
            <Route path="edit" element={<EditProfile />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path='/admin/home' element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
        <Route path='/admin/customers' element={<AdminLayout />}>
          <Route index element={<AdminCustomer />} />
        </Route>
        <Route path='/admin/cars' element={<AdminLayout />}>
          <Route index element={<AdminCar />} />
        </Route>
        <Route path='/admin/booking' element={<AdminLayout />}>
          <Route index element={<AdminBooking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
