import {Outlet} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import HeaderNavigate from '../navigate/heder-navigate';

function Layout(): JSX.Element {

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderNavigate/>
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
