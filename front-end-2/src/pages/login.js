import React, { Component } from 'react'
import '../Login.css';
import loading from '../loading.svg'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import ksuLogo from '../ksu-login-logo.png';

class Login extends Component {
  state = {
    id: '',
    password: '',
    isLoading: false,
    isErorr: false,
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  handleLogin = () => {
    console.log(this.state.id === '');
    if (this.state.id === '' || this.state.password === '') {
      this.setState({isError: true});
    } else {
      this.setState({ isLoading: true, isErorr: false });
      axios.post('http://localhost:5012/getStudentInformation', { id: this.state.id, password: this.state.password }).then(res => {
        console.log(res.data.user.name)
        localStorage.setItem('auth', JSON.stringify(res.data));
        this.props.history.push('/');
      }).catch((error) => {
        console.log('there is an error');
        this.setState({ isLoading: false, isErorr: true })
      })
    }
  }

  render() {
    return (
      <div>
        <div style={{ background: '#e3e1e1', margin: 'auto', width: '100%', textAlign: 'center', paddingTop: '62px' }}>
          <img src={ksuLogo} width={72} height={110} />
        </div>
        <div className="card-container text-center align-center d-flex justify-content-center">
          <div className="card login-card" style={(this.state.isErorr) ? { maxHeight: '420px' } : { maxHeight: '350px' }}>
            <form className="form-signin" dir="rtl" onSubmit={(e) => { e.preventDefault() }}>
              <img className="logo" src="/images/favicons/ms-icon-150x150.png" alt="" width={72} height={72} />
              <h1 className="login-title h3 mb-3 font-weight-normal force-font">تسجيل الدخول</h1>
              {(this.state.isErorr) ? <div class="alert alert-danger" role="alert">
                الرقم الجامعي أو كلمة السر غير صحيحة
                 </div> : <div></div>}
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
                  this.setState({ id: e.target.value })
                }} />
              <label htmlFor="inputPassword" className="sr-only">كلمة السر</label>
              <input
                name="password"
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="كلمة السر"
                required
                onChange={(e) => {
                  this.setState({ password: e.target.value })
                }} />
              <button
                style={{ padding: '10px 0px', minHeight: '61px' }}
                className="btn login-button btn-lg btn-success btn-block"
                type="submit"
                onClick={this.handleLogin}
                disabled={this.state.isLoading}
              >

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
