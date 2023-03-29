import { Outlet } from 'react-router-dom';
import { AsideNav, Nav, Footer } from '../../components/Index';


const Layout = () => {
    return (
        <>
            <Nav />
            <AsideNav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout