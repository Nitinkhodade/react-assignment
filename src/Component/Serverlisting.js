import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchServerList,Removeserver} from "../Redux/Action";

const Serverlisting = (props) => {
    useEffect(() => {
        props.loadserver();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeserver(code);
             props.loadserver();
             toast.success('Server removed successfully.')
        }
    }
    return (
        // props.server.loading ? <div><h2>Loading...</h2></div> :
        //     props.server.errmessage ? <div><h2>{props.server.errmessage}</h2></div> :

                <div>
                    <div className="card">
                        <div className="card-header" >
                            <Link to={'/server/add'} className="btn btn-success">Add server [+]</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>Code</td>
                                        <td>Title</td>
                                        <td>Description</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.server.serverlist && props.server.serverlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <Link to={'/server/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        server: state.server
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadserver: () => dispatch(FetchServerList()),
        removeserver:(code)=>dispatch(Removeserver(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Serverlisting);