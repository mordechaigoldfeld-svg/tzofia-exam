import { Route, Routes } from "react-router"
import Map from "./pages/map/Map"







function App() {


  return (
    <>
    <Routes>
      <Route path="/map" element={<Map/>}/>
      
    </Routes>
      
    </>
  )
}

export default App
