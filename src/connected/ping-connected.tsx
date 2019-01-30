import { connect } from 'react-redux';
import { pingActions,pingSelectors } from '../features/ping';
import { ping } from '../components';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        isPinging: pingSelectors.getIsPing(state)
    }
};
export const PingConnected = connect(
    mapStateToProps,
    {
        ping: pingActions.ping,
    }
)(ping);


