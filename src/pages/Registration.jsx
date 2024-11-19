import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
    const [error, setError] = useState({});
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 6) {
            return setError({ ...error, name: 'Name must be 6 charecters or longer' })
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then(result => {

                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate('/');
                    })
                    // .catch(err => console.log(err.message))
            })
            .catch(err => {
                // console.log('ERROR: ', err);
                toast.error(err.message);
            })
    }

    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center h-screen">
            <div className="card bg-white w-full max-w-lg shrink-0">
                <h1 className="text-3xl font-bold text-center p-4">Register your account</h1>
                <form className="card-body" onSubmit={handleFormSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

                    {
                        error.name && <label className="label">
                            <span className="label-text text-red-600 font-medium">{error.name}</span>
                        </label>
                    }

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>

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

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center font-medium text-sm">
                    Already Have An Account ? <Link to="/auth/login" className="text-red-500">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Registration;