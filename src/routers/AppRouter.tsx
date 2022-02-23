import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// import { AboutPages } from "../components/pages/about/AboutPages";
// import { ContactPages } from "../components/pages/contact/ContactPages";
import { HomePages } from "../components/pages/home/HomePages";
import { ProductsPages } from "../components/pages/products/ProductsPages";
// import { PortfolioPages } from "../components/pages/portfolio/PortfolioPages";
// import { ServicePages } from "../components/pages/service/ServicePages";
import { Layout } from "./Layout";
import { NosotrosPages } from '../components/pages/nosotros/NosotrosPages';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePages />} />
                <Route path="nosotros" element={<NosotrosPages />} />
                <Route path="productos/monofocales" element={<ProductsPages title="Nuestros Productos" category="monofocales" />} />
                <Route path="productos/bifocales" element={<ProductsPages title="Nuestros Productos" category="bifocales" />} />
                {/* 
                <Route path="portafolio" element={<PortfolioPages />} />
                <Route path="servicios" element={<ServicePages />} />
                <Route path="contacto" element={<ContactPages />} /> */}
                    {/* 
                    <Route path="sobre_mi" element={<AboutScreen/>} />
                    <Route path='portafolio' element={<PortfolioScreen/>} />
                    <Route path='servicios' element={<ServiceScreen/>} />
                    <Route path='contacto' element={<ContactScreen/>} />
                    <Route path='*' element={<Navigate replace to="/" />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
