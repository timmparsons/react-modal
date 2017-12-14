import React from 'react';

class Calendar extends React.Component {
  render() {
    <div className="controls">
          <a className="pull-left" data-go="prev">
            <div className="btn">
              <i className="icon-chevron-left"></i>
            </div>
          </a>
          <h4>
            <span data-head-year></span> 
            <span data-head-month></span>
          </h4>
          <a className="pull-right" data-go="next">
            <div className="btn"><i className="icon-chevron-right"></i>
            </div>
          </a>
    </div>
    <hr/>
      <div className="day-headers">
        <div className="day header">Mon</div>
        <div className="day header">Tue</div>
        <div className="day header">Wed</div>
        <div className="day header">Thu</div>
        <div className="day header">Fri</div>
        <div className="day header">Sat</div>
        <div className="day header">Sun</div>
      </div>
      <div className="days" data-group="days">
      </div>
  }
}