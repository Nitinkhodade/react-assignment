import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddServer } from "../Redux/Action";

const Addserver = () => {
    const [title, titlechange] = useState('');
    const [description, descriptionchange] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const serverobj = { title, description };
        dispatch(FunctionAddServer(serverobj));
        navigate('/server');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add server</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input value={title} onChange={e => titlechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <input value={description} onChange={e => descriptionchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/server'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Addserver;