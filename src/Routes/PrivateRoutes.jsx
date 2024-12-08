import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user , loading } = useContext(AuthContext) //getting data using context api
    
    //if the data is loading it will show a loader and will not go further
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    //if data is not loading then the chirldern will be showed
    if (user) {
        return children
    }
    return (
        <Navigate to="/login" ></Navigate >
    )

};

export default PrivateRoutes;