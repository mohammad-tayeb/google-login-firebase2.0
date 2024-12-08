import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;