import { connect } from 'react-redux';
import { Login } from '../components';
import { authActions } from '../features/authentication';

// const mapStateToProps = (state: any, ownProps: any) => {
//     return {
//         isPinging: pingSelectors.getIsPing(state)
//     }
// };
export const LoginConnected = connect(
    null,
    { login: authActions.authLogin.request }
)(Login);


