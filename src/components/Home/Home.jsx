import { useContext } from "react";
import { AuthContext } from "../../provider/authProvider";

const Home = () => {

    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
        </div>
    );
};

export default Home;