import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getAuthCheckedStatus } from '../../store/user-process/user-selectors';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const isAuth = useAppSelector(getAuthCheckedStatus);


  return (
    isAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );

}

export default PrivateRoute;
