import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";




const Reviews = () => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('reviews').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);
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
                <Link to="/Create-Review" ><button className="btn btn-primary text-white">Create Review</button></Link>

                <button className="btn btn-info" onClick={logOut} >Logout</button>

            </nav>
            <div className="container border bg-light">
                <h3 className="card-heading text-center shadow" >Reviews List</h3>

                <table className="table table-striped">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post) =>
                            (
                                <tr>
                                    <td>{post.title}</td>
                                    <td>{post.details}</td>
                                    <td>{post.description}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>
                                    <span className="text-center progress-bar bg-info progress-bar-striped progress-bar-animated m-auto" aria-valuemin="0" aria-valuemax="100">Loading... :(</span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;
