import { DateTimeFromTimestampProvider } from './DateTimeFromTimestamp';
import { Component } from './TimestampsDates';

export const TimestampsDates = () => {
  return (
    <DateTimeFromTimestampProvider>
      <Component />
    </DateTimeFromTimestampProvider>
  );
};

export const TimestampsDatesId = 'timestamps-dates';
export * from './types';
