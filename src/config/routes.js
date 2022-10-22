import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notfound";
import GeneralLayout from "../layouts/GeneralLayout";
import Signin from "../pages/Admin"

const routesAdmin = [ 
    { path: "/admin", layout: GeneralLayout, component: Signin },
    { path: "/admin/contact", layout: GeneralLayout, component: Contact },
 ];
 
 const routesGeneral = [
     { path: "/", layout: GeneralLayout, component: Home },
     { path: "*", layout: GeneralLayout, component: NotFound },
 ];

 const projectRoutes = [...routesAdmin, ...routesGeneral];
 export default projectRoutes;
 