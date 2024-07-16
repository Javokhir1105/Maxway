import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/Expage/About/about";
import News from "../Components/Expage/Filiallar/filiallar";
import Contact from "../Components/Expage/Contact/contact";
import Home from "../Components/Homepage/home/home";
import Burger from "../Components/FOODS/Burger";
import Pizza from "../Components/FOODS/Pizza";
import Xotdog from "../Components/FOODS/Xotdog";
import Set from "../Components/FOODS/Set";
import Xaggi from "../Components/FOODS/Xaggi";
import Choose from "../Components/Homepage/Choose/choose";
import Hero from "../Components/Homepage/Hero/hero";
import FoodsComponent from "../Components/FOODS/FoodsComponent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path:"/",
                element:<FoodsComponent/>,
                children:[
                    {
                        path: '/',
                        element:<Choose/>
                    },
                    {
                        path:"/burger",
                        element:<Burger/>
                    },
                    {
                        path:"/pizza",
                        element:<Pizza />
                    },
                    {
                        path:"/xotdog",
                        element:<Xotdog />
                    },
                    {
                        path:"/Set",
                        element:<Set />
                    },
                    {
                        path:"/xaggi",
                        element:<Xaggi />
                    }
                ]
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/filiallar',
                element: <News />
            },
            {
                path: '/contact',
                element: <Contact />
            },
           
        ]
        
    },
   



])
export default router