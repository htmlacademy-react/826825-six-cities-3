import {Outlet} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import HeaderNavigate from '../navigate/heder-navigate';

function Layout({page}): JSX.Element {

  return (
    <>
      <header className="header">
        <h1>{page}</h1>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <HeaderNavigate/>
          </div>
        </div>
      </header>
      {/* <main> */}
        <Outlet />
      {/* </main> */}
    </>
  );
}

export default Layout;
