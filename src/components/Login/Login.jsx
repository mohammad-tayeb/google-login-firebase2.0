import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/authProvider";

const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const naviagte = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                naviagte('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content w-full">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">

                    {/* form starts here */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link className="text-violet-400 text-center text-sm" to="/register">Register Now</Link>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;