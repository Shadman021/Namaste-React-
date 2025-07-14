import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSetion";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Resturant from "./Components/Restaurant";
import Menu from "./Components/Menu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import Cart from "./Components/Cart";

const Grocery = lazy(()=>import("./Components/Grocery"));

const App = () => {
    return (
        <Provider store={appStore}>
        <div >
            <Navbar />
            <Outlet />
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HeroSection />
            },
            {
                path: "/restaurant",
                element: <Resturant />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
             {
                path: "/grocery",
                element: 
                <Suspense fallback={<h1>Loading</h1>}>
                    <Grocery />
                    </Suspense>,
                errorElement: <Error />
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error />
            },
            {
                path: "/menu/:resId",
                element: <Menu />,
                errorElement: <Error />
            }
        ]
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

