import React from 'react';
import type { TimestampFormat } from './types';

type TimestampFromDateTimeContext = {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  currentTime: Date;
  setCurrentTime: React.Dispatch<React.SetStateAction<Date>>;
  timestampFormat: TimestampFormat;
  setTimestampFormat: React.Dispatch<React.SetStateAction<TimestampFormat>>;
};
export const TimestampFromDateTimeContext = React.createContext(
  {} as TimestampFromDateTimeContext
);

export const TimestampFromDateTimeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [timestampFormat, setTimestampFormat] =
    React.useState<TimestampFormat>('milliseconds');

  return (
    <TimestampFromDateTimeContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        currentTime,
        setCurrentTime,
        timestampFormat,
        setTimestampFormat,
      }}
    >
      {children}
    </TimestampFromDateTimeContext.Provider>
  );
};

export const useTimestampFromDateTime = () =>
  React.useContext(TimestampFromDateTimeContext);
