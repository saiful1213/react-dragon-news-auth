import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[bg-#F3F3F3]">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AuthLayout;