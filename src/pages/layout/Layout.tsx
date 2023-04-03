import { Outlet } from 'react-router-dom';
import { AsideNav, Nav, Footer } from '../../components/index';


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