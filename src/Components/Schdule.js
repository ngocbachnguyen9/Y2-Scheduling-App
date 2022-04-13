import * as React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-04-14';
const schedulerData = [
  { startDate: '2022-04-14T09:45', endDate: '2022-04-14T11:00', title: 'Team Skills' },
  { startDate: '2022-04-14T12:00', endDate: '2022-04-14T13:30', title: 'Presentation Skills' },
  { startDate: '2022-04-12T10:45', endDate: '2022-04-12T12:00', title: 'Communications' },
  { startDate: '2022-04-13T11:15', endDate: '2022-04-13T12:30', title: 'Finance Advisory' },
  { startDate: '2022-04-15T09:45', endDate: '2022-04-15T11:00', title: 'Marketing' },
  { startDate: '2022-04-10T13:00', endDate: '2022-04-10T14:30', title: 'Presentation Skills' },
];


const Schdule = () => {
  return (
    <div className='calender'>
      <Scheduler
        data={schedulerData}
      >
        <ViewState
          currentDate={currentDate}
        />
        <WeekView startDayHour={9} endDayHour={17} />
        <Appointments />
      </Scheduler>
    </div>
  )
}

export default Schdule