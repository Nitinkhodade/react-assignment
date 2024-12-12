import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchServerObj, FunctionUpdateServer } from "../Redux/Action";
 
const Updateserver = () => {
    const [id, idchange] = useState(0);
    const [title, titlechange] = useState('');
    const [description, descriptionchange] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const serverobj=useSelector((state)=>state.server.serverobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const serverobj = { id, title, description};
        dispatch(FunctionUpdateServer(serverobj,id));
        navigate('/server');
    }

    useEffect(() => {
        dispatch(FetchServerObj(code));
    }, [])

    useEffect(() => {
        if(serverobj){
            idchange(serverobj.id);
            titlechange(serverobj.title);
            descriptionchange(serverobj.description);
        }
    }, [serverobj])

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
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input value={title || ''} onChange={e => titlechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <input value={description || ''} onChange={e => descriptionchange(e.target.value)} className="form-control"></input>
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

export default Updateserver;