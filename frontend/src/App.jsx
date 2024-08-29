/* --------------------------------- Imports -------------------------------- */

// [Import React Components]
import { BrowserRouter, Route, Routes} from 'react-router-dom'

//[Import local folders/files]
// * Components
import { Layout } from './components/index'
import { Home, About, Cars, Contact, FAQ } from './pages/index'
import { User_Layout } from './user-components/index'
import { DashboardHome } from './user-pages/index'

// * Stylesheet
import './App.css'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/about' element={<Layout/>}>
            <Route index element={<About />} />
          </Route>
          <Route path='/cars' element={<Layout/>}>
            <Route index element={<Cars />} />
          </Route>
          <Route path='/contact' element={<Layout/>}>
            <Route index element={<Contact />} />
          </Route>
          <Route path='/faq' element={<Layout/>}>
            <Route index element={<FAQ />} />
          </Route>
        </Routes>
        <Routes>
          <Route path='/dashboard/home' element={<User_Layout/>}>
            <Route index element={<DashboardHome />} />
          </Route>
          <Route path='/dashboard/newbooking' element={<User_Layout/>}>
            <Route index element={<DashboardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App