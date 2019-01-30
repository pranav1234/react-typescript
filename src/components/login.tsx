import * as React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


export const Login = (props:any) => (

    <div className='login-form'>
        {/*
  Heads up! The styles below are necessary for the correct render of this example.
  You can do same with CSS, the main idea is that all the elements up to the `Grid`
  below must have a height of 100%.
*/}
        <style>{`
  body > div,
  body > div > div,
  body > div > div > div.login-form {
    height: 100%;
  }
`}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
    </Header>
                <Form size='large' onSubmit={props.login}>
                    <Segment stacked={true}>
                        <Form.Input fluid={true} icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid={true}
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button color='teal' fluid={true} size='large'>
                            Login
        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)