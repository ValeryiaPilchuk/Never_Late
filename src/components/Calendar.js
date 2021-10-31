import React, { Component } from 'react'
import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'
// import './Calendar.css'


export default class Calendar extends Component {

  localData = [
    {
      Id: 1,
      Subject: 'CSc 456: Assignment 1',
      StartTime: new Date(2021, 9, 8, 4, 0), //yyyy-mm-dd (index 0) 
      EndTime: new Date(2021, 9, 8, 6, 30), 
      IsAllDay: false,
      IsReadonly: true,
    },
    {
      Id: 2,
      Subject: 'CSc 456: Assignment 2',
      StartTime: new Date(2021, 9, 10, 4, 0),
      EndTime: new Date(2021, 9, 10, 6, 30),
      IsAllDay: false,
      IsReadonly: true,
    },
    {
      Id: 3,
      Subject: 'CSc 456: Assignment 3',
      StartTime: new Date(2021, 9, 13, 4, 0),
      EndTime: new Date(2021, 9, 13, 6, 30),
      IsAllDay: false,
      IsReadonly: true,
    }
  ];

  render() {
    return (
      <ScheduleComponent currentView='Month' width='100%' ref={schedule => this.scheduleObj = schedule} eventSettings={{ dataSource: this.localData }}>
        <ViewsDirective>
          <ViewDirective option='Day'></ViewDirective>
          <ViewDirective option='Week'></ViewDirective>
          <ViewDirective option='Month' isSelected={true}></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    )
  }
}
