import React from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useInterval } from '@mantine/hooks';

const DATE_FORMAT = 'DD/MM/YYYY';
const TIME_FORMAT = 'HH:mm:ss';

dayjs.extend(weekOfYear);

export const useLogic = () => {
  const [currentTime, setCurrentTime] = React.useState('');
  const currentDate = React.useMemo(() => {
    return dayjs().format(DATE_FORMAT);
  }, []);
  const currentTimeInterval = useInterval(() => {
    setCurrentTime(dayjs().format(TIME_FORMAT));
  }, 1000);
  const weekCounter = React.useMemo(() => {
    return dayjs().week();
  }, []);

  React.useEffect(() => {
    setCurrentTime(dayjs().format(TIME_FORMAT));
    currentTimeInterval.start();
    return () => currentTimeInterval.stop();
  }, []);

  const currentDateTimestamp = React.useMemo(() => {
    return dayjs().valueOf();
  }, []);

  return {
    currentDate,
    currentTime,
    weekCounter,
    currentDateTimestamp,
  };
};
