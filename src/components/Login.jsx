import { NavLink } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../_firebase.config";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState([]);
    const [error, setError] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            const logedinUser = result.user;
            setUser(`${logedinUser.displayName} loged in successfully`);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center m-2 p-4">New to website? Please <span className="text-warning"><NavLink to='/register'><a href="">Register</a></NavLink></span></p>
                    {
                        user && <p className="text-center m-2 p-4">{user}</p>
                    }
                    {
                        error && <p className="text-center m-2 p-4">{error}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;