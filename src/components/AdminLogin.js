import React from 'react';

export default class AdminLogin extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();

    console.log('Cool!');
  };

  render() {
    return (
      <div id='bodyDiv'>
        <p id='adminLoginHeader'>Sign In As Admin</p>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.onFormSubmit}>
              <div className='form-group'>
                <span className='inputLabel'>Email</span>
                <input type='email' name='email' className='form-control' />
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
            <button type='button' className='btn btn-success'>
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
