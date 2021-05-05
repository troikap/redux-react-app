import React from 'react';
import { connect } from 'react-redux';
import userActions from '../../actions/user';
import { Form, Button } from 'react-bootstrap';
import './login.css';
import { withRouter } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export const Login = ({ user, login, history }) => {
  React.useEffect(() => {
    if ( user.authUser ) {
      history.push('/');
    }
  }, [user]);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <div className='login_container'>
      <div className='col-sm-12 col-md-6 login_card_form'>
        <h3>Bienvenido a ReduxPuppies!</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={() => login(username, password)} variant="primary">
            Submit
          </Button>
          {user.error && (
            <Alert variant="danger">
              {user.error}
            </Alert>
          )}
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = () => ({
  ...userActions
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Login));