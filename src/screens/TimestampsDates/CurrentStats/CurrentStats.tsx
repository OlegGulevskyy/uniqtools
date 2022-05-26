import { CopyableBox } from '@/components/CopyableBox';
import { Grid } from '@mantine/core';
import { useLogic } from './logic';

export const CurrentStats = () => {
  const { currentDate, currentTime, weekCounter } = useLogic();
  return (
    <Grid>
      <Grid.Col span={3}>
        <CopyableBox label="Date" displayValue={currentDate} enableTooltip />
      </Grid.Col>
      <Grid.Col span={3}>
        <CopyableBox label="Time" displayValue={currentTime} enableTooltip />
      </Grid.Col>
      <Grid.Col span={3}>
        <CopyableBox
          label="Week count"
          displayValue={String(weekCounter)}
          enableTooltip
        />
      </Grid.Col>
    </Grid>
  );
};
