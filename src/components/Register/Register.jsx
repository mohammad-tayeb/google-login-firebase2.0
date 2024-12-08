import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/authProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
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
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="name"
                                placeholder="user name"
                                className="input input-bordered"
                                required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Link className="text-violet-400 text-center text-sm" to="/login">Login Now</Link>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;