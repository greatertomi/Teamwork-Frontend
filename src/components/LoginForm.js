import React from 'react';
import TeamPix from '../pix/teamwork1.png';

class LoginForm extends React.Component {
  handleLogin = () => {
    console.log('Navigate');
    alert('Hello');
  };

  render() {
    return (
      <div>
        <div className='container' id='bodyDiv'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={TeamPix} alt='Login Pix' />
            </div>
            <div className='col-md-6 card' id='loginCard'>
              <div className='card-body'>
                <p>If you are path of the team, login here:</p>
                <form>
                  <div className='form-group'>
                    <span className='inputLabel'>Email</span>
                    <input type='email' name='name' className='form-control' />
                  </div>

                  <div className='form-group'>
                    <span className='inputLabel'>Password</span>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                    />
                  </div>
                </form>
                <button
                  type='button'
                  onClick={this.handleLogin}
                  className='btn btn-success'
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
