import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="#pablo">داشبورد</a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
              </button>
              <div className="collapse navbar-collapse justify-content-end">
                <form className="navbar-form">
                  <div className="input-group no-border">
                    <input type="text" defaultValue className="form-control" placeholder="جستجو..." />
                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                      <i className="material-icons">search</i>
                      <div className="ripple-container" />
                    </button>
                  </div>
                </form>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#pablo">
                      <i className="material-icons">dashboard</i>
                      <p className="d-lg-none d-md-block">
                        آمارها
                      </p>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons">notifications</i>
                      <span className="notification">۵</span>
                      <p className="d-lg-none d-md-block">
                        اعلان‌ها
                      </p>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">محمدرضا به ایمیل شما پاسخ داد</a>
                      <a className="dropdown-item" href="#">شما ۵ وظیفه جدید دارید</a>
                      <a className="dropdown-item" href="#">از حالا شما با علیرضا دوست هستید</a>
                      <a className="dropdown-item" href="#">اعلان دیگر</a>
                      <a className="dropdown-item" href="#">اعلان دیگر</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pablo">
                      <i className="material-icons">person</i>
                      <p className="d-lg-none d-md-block">
                        حساب کاربری
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="content">
            <div className="container-fluid" style={{width: 'calc(100% - 100px)'}}>
              
              <div className="row">
                <div className="card card-profile">
                  <div className="card-avatar">
                    <a href="#pablo">
                      <img className="img" src="../assets/img/faces/marc.jpg" />
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="card-category text-gray">مدیرعامل / مدیرفنی</h6>
                    <h4 className="card-title">خداداد عزیزی</h4>
                    <p className="card-description">
                      طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
                    </p>
                    <a href="#pablo" className="btn btn-primary btn-round">دنبال‌کردن</a>
                  </div>
                </div>
              </div>
          
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">content_copy</i>
                      </div>
                      <p className="card-category">فضا مصرف شده</p>
                      <h3 className="card-title">49/50
                        <small>GB</small>
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-danger">warning</i>
                        <a href="#pablo">فضای بیشتری داشته باشید...</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">store</i>
                      </div>
                      <p className="card-category">سود</p>
                      <h3 className="card-title">$34,245</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">date_range</i>۲۴ ساعت اخیر
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">info_outline</i>
                      </div>
                      <p className="card-category">مشکلات حل شده</p>
                      <h3 className="card-title">75</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">local_offer</i> توسط گیت‌هاب
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <i className="fa fa-twitter" />
                      </div>
                      <p className="card-category">دنبال‌کننده</p>
                      <h3 className="card-title">+245</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">update</i> هم‌اکنون
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-success">
                      <div className="ct-chart" id="dailySalesChart" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">فروش روزانه</h4>
                      <p className="card-category">
                        <span className="text-success">
                          <i className="fa fa-long-arrow-up" /> 55% </span> رشد در فروش امروز.</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> ۴ دقیقه پیش
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-warning">
                      <div className="ct-chart" id="websiteViewsChart" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">دنبال کننده‌های ایمیلی</h4>
                      <p className="card-category">کارایی آخرین کمپین</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> کمپین دو روز پیش ارسال شد
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-danger">
                      <div className="ct-chart" id="completedTasksChart" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">وظایف انجام شده</h4>
                      <p className="card-category">کارایی آخرین کمپین</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> کمپین دو روز پیش ارسال شد
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-tabs card-header-primary">
                      <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                          <span className="nav-tabs-title">وظایف:</span>
                          <ul className="nav nav-tabs" data-tabs="tabs">
                            <li className="nav-item">
                              <a className="nav-link active" href="#profile" data-toggle="tab">
                                <i className="material-icons">bug_report</i> باگ‌ها
                                <div className="ripple-container" />
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#messages" data-toggle="tab">
                                <i className="material-icons">code</i> وبسایت
                                <div className="ripple-container" />
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#settings" data-toggle="tab">
                                <i className="material-icons">cloud</i> سرور
                                <div className="ripple-container" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>همان حال کار آنها به نوعی وابسته به متن می‌باشد
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="messages">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="settings">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td> از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                      <span className="form-check-sign">
                                        <span className="check" />
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="ویرایش وظیفه" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="حذف" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-warning">
                      <h4 className="card-title">آمار کارکنان</h4>
                      <p className="card-category">کارکنان جدید از ۱۵ آبان ۱۳۹۶</p>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <thead className="text-warning">
                          <tr><th>کد</th>
                            <th>نام</th>
                            <th>حقوق</th>
                            <th>استان</th>
                          </tr></thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>احمد حسینی</td>
                            <td>$36,738</td>
                            <td>مازندران</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>مینا رضایی</td>
                            <td>$23,789</td>
                            <td>گلستان</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>مبینا احمدپور</td>
                            <td>$56,142</td>
                            <td>تهران</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>جلال آقایی</td>
                            <td>$38,735</td>
                            <td>شهرکرد</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-primary">
                      <h3 className="card-title">اعلان ها</h3>
                      <p className="card-category">ایجاد شده توسط دوست ما
                        <a target="_blank" href="https://github.com/mouse0270">Robert McIntosh</a>. لطفا
                        <a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">مستندات کامل </a> را مشاهده بکنید.
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="alert alert-warning">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          این یک اعلان است که با کلاس "alert-warning" ایجاد شده است.</span>
                      </div>
                      <div className="alert alert-primary">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <i className="material-icons">close</i>
                        </button>
                        <span>
                          این یک اعلان است که با کلاس "alert-primary" ایجاد شده است.</span>
                      </div>
                      <div className="alert alert-info alert-with-icon" data-notify="container">
                        <i className="material-icons" data-notify="icon">add_alert</i>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <i className="material-icons">close</i>
                        </button>
                        <span data-notify="پیام">این یک اعلان با دکمه بستن و آیکن است</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card card-profile">
                    <div className="card-avatar">
                      <a href="#pablo">
                        <img className="img" src="../assets/img/faces/marc.jpg" />
                      </a>
                    </div>
                    <div className="card-body">
                      <h6 className="card-category text-gray">مدیرعامل / مدیرفنی</h6>
                      <h4 className="card-title">خداداد عزیزی</h4>
                      <p className="card-description">
                        طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
                      </p>
                      <a href="#pablo" className="btn btn-primary btn-round">دنبال‌کردن</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="container-fluid">
                <nav className="float-left">
                  <ul>
                    <li>
                      <a href="https://www.creative-tim.com">
                        تیم خلاق
                      </a>
                    </li>
                    <li>
                      <a href="https://creative-tim.com/presentation">
                        درباره ما
                      </a>
                    </li>
                    <li>
                      <a href="http://blog.creative-tim.com">
                        بلاگ
                      </a>
                    </li>
                    <li>
                      <a href="https://www.creative-tim.com/license">
                        اجازه نامه
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="copyright float-right">
                  ©
                  , ساخته شده با
                  <i className="material-icons">favorite</i> توسط
                  <a href="https://www.creative-tim.com" target="_blank">تیم خلاق</a> برای وب بهتر.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;