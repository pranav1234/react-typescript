import { connect } from 'react-redux';
import { Login } from '../components';
import { authActions } from '../features/authentication';
import * as React from 'react';


// const mapStateToProps = (state: any, ownProps: any) => {
//     return {
//         isPinging: pingSelectors.getIsPing(state)
//     }
// };
type Props = {
    login: (loginCredentials:object) => any
};

type State = {
    password: string;
    email: string
};
export class LoginConnectedComponent extends React.Component<Props, State> {
    public readonly state: State = {
        password: 'string',
        email: 'string'

    }
    constructor(props: Props) {
        super(props);
    }
    public onSubmit = () => {
        this.props.login(this.state)
    }

    public onChange = (event: React.FormEvent<HTMLInputElement>) => {

        this.setState({ [event.currentTarget.name]: event.currentTarget.value } as Pick<State, keyof State>);
    }

    public render() {
        return (
            <Login  onChangeInput={this.onChange} onLogin ={this.onSubmit}/>
        )
    }


}

export const LoginConnected = connect(
    null,
    { login: authActions.authLogin.request }
)(LoginConnectedComponent);


