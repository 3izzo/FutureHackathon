import React, { Component } from 'react'


function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}
function intToRGB(i) {
  var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
  return hexToRGB("#" + ("00000".substring(0, 6 - c.length) + c));
}
function hexToRGB(h) {
  let r = 0, g = 0, b = 0;
  r = "0x" + h[1] + h[2];
  g = "0x" + h[3] + h[4];
  b = "0x" + h[5] + h[6];
  return "rgba(" + +r + "," + +g + "," + +b + ",0.25)";
}

function fixData(data) {
  let times = [[], [], [], [], []];

  let startHour = 24;
  let endHour = 0;

  data.forEach(datum => {
    datum.times.forEach(time => {
      let fromHour = parseInt(time.from.split(":")[0]);
      let fromMin = parseInt(time.from.split(":")[1]);
      if (parseInt(fromMin) >= 30)
        fromHour++;
      let toHour = parseInt(time.to.split(":")[0]);
      let toMin = parseInt(time.to.split(":")[1]);
      if (parseInt(toMin) >= 30)
        toHour++;
      let day = parseInt(time.day) - 1;
      times[day][fromHour] = { from: fromHour, size: toHour - fromHour, room: time.room, ...datum };
      for (let i = fromHour + 1; i < toHour; i++)
        times[day][i] = null;
      startHour = Math.min(startHour, fromHour)
      endHour = Math.max(endHour, toHour);
    });
  });


  return { times, startHour, endHour };
}

export default class Calendar extends Component {
  state = {
    mainClass: {
      shortName: "",
      fullName: "",
      doctor: "",
      type: "",
      sectionId: 0,
      times: [
        {
          day: "1", from: "00:00", to: "00:50", room: "",
        },
      ]
    }
  };
  getCells(data) {
    let rows = [];
    const percent = 100 / 6 + "%";
    rows.push(
      <tr key={"head"}>
        <th>
          الأحد
      </th>
        <th>
          الاثنين
        </th>
        <th>
          الثلاثاء
        </th>
        <th>
          الأربعاء
        </th>
        <th>
          الخميس
        </th>
      </tr>)
    for (let i = data.startHour; i < data.endHour; i++) {
      let row = [];
      row.push(<td key={-1} style={{ width: percent, height: ("7.5vh") }}>{i}:00</td>)
      for (let j = 0; j < data.times.length; j++) {
        const datum = data.times[j][i];
        if (datum === undefined)
          row.push(<td key={j} style={{ width: percent, height: ("7.5vh") }}></td>)
        else {
          if (datum !== null)
            row.push(
              <td key={j} rowSpan={datum.size} style={{
                width: percent, height: ("7.5vh"),
                backgroundColor: intToRGB(hashCode(datum.fullName)),
                textAlign: 'center',
              }}
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  this.setState({ mainClass: datum });
                }}
              >
                {datum.shortName}<br />
                <h6> {datum.from}:00 - {datum.from + datum.size - 1}:50</h6>
              </td>);
        }
      }
      rows.push(<tr key={i}>{row}</tr>)
    }
    if (rows.length === 1)
      rows.push(<tr key={"tail"}><td style={{ height: "7.5vh" }}></td></tr>)
    return rows;
  }

  render() {
    let data = fixData(this.props.classes);
    console.log(data);
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{this.state.mainClass.shortName + " | " + this.state.mainClass.fullName}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <table className="table" >
                <tbody>
                  <tr >
                    <td style={{ width: "20vh" }}>الدكتور:</td>
                    <td style={{ width: "50%" }}>{this.state.mainClass.doctor}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20vh" }}>رقم الشعبة:</td>
                    <td style={{ width: "50%" }}>{this.state.mainClass.sectionId}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20vh" }}>الفعالية:</td>
                    <td style={{ width: "50%" }}>{this.state.mainClass.type}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20vh" }}>القاعة:</td>
                    <td style={{ width: "50%" }}>{this.state.mainClass.room}</td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-striped table-dark table-borderless">
          <tbody style={{ minHeight: "20vh" }}>
            {this.getCells(data)}
          </tbody>
        </table>
      </div>
    )
  }
}
