import { TimestampsDatesProvider } from './context';
import { Component } from './TimestampsDates';
import { TimestampDatesSettings } from './types';

export const TimestampsDates = () => {
  return (
    <TimestampsDatesProvider>
      <Component />
    </TimestampsDatesProvider>
  );
};

export const TimestampsDatesId = 'timestamps-dates';
export * from './types';
export const defaultTimestampDatesSettings: TimestampDatesSettings = {
  showCountsOf: ['daysCount'],
  showTimestampInFormat: 'milliseconds',
  dateTimezone: 'local',
};
