import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login';

export class Login extends Component {

  responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj);
  }


    render() {
        return (
            <div className="p-4">
            <Segment placeholder>
    <Grid columns={2} relaxed='very'  stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='E-mail'
            placeholder='Email address'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' color="green" />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
          <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Name'
            placeholder='Name'
          />
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Lastname'
            placeholder='Lastname'
          />
         
          <Form.Input
            icon='envelope open outline'
            iconPosition='left'
            label='E-mail'
            type='email'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Comfirm Password'
            type='password'
          />
          <Button content='Registrarse' color="green" />
          <h4> O También puedes registrarte usando Google: </h4>
          <GoogleLogin
           clientId="803703671305-0tt652e05mmee8plflmjn2td9cfc2v3t.apps.googleusercontent.com"
           buttonText='LogIn con Google'
           onSuccess={this.responseGoogle}
           onFailure={this.responseGoogle}
           cookiePolicy={'single_host_origin'}
          />
        </Form>
        
      </Grid.Column>
    </Grid>
    

    <Divider vertical>Or</Divider>
  </Segment>
  </div>
        )
    }
}

export default Login;
