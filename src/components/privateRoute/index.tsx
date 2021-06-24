import React, { lazy } from "react";
import { Route, withRouter, RouteComponentProps, Switch, Redirect } from "react-router-dom";

const Error = lazy(
  () => import(/* webpackChunkName: "Error"*/ "pages/error")
);

interface IProps extends RouteComponentProps {
  routes?(url: string): void;
  path?: string;
  exact?: boolean;
  strict?: boolean;
  component?: any;
}

interface IState {
  isAuthenticated: boolean;
}

class PrivateRoute extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: true };
  }

  
  componentDidMount() {
    let isAuthenticated = localStorage.token ? true : false;
    this.setState({ isAuthenticated });

    // if (!isAuthenticated) {
    //     const { history } = this.props;
    //     setTimeout(() => {
    //         history.replace('/user/login');
    //     }, 1000);
    // }
  }

  render() {
    let {
      component: Component,
      path = "/",
      exact = false,
      strict = false,
      routes
    } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={(props) => <Component {...props} routes={this.props.routes} />}
      />
    );
  }
}



export default withRouter(PrivateRoute);
