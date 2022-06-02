import type { TimestampDatesSettings } from '@/screens/TimestampsDates';
import { TimestampsDatesId } from '@/screens/TimestampsDates';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconCross } from '@tabler/icons';
import { Store } from 'tauri-plugin-store-api';
const SETTINGS_FILE_NAME = '.settings.dat';

interface Settings {
  [TimestampsDatesId]: TimestampDatesSettings;
}

type SaveDataType<T> = {
  withNotif?: boolean;
  data: T;
};

export function useAppSettings<K extends keyof Settings>(screenKey: K) {
  const store = new Store(SETTINGS_FILE_NAME);

  const listAll = async () => {
    return await store.entries();
  };

  const getAll = async () => {
    return await store.get<Settings[K]>(screenKey);
  };

  const getByKey = async (key: keyof Settings[K]) => {
    const all = await getAll();
    if (all) {
      return all[key];
    }
  };

  const updateByKey = async <U extends keyof Settings[K]>(
    key: U,
    value: Settings[K][U]
  ) => {
    store.set(String(key), value);
  };

  const updateAll = async (value: Settings[K]) => {
    await store.set(screenKey, value);
    await store.save();
  };

  const resetAll = async () => {
    await store.set(screenKey, null);
  };

  const save = async (saveData: SaveDataType<Settings[K]>) => {
    updateAll(saveData.data)
      .then(() => {
        return saveData.withNotif
          ? showNotification({
              title: 'Saved!',
              message: 'Settings were successfully saved!',
              icon: <IconCheck />,
              color: 'green',
            })
          : true;
      })
      .catch((err) => {
        return saveData.withNotif
          ? showNotification({
              title: 'Failed to save',
              message: err instanceof Error ? err.message : `${err}`,
              color: 'red',
              icon: <IconCross />,
            })
          : err;
      });
  };

  return {
    getAll,
    getByKey,
    updateByKey,
    save,
    resetAll,
    listAll,
  };
}
