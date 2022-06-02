import React from 'react';
import { useAppSettings } from '@/hooks/useAppSettings';
import { defaultTimestampDatesSettings } from '.';
import type { TimestampDatesSettings } from './types';
import { useTimestampsDates } from './context';

export const useLogic = () => {
  const { save, getAll } = useAppSettings('timestamps-dates');
  const {
    setTimestampFormat,
    timestampFormat,
    setDateTimezone,
    setShowCountsOf,
    showCountsOf,
    dateTimezone,
    outputFormat,
    setOutputFormat,
  } = useTimestampsDates();

  const [screenSettings, setScreenSettings] = React.useState<
    TimestampDatesSettings | {}
  >({});

  React.useEffect(() => {
    const loadScreenSettings = async () => {
      const settings = await getAll();
      if ((settings && Object.keys(settings).length === 0) || !settings) {
        // no settings - create default ones
        await save({ data: defaultTimestampDatesSettings });
        setScreenSettings(defaultTimestampDatesSettings);
        setTimestampFormat(defaultTimestampDatesSettings.showTimestampInFormat);
        setDateTimezone(defaultTimestampDatesSettings.dateTimezone);
        setShowCountsOf(defaultTimestampDatesSettings.showCountsOf);
      } else {
        setScreenSettings(settings);
        setTimestampFormat(settings.showTimestampInFormat);
        setDateTimezone(settings.dateTimezone);
        setShowCountsOf(settings.showCountsOf);
        setOutputFormat(settings.dateTimeOutputFormat);
      }
    };
    loadScreenSettings();
  }, []);

  const saveSettings = React.useCallback(async () => {
    await save({
      withNotif: true,
      data: {
        ...screenSettings,
        dateTimezone: dateTimezone,
        showCountsOf: showCountsOf,
        showTimestampInFormat: timestampFormat,
        dateTimeOutputFormat: outputFormat,
      },
    });
  }, [timestampFormat, showCountsOf, dateTimezone, outputFormat]);

  const resetSettings = React.useCallback(async () => {
    await save({
      withNotif: true,
      data: { ...defaultTimestampDatesSettings },
    });
    setTimestampFormat('milliseconds');
    setDateTimezone('local');
    setShowCountsOf(['daysCount']);
  }, []);

  return {
    saveSettings,
    resetSettings,
  };
};
