import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory, Link } from 'react-router-dom';
import Reviews from './Reviews';


export const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(res => {
            toast.success('Logging In! ')
            history.push('./Reviews');
        }).catch(err => {
            toast.error(err);
        })
    }


    return (
        <div className="bg-dark" style={{ height: "100vh" }} >
            <div className="card p-3 m-auto bg-light  mt-5" style={{ width: "400px" }} >
                <h5 className="card-title text-center shadow p-3">Login</h5>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    required onChange={e => setEmail(e.currentTarget.value)} />

                <input
                    name="password"
                    type="password"
                    placeholder="Enter Passsword"
                    className="form-control  mt-3"
                    required onChange={e => setPassword(e.currentTarget.value)} />

                <button onClick={userLogin} className="btn btn-info mt-3" >Login</button>
                <span className="text-sm-center text-info"><Link to="/Signup">Create an  account</Link>
                </span>
            </div>
            <ToastContainer />
        </div>
    )
}
