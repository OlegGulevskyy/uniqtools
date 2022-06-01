import React from 'react';
import type {
  DateTimeFromTimestampContextType,
  DateTimezone,
  ShowCountsOfType,
} from './types';

export const DateTimeFromTimestampContext = React.createContext(
  {} as DateTimeFromTimestampContextType
);

export const DateTimeFromTimestampProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [dateTimezone, setDateTimezone] = React.useState<DateTimezone>('local');
  const [showCountsOf, setShowCountsOf] = React.useState<ShowCountsOfType[]>(
    []
  );

  return (
    <DateTimeFromTimestampContext.Provider
      value={{ dateTimezone, setDateTimezone, showCountsOf, setShowCountsOf }}
    >
      {children}
    </DateTimeFromTimestampContext.Provider>
  );
};

export const useDateTimeFromTimestamp = () =>
  React.useContext(DateTimeFromTimestampContext);
