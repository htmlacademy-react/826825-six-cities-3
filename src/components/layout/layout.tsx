import {Outlet} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import HeaderNavigate from '../navigate/heder-navigate';
import {AuthorizationStatus} from '../../const';
type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout(props: LayoutProps): JSX.Element {
  const {authorizationStatus} = props;
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderNavigate authorizationStatus = {authorizationStatus}/>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
