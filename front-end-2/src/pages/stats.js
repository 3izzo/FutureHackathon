import React, { Component } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ResponsiveLine } from '@nivo/line'

const myResponsiveLine = () => (
  <ResponsiveLine
    data={[
      {
        "data": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 1.2
          },
          {
            "x": 3,
            "y": 4.3
          },
          {
            "x": 4,
            "y": 3.4
          },
          {
            "x": 5,
            "y": 2.5
          },
          {
            "x": 6,
            "y": 1.6
          },
          {
            "x": 7,
            "y": 2.7
          },
          {
            "x": 8,
            "y": 3.8
          },
          {
            "x": 9,
            "y": 4.9
          },
          {
            "x": 10,
            "y": 1.0
          },
          {
            "x": 11,
            "y": 1.1
          },
        ]
      },
    ]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point', }}
    yScale={{ type: 'linear', stacked: true, min: "auto", max: "auto" }}
    axisTop={null}
    axisRight={null}
    curve="cardinal"
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'الترم',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'المعدل',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    colors={{ scheme: 'nivo' }}
    pointSize={10}
    pointColor={{ theme: 'labels.text.fill'}}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
)





export default class Stats extends Component {


  render() {
    return (

      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <div className="content">


            <div className="col">
              <div className="card card-chart">
                <div className="card-header card-header-success" style={{ height: "400px"}}>
                {myResponsiveLine()}
                </div>
                <div className="card-body">
                  <h4 className="card-title">مستوى الطالب خلال المسيرة الجامعية</h4>
                  <p className="card-category">
                    <span className="text-success">
                      <i className="fa fa-long-arrow-up" /> </span> </p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> الترم الحالي
                   </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-6">
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
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
