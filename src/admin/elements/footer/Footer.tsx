import logoBlack from '../../../assets/logoBlack.svg'
import { FooterAdminStyle } from './FooterStyle'

type Props = {}

const AdminFooter = (props: Props) => {
  return (
    <FooterAdminStyle>
        <img src={logoBlack} alt="enlace urbano" />
    </FooterAdminStyle>

  )
}

export default AdminFooter