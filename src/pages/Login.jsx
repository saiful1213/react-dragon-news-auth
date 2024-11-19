import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const [error, setError] = useState({});
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                navigate(state ? state : '/');
            })
            .catch(err => {
                setError({ ...error, login: err.message })
            })
    }

    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center h-screen">
            <div className="card bg-white w-full max-w-lg shrink-0">
                <h1 className="text-3xl font-bold text-center p-4">Login your account</h1>
                <form className="card-body" onSubmit={handleFormSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>

                    {
                        error.login &&
                        <label className="label">
                            <span className="label-text text-red-600 font-medium">{error.login}</span>
                        </label>
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center font-medium text-sm">
                    Don’t Have An Account ? <Link to="/auth/registration" className="text-red-500">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;