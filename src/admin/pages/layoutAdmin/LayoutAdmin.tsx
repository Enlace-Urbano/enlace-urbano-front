import { Outlet } from 'react-router-dom';
import { AdminMenu  } from '../../components/index';
import AdminFooter from '../../elements/footer/Footer';


const LayoutAdmin = () => {
    return (
        <>
            <AdminMenu />
            <main>
                <Outlet />
            </main>
            <AdminFooter />
        </>
    )
}

export default LayoutAdmin