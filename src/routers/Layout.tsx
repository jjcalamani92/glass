import { Outlet } from "react-router-dom"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"


export const Layout = () => {
    return (
        <main>
            <Header/>
            <>
                <Outlet/>
            </>
            <Footer/>
        </main>
    )
}
