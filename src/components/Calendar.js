import React, { Component } from 'react'
import { Inject, ScheduleComponent, Day, Week, Month, EventSettingsModel, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule'
import './Calendar.css'


export default class Calendar extends Component {

  localData = {
    dataSource: [
      {
        Id: 1,
        Subject: 'CSc 456: Assignment 2',
        StartTime: new Date(2021, 9, 23, 4, 0),
        EndTime: new Date(2021, 9, 23, 6, 30),
        IsAllDay: false,
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
        // IsReadonly: true,
      },
      {
        Id: 2,
        Subject: 'CSc 456: Assignment 2',
        StartTime: new Date(2021, 9, 20, 4, 0),
        EndTime: new Date(2021, 9, 20, 6, 30),
        IsAllDay: false,
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
        // IsReadonly: true,
      },
      {
        Id: 3,
        Subject: 'CSc 456: Assignment 2',
        StartTime: new Date(2021, 9, 18, 4, 0),
        EndTime: new Date(2021, 9, 18, 6, 30),
        IsAllDay: false,
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
        // IsReadonly: true,
      }
    ]
  };

  render() {
    return (
      <ScheduleComponent currentView='Month' eventSettings={this.localData} allowDragAndDrop={true} allowResizing={true} >
        <Inject services={[Day, Week, Month, DragAndDrop, Resize]} />
      </ScheduleComponent>
    )
  }
}
