import logoBlack from '../../../assets/svg/logoBlack.svg'
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