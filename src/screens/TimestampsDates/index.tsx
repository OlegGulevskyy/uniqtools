import { DateTimeFromTimestampProvider } from './DateTimeFromTimestamp';
import { TimestampFromDateTimeProvider } from './TimestampFromDateTime/context';
import { Component } from './TimestampsDates';

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
