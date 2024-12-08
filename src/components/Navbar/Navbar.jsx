import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/authProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
            user && <>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            </>
        }
    </>

    // logOut Function
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('Logged Out Successfully'))
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <span className="border p-2 rounded-2xl border-violet-600" >{user.email}</span>
                }
                {
                    user ? <a onClick={handleLogOut} className="btn btn-warning mx-2">Sign Out</a>: <NavLink onClick={handleLogOut} className="btn btn-success mx-2" to="/login">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;