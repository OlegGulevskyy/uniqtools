import dayjs from 'dayjs';
import React from 'react';

export const useLogic = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const onDatePickerChange = (value: Date) => setCurrentDate(value);

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
    return isNaN(res) ? 0 : res;
  }, [currentDate, currentTime]);

  return {
    currentDate,
    currentTime,
    setCurrentTime,
    setCurrentDate,
    onDatePickerChange,
    timestampResult: result,
  };
};
