import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



export const CreateReview = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');

    const addData = () => {
        if (title === '' || description === '' || details === '') {
            toast.error('Please add all details !');
        }
        else {
            db.collection("reviews")
                .doc('Abhishek')
                .set({
                    title: title,
                    description: description,
                    details: details
                })
                .then(function () {
                    toast.success("Review added successfully !");
                    //history.push('./Reviews');
                })
                .catch(function (error) {
                    toast.error("Error in review adding!! : ", error);
                });
        }

    };
    const logOut = () => {
        auth.signOut().then(res => {
            toast.warn('Logged Out!')
            history.push('./');

        }).catch(err => {
            alert(err)
        });

    }
    return (
        <div className="bg-dark" style={{ height: "100vh" }} >
            <nav className="navbar navbar-light bg-light mb-5">
                <span>
                    Review System
                </span>
                <Link to="/Reviews" ><button className="btn btn-primary text-white">Reviews List</button></Link>

                <button className="btn btn-info" onClick={logOut} >Logout</button>

            </nav>
            <div className="card m-auto p-3 bg-light" style={{ width: "450px" }}  >
                <h5 className="card-title bg-dark shadow text-center text-white p-3">Write a review</h5>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    required onChange={e => setTitle(e.target.value)} /><br /><br />


                <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    className="form-control"
                    required onChange={e => setDescription(e.target.value)} /><br /><br />

                <textarea
                    name="details"
                    type="text"
                    placeholder="Details"
                    className="form-control"
                    required onChange={e => setDetails(e.target.value)} /><br /><br />

                <button onClick={addData} className="btn btn-success">  Submit</button>

            </div>
            <ToastContainer />

        </div>


    )
}
