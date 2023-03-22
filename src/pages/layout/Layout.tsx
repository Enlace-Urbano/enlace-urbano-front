import { Outlet } from 'react-router-dom';
import { Nav } from '../../components';
import Footer from '../../components/footer/Footer';


const Layout = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout