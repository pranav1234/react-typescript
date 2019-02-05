import * as React from 'react';

type Props = {
  label: string;
};

export const Home: React.FC<Props> = props => {
  const { label } = props;

  return (
    <div>
      <span>
        {label}
      </span>

    </div>
  );
};
Home.defaultProps ={
    label:'Home Page'
    
}