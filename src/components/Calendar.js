import React, { Component } from 'react'
import { Inject, ScheduleComponent, Day, Week, Month, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule'
import './Calendar.css'


export default class Calendar extends Component {

  localData = {
    dataSource: [
      {
        Id: 1,
        Subject: 'CSc 456: Assignment 2',
        StartTime: new Date(2021, 10, 23, 4, 0),
        EndTime: new Date(2021, 10, 23, 6, 30),
        IsAllDay: false,
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
        // IsReadonly: true,
      },
      {
        Id: 2,
        Subject: 'CSc 456: Assignment 2',
        StartTime: new Date(2021, 10, 20, 4, 0),
        EndTime: new Date(2021, 10, 20, 6, 30),
        IsAllDay: false,
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
        // IsReadonly: true,
      },
      {
        Id: 3,
        Subject: 'CSc 456: Assignment 2',
        StartTime: new Date(2021, 10, 18, 4, 0),
        EndTime: new Date(2021, 10, 18, 6, 30),
        IsAllDay: false,
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
        // IsReadonly: true,
      }
    ]
  };

  // eventTemplate(props: { [key: String]: Object }): JSX.Element {
  //   return (<div className="template-wrap">{props.Subject}</div>);
  // }

  render() {
    return (
      <ScheduleComponent currentView='Month' eventSettings={{ dataSource: this.localData }}>
        <Inject services={[Day, Week, Month, DragAndDrop, Resize]} />
      </ScheduleComponent>
    )
  }
}
