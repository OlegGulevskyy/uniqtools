import dayjs from 'dayjs';
import React from 'react';

export const useLogic = () => {
  const [currentDateTime, setCurrentDateTime] = React.useState(new Date());
  const onDatePickerChange = (value: Date) => setCurrentDateTime(value);
  const result = React.useMemo(() => {
    const res = dayjs(currentDateTime).valueOf();
    return isNaN(res) ? 0 : res;
  }, [currentDateTime]);

  return {
    currentDateTime,
    setCurrentDateTime,
    onDatePickerChange,
    timestampResult: result,
  };
};
