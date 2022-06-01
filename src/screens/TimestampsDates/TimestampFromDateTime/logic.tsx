import dayjs from 'dayjs';
import React from 'react';
import { useTimestampFromDateTime } from './context';

const TimestampFormats = {
  Milliseconds: 'milliseconds',
  Seconds: 'seconds',
};

export const useLogic = () => {
  const {
    setCurrentDate,
    setCurrentTime,
    setTimestampFormat,
    currentDate,
    currentTime,
    timestampFormat,
  } = useTimestampFromDateTime();

  const onDatePickerChange = (value: Date) => setCurrentDate(value);

  const resetCurrentDate = () =>
    setCurrentDate(new Date(currentDate.setHours(0, 0, 0, 0)));
  const resetCurrentTime = () => setCurrentTime(new Date());

  const result = React.useMemo(() => {
    let date = dayjs(currentDate);
    if (currentTime) {
      const selectedTime = dayjs(currentTime);
      const time = [
        selectedTime.get('hour'),
        selectedTime.get('minute'),
        selectedTime.get('second'),
      ];
      date = date
        .set('hour', time[0])
        .set('minute', time[1])
        .set('second', time[2]);
    }
    const res = date.valueOf();
    if (isNaN(res)) {
      return 0;
    }

    return timestampFormat === TimestampFormats.Seconds
      ? date.unix()
      : date.valueOf();
  }, [currentDate, currentTime, timestampFormat]);

  return {
    currentDate,
    currentTime,
    setCurrentTime,
    setCurrentDate,
    onDatePickerChange,
    timestampResult: result,
    resetDate: resetCurrentDate,
    resetTime: resetCurrentTime,
    timestampFormat,
    setTimestampFormat,
  };
};
