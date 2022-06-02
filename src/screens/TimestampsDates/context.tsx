import React from 'react';
import type {
  DateTimezone,
  ShowCountsOfType,
} from './DateTimeFromTimestamp/types';
import type { TimestampFormat } from './TimestampFromDateTime/types';

type TimestampsDatesSettingsContext = {
  /* Get timestamp from date & time component state */
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  currentTime: Date;
  setCurrentTime: React.Dispatch<React.SetStateAction<Date>>;
  timestampFormat: TimestampFormat;
  setTimestampFormat: React.Dispatch<React.SetStateAction<TimestampFormat>>;

  /* Get date & time from timestamp component */
  dateTimezone: DateTimezone;
  setDateTimezone: React.Dispatch<React.SetStateAction<DateTimezone>>;
  showCountsOf: ShowCountsOfType[];
  setShowCountsOf: React.Dispatch<React.SetStateAction<ShowCountsOfType[]>>;
  outputFormat: string;
  setOutputFormat: React.Dispatch<React.SetStateAction<string>>;
};

export const TimestampsDatesContext = React.createContext(
  {} as TimestampsDatesSettingsContext
);

export const TimestampsDatesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [timestampFormat, setTimestampFormat] =
    React.useState<TimestampFormat>('milliseconds');
  const [dateTimezone, setDateTimezone] = React.useState<DateTimezone>('local');
  const [showCountsOf, setShowCountsOf] = React.useState<ShowCountsOfType[]>(
    []
  );
  const [outputFormat, setOutputFormat] = React.useState('');

  return (
    <TimestampsDatesContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        currentTime,
        setCurrentTime,
        timestampFormat,
        setTimestampFormat,
        dateTimezone,
        setDateTimezone,
        showCountsOf,
        setShowCountsOf,
        outputFormat,
        setOutputFormat,
      }}
    >
      {children}
    </TimestampsDatesContext.Provider>
  );
};

export const useTimestampsDates = () =>
  React.useContext(TimestampsDatesContext);
