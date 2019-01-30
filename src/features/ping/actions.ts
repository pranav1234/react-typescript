
import { pingConstants } from '../ping';

export const ping = () => ({ type: pingConstants.PING });
export const pong = () => ({ type: pingConstants.PONG });