import { Outlet } from 'react-router-dom';
import { Nav, Footer  } from '../../components/index';


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