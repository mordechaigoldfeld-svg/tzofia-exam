import { Route, Routes } from "react-router"
import Map from "./pages/map/Map"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Protected from "./pages/protected/Protected"







function App() {


  return (
    <>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route element={<Protected/>}>
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<Map />} />
        </Route>

        <Route path="*" element={"not found"} />

      </Routes>

    </>
  )
}

export default App
