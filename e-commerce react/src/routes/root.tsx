import Inspx from "inspx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/header";
import Footer from "../components/footer";


const Root = () => {
    return (
    <Inspx>
        <Header />
        <Outlet />
        <Footer />
        <Toaster />
        {/* <ScrollRestoration /> */}
    </Inspx>
    )
}

export default Root