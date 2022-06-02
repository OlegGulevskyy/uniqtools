import React from 'react';
import { useAppSettings } from '@/hooks/useAppSettings';
import { defaultTimestampDatesSettings } from '.';
import type { TimestampDatesSettings } from './types';
import { useTimestampFromDateTime } from './TimestampFromDateTime/context';
import { useDateTimeFromTimestamp } from './DateTimeFromTimestamp';

export const useLogic = () => {
  const { updateAll, getByKey, getAll } = useAppSettings('timestamps-dates');
  const { setTimestampFormat, timestampFormat } = useTimestampFromDateTime();
  const { setDateTimezone, setShowCountsOf, showCountsOf, dateTimezone } =
    useDateTimeFromTimestamp();
  const [screenSettings, setScreenSettings] = React.useState<
    TimestampDatesSettings | {}
  >({});

  React.useEffect(() => {
    const loadScreenSettings = async () => {
      const settings = await getAll();
      if (!settings) {
        // no settings - create default ones
        await updateAll(defaultTimestampDatesSettings);
        setScreenSettings(defaultTimestampDatesSettings);
      } else {
        setScreenSettings(settings);
        setTimestampFormat(settings.showTimestampInFormat);
        setDateTimezone(settings.dateTimezone);
        setShowCountsOf(settings.showCountsOf);
      }
    };
    loadScreenSettings();
  }, []);

  const saveSettings = React.useCallback(async () => {
    try {
      await updateAll({
        ...screenSettings,
        dateTimezone: dateTimezone,
        showCountsOf: showCountsOf,
        showTimestampInFormat: timestampFormat,
      });
    } catch (err) {}
  }, [timestampFormat, showCountsOf, dateTimezone]);
  return {
    saveSettings,
    getByKey,
  };
};
