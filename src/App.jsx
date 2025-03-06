import './App.css'
import Cart from './components/Cart/cart';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';



function App() {
 

  return (
   <div className="bg-gray-200">
    <Routes>
      <Route path='/cart' element={<Cart/>}>
      </Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    
   
   </div>
  )
}

export default App
