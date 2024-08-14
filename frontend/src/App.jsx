/* --------------------------------- Imports -------------------------------- */

// [Import React Components]
import { BrowserRouter, Route, Routes} from 'react-router-dom'

//[Import local folders/files]
// * Components
import { Layout } from './components/index'
import { Home, Contact } from './pages/index'

// * Stylesheet
import './App.css'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route index element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App