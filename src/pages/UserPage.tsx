import {Users} from "../components";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>

        </div>
    );
};

export {UserPage};