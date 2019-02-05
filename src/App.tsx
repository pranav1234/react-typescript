import * as React from 'react';
import './App.css';
import { LoginConnected,HomeConnected } from './connected';
import { authActions,selectors } from './features/authentication';
import { connect } from 'react-redux';



import { Route, BrowserRouter as Router } from 'react-router-dom';


// import logo from './logo.svg';
// import { PingConnected  } from "./connected/ping-connected";

type Props = {
  isLoggedInCheck: () => any;
  isLoggedIn:boolean
};
class App extends React.Component<Props> {
  public componentDidMount(){
    this.props.isLoggedInCheck();
  }
  public render() {
    return (
      <Router>
        {this.props.isLoggedIn?
        <Route exact = {true} path="/" component={HomeConnected} />
        :
        <Route exact = {true} path="/" component={LoginConnected} />
        }
        
      </Router>

    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    isLoggedIn: selectors.getIsLogin(state)
  }
};
export default connect(
  mapStateToProps,
  { isLoggedInCheck: authActions.isLoggedIn.request }
)(App);
