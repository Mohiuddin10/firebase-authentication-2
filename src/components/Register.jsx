import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const authInfo = useContext(AuthContext);
    const {createUser} = authInfo;

    const [register, setRegister] = useState('');
    const [error, setError] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {

            setRegister(`${name} registered successfully`)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className="text-center m-2 p-4">Already have account? Please <span className="text-warning"><NavLink to='/login'><a href="">Log in</a></NavLink></span></p>
                </div>
                {
                    register && <p className="text-lg text-green-500">{register}</p>
                }
                {
                    error && <p className="text-lg text-red-500">{error}</p>
                }
            </div>
        </div>
    );
};

export default Register;