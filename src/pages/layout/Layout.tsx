import { Outlet } from 'react-router-dom';
import { AsideNav, Nav, Footer } from '../../components';


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