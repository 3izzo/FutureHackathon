import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  componentWillMount() {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth == null) {
      this.props.history.push('/login');
    }
  }

  logout = () => {
    localStorage.removeItem('auth');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <a className="navbar-brand" href="#pablo">لوحة التحكم</a>
            </div>

            <div className="collapse navbar-collapse justify-content-end">
              <form className="navbar-form">
                <div className="input-group no-border">
                  {/* <input type="text" defaultValue className="form-control" value="" /> */}
                  <button type="submit" className="btn btn-white btn-round btn-just-icon">
                    <i className="material-icons">search</i>
                    <div className="ripple-container" />
                  </button>
                </div>
              </form>
              <ul className="navbar-nav">

                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.logout}>
                    <i className="material-icons" style={{ color: '#ad4e4e' }}>exit_to_app</i>
                    <p className="d-lg-none d-md-block">
                      تسجيل خروج
                  </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          {
            (this.props.history.location.pathname !== '/') ? (
              <div class="container" style={{marginTop: '77px', marginBottom: '-62px'}}>
                <button 
                class="btn btn-info btn-lg btn-round"
                onClick={() => {
                  this.props.history.push('/');
                }}>
                  <i class="material-icons" style={{fontSize: '25px'}}>arrow_forward</i> الرجوع
                </button>
              </div>
            ) : (
              <div />
            )
          }

      </div>
    )
  }
}

export default withRouter(Nav);