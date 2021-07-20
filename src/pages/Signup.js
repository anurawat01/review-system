import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase';
import 'react-toastify/dist/ReactToastify.css';


export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const signUp = () => {
        if (password !== confPassword) {
            toast.error("Password does not match !")

        }
        else {
            auth.createUserWithEmailAndPassword(email, password).then(res => {
                toast.success('User Created !');
            }).catch(err => {
                alert(err);
            })
        }

    }

    return (
        <div className="bg-dark" style={{ height: "100vh" }} >
            <div className="card m-auto p-3 bg-light" style={{ width: "400px" }}>
                <h5 className="card-title text-center shadow p-3">Signup</h5>
                <input
                    className="form-control"
                    name="email" type="email"
                    placeholder="Enter your Email"
                    required onChange={e => setEmail(e.currentTarget.value)} />

                <input
                    className="form-control mt-3"
                    name="password" type="password"
                    placeholder="Enter Password"
                    required onChange={e => setPassword(e.currentTarget.value)} />
                <input
                    className="form-control mt-3"
                    name="repeat-password"
                    type="password"
                    placeholder="Confirm Password"
                    required onChange={e => setConfPassword(e.currentTarget.value)} />
                <button onClick={signUp} className="btn btn-info mt-3">Signup</button>
                <span className="text-center text-info"><Link to="/" >Already a user?</Link>
                </span>
            </div>
            <ToastContainer />
        </div>

    )
}
