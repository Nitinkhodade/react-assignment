import axios from "axios"
import { toast } from "react-toastify"
import Updateserver from "../Component/Updateserver"
import { ADD_SERVER, DELETE_SERVER, FAIL_REQUEST, GET_SERVER_LIST, GET_SERVER_OBJ, MAKE_REQUEST, UPDATE_SERVER } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const geServerList=(data)=>{
    return{
        type:GET_SERVER_LIST,
        payload:data
    }
}
export const deleteServer=()=>{
    return{
        type:DELETE_SERVER
    }
}
export const addServer=()=>{
    return{
        type:ADD_SERVER
    }
}
export const updateServer=()=>{
    return{
        type:UPDATE_SERVER
    }
}
export const getServerObj=(data)=>{
    return{
        type:GET_SERVER_OBJ,
        payload:data
    }
}



export const FetchServerList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:3005/server').then(res=>{
            const serverlist=res.data;
            dispatch(geServerList(serverlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const Removeserver=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:3005/server/'+code).then(res=>{
            dispatch(deleteServer());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionAddServer=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('http://localhost:3005/server',data).then(res=>{
            dispatch(addServer());
            toast.success('Server Added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionUpdateServer=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.put('http://localhost:3005/server/'+code,data).then(res=>{
            dispatch(updateServer());
            toast.success('Server Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
export const FetchServerObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:3005/server/'+code).then(res=>{
            const serverlist=res.data;
            dispatch(getServerObj(serverlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
