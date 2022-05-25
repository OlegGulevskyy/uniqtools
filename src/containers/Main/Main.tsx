import { ALL_SCREENS } from '@/data/screens';
import { useNavigation } from '@/hooks/useNavigation';

const CurrentScreen = ({ screenIndex }: { screenIndex: number }) => {
  const foundScreen = ALL_SCREENS[screenIndex] ?? ALL_SCREENS[0];
  const Component = foundScreen.component;
  return <Component />;
};

export const Component = () => {
  const { currentScreenIndex } = useNavigation();
  return (
    <div>
      <CurrentScreen screenIndex={currentScreenIndex} />
    </div>
  );
};
