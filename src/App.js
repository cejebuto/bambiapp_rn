import Register from "./pages/Register";
import "./style.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {AuthContext} from "./context/AuthContext";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {useContext} from "react";


function App() {

    const {currentUser} = useContext(AuthContext);

    const ProtectedRoute = ({children}) => {
        return currentUser ? children : <Navigate to={'/login'}/>
    }

  return (
      <BrowserRouter>
        <Routes>
           <Route path="/">
               <Route index element={
                   <ProtectedRoute>
                    <Home />
                   </ProtectedRoute>
                   } />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
           </Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
