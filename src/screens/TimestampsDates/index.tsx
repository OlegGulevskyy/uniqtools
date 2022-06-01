import { DateTimeFromTimestampProvider } from './DateTimeFromTimestamp';
import { TimestampFromDateTimeProvider } from './TimestampFromDateTime/context';
import { Component } from './TimestampsDates';
import { TimestampDatesSettings } from './types';

export const TimestampsDates = () => {
  return (
    <DateTimeFromTimestampProvider>
      <TimestampFromDateTimeProvider>
        <Component />
      </TimestampFromDateTimeProvider>
    </DateTimeFromTimestampProvider>
  );
};

export const TimestampsDatesId = 'timestamps-dates';
export * from './types';
export const defaultTimestampDatesSettings: TimestampDatesSettings = {
  showDayOfYear: true,
  showMonthOfYear: false,
  showWeekOfYear: false,
  showTimestampInFormat: 'milliseconds',
};
