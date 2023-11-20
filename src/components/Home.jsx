import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const authInformation = useContext(AuthContext);
    console.log(authInformation);
    return (
        <div>
            <h3>Home: {authInformation.name}</h3>
        </div>
    );
};

export default Home;