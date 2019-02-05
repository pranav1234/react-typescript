import { connect } from 'react-redux';
import { authActions,selectors } from '../features/authentication';
import { Home } from "../components";

const mapStateToProps = (state: any, ownProps: any) => {
    return {
      isLoggedIn: selectors.getIsLogin(state)
    }
  };

export const HomeConnected = connect(
    mapStateToProps,
    { logout: authActions.authLogout.request }
)(Home);


