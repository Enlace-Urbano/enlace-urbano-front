import { useNavigate } from 'react-router'
import logo from '../../../assets/svg/logout.svg'
import { Button } from './LogoutButtonStyle'

const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <Button onClick={handleLogout}>
            Log Out
            <img src={logo} alt="logo logout" />
        </Button>
    )
}

export default LogoutButton