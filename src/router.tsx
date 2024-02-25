import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {PostPage, UserPage} from "./pages";
import {UserDetailsPage} from "./pages/UserDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                index:true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UserPage/>, children:[
                    {
                        path: ':id', element: <UserDetailsPage/>
                    }
                ]
            },
            {
                path: 'posts', element: <PostPage/>
            }
        ]
    }
]);

export {
    router
}