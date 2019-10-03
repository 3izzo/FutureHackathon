import React, { Component } from 'react'
import '../Login.css';
import loading from '../loading.svg'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  state = {
    id: '',
    password: '',
    isLoading: false,
  }

  componentDidUpdate() {
    // console.log(this.state);
  }

  handleLogin = () => {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.props.history.push('/');
    }, 2000)
  }

  render() {
    return (
      <div>
        <div className="card-container text-center align-center d-flex justify-content-center">
          <div className="card login-card">
            <form className="form-signin" dir="rtl" onSubmit={(e) => {e.preventDefault()}}>
              <img className="logo" src="/images/favicons/ms-icon-150x150.png" alt="" width={72} height={72} />
              <h1 className="login-title h3 mb-3 font-weight-normal force-font">تسجيل الدخول</h1>
              <label htmlFor="student_id" className="sr-only">الرقم الجامعي</label>
              <input 
                name="student_id" 
                type="text" 
                id="student_id" 
                className="form-control" 
                placeholder="الرقم الجامعي" 
                value={this.state.id} 
                required 
                autofocus 
                onChange={(e) => {
                  this.setState({id: e.target.value})
                }}/>
              <label htmlFor="inputPassword" className="sr-only">كلمة السر</label>
              <input 
                name="password" 
                type="password" 
                id="inputPassword"
                className="form-control" 
                placeholder="كلمة السر" 
                required
                onChange={(e) => {
                  this.setState({password: e.target.value})
                }}/>
              <button 
                style={{padding: '10px 0px', minHeight: '61px'}}
                className="btn login-button btn-lg btn-success btn-block" 
                type="submit"
                onClick={this.handleLogin}>
                  {(this.state.isLoading) ? <img alt="Loading" height={40} src={loading} /> : 'تسجيل'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
