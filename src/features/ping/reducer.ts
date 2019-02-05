import { Ping } from './models';


const pingReducer = (state:Ping = {isPinging:false} , action:any) => {
    switch (action.type) {
      case 'PING':
        return { isPinging: true };  
      case 'PONG':
        return { isPinging: false };  
      default:
        return state;
    }
  };
  

  export default pingReducer