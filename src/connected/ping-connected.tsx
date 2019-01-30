import { connect } from 'react-redux';
import { pingActions } from '../features/ping';
import { ping } from '../components';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        isPinging: state.ping.isPinging
    }
};
export const PingConnected = connect(
    mapStateToProps,
    {
        ping: pingActions.ping,
    }
)(ping);


