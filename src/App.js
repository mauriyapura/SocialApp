
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { DashboardRoutes } from "./routers/DashboardRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext);

  
  return (
    
    <BrowserRouter>              
      <Routes>      
          <Route 
              path="/login" element={                  
                  user ? <Navigate to="/" /> : <Login />                   
              }
          />     
          <Route 
              path="/register" element={                  
                  user ? <Navigate to="/" /> : <Register/>                   
              }
          />                  
          
          <Route path="/*" element={              
                user ? <DashboardRoutes /> : <Login />              
          }/>                      
                          
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
