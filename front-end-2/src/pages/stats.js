import React, { Component } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import insert_chart from '../insert_chart-24px.svg';
import insert_chart2 from '../show_chart-24px.svg';



const subjectGrades = () => (
  <ResponsiveBar
    data={[
      {
        "country": "A+",
        "CSC212": 33,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 10,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 15,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 8,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 20,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 10,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "A",
        "CSC212": 10,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 20,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 22,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 19,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 30,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 40,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "B+",
        "CSC212": 44,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 36,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 44,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 33,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 50,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 57,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "B",
        "CSC212": 50,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 56,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 59,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 69,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 62,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 75,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "C+",
        "CSC212": 90,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 94,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 98,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 123,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 100,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 137,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "C",
        "CSC212": 100,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 106,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 95,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 120,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 109,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 137,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "D+",
        "CSC212": 150,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 109,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 105,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 123,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 100,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 137,
        "S6-Color": "hsl(118, 70%, 50%)"
      },
      {
        "country": "D",
        "CSC212": 100,
        "S1-Color": "hsl(91, 70%, 50%)",
        "CSC251": 94,
        "S2-color": "hsl(224, 70%, 50%)",
        "CSC380": 90,
        "S3-color": "hsl(98, 70%, 50%)",
        "CSC215": 123,
        "S4-Color": "hsl(226, 70%, 50%)",
        "CSC304": 100,
        "S5-Color": "hsl(136, 70%, 50%)",
        "CSC220": 137,
        "S6-Color": "hsl(118, 70%, 50%)"
      }
    ]}
    keys={['CSC212', 'CSC251', 'CSC380', 'CSC215', 'CSC304', 'CSC220']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.25}
    colors={{ scheme: 'set3' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Grades',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Students',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

const myGpaLine = (data) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point', }}
    yScale={{ type: 'linear', stacked: true, min: "1", max: "5" ,}}
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
    enableGridX={false}
    // enableGrid={false}
    colors={{ scheme: 'accent' }}
    pointSize={6}
    pointColor="#7fc97f"
    pointBorderWidth={8}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
)

const myHoursLine = () => (
  <ResponsiveLine
    data={[]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point', }}
    yScale={{ type: 'linear', stacked: true, min: "auto", max: "auto", }}
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
      legend: 'الساعات',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    enableGridX={false}
    // enableGrid={false}
    colors={{ scheme: 'set1' }}
    pointSize={6}
    pointColor="#7fc97f"
    pointBorderWidth={8}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  />
)




export default class Stats extends Component {
  componentWillMount = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth == null) {
      this.props.history.push('/login');
    } else {
      const { stats } = auth;
      let input = [{ data: stats.gpaHistory }]
      this.setState({
        gpaHistory: input
      })
    }
  }

  render() {
    console.log(this.state.gpaHistory);
    return (

      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <div className="content">
            <div className="row">
            <div className="col col-md-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">insert_chart</i>
                      </div>
                      <p className="card-category">المعدل التراكمي </p>
                      <h3 className="card-title">4.57
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> آخر تحديث الترم الحالي
                   </div>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="card card-stats">
                    <div className="card-header card-header card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">insert_chart</i>
                      </div>
                      <p className="card-category">المعدل السابق </p>
                      <h3 className="card-title">4.44
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> آخر تحديث الترم الحالي
                   </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col">
              <div className="card card-chart">
                <div className="card-header card-header-success" >
                  <h4 className="card-title">مستوى الطالب خلال المسيرة الجامعية</h4>
                </div>
                <div className="card-body" style={{ height: "450px" }}>
                  {myGpaLine(this.state.gpaHistory)}
                  <p className="card-category">
                    <span className="text-success">
                      <i /> </span> </p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> آخر تحديث الترم الحالي
                   </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card card-chart">
                  <div className="card-header card-header-warning" >
                    <h4 className="card-title">معدل درجات الطلاب لمواد الترم الحالي</h4>
                  </div>
                  <div className="card-body" style={{ height: "350px" }}>
                    {subjectGrades()}
                    <p className="card-category"></p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i>آخر تحديث الترم السابق
            </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-chart">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">معدل ساعات الدراسة في الترم</h4>
                  </div>
                  <div className="card-body" style={{ height: "350px" }}>
                    {myHoursLine()}
                    <p className="card-category"></p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> آخر تحديث الترم الحالي
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
