import { Switch, Route, RouteProps } from 'react-router-dom';
import Login from '../pages/Login';
import Authenticate from '../pages/Authenticate';

type RoutesArray = RouteProps & {
  routename: string;
};

const Routes = () => {
  const routes: RoutesArray[] = [
    {
      routename: 'Login',
      component: Login,
      path: '/',
      exact: true
    }
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.routename} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
