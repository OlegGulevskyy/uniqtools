import { ShowCountsOfType } from './DateTimeFromTimestamp/types';

export interface TimestampDatesSettings {
  showTimestampInFormat: 'milliseconds' | 'seconds';
  showCountsOf: ShowCountsOfType[];
  dateTimezone: 'local' | 'utc';
  dateTimeOutputFormat: string;
}
