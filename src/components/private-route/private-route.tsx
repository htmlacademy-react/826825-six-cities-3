import {Navigate, useLocation, pathname} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthCheckedStatus, getUserData } from '../../store/user-process/user-selectors';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
  // isAuth: boolean;
}

// type FromState = {
//   from?: Location;
// }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const isAuth = useAppSelector(getAuthCheckedStatus);
  // const location: Location<FromState> = useLocation() as Location<FromState>

  // const user = useAppSelector(getUserData);

  // if (isAuth && user) {
  //   const from = location.state?.from || {pathname: AppRoute.Main};
  //   console.log(from);
  //   return <Navigate to={from}/>
  // }

  // if (!isAuth && !user) {
  //   return <Navigate state= {{from: location}} to={AppRoute.Login} /> 
  // }

  return (
    isAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
  // return children;
}

export default PrivateRoute;
