import * as React from 'react';

interface IPingProps  {
    isPinging : string;
    ping: () => any
};


export const ping : React.FC<IPingProps> = (props) => (

    <div>
      <h1>{`is pinging:  ${props.isPinging}`}</h1>
      <button onClick = {props.ping}>
        {`Start PING`}
      </button>
    </div>
)
