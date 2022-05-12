
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Profile } from "../pages/profile/Profile";


export const DashboardRoutes = () => {
  return (
    <>
        
        <div className="container">
            <Routes>                

                <Route path="profile/:username" element={<Profile />} />
                
                <Route path="/" element={<Home />} />                        
                                
            </Routes>  
        </div>
    </>
    
  )
}
