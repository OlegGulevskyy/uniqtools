import { CopyableBox } from '@/components/CopyableBox';
import { Grid } from '@mantine/core';
import { useLogic } from './logic';

export const CurrentStats = () => {
  const { currentDate, currentTime, weekCounter } = useLogic();
  return (
    <Grid>
      <Grid.Col span={3}>
        <CopyableBox
          label="Current date"
          displayValue={currentDate}
          enableTooltip
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <CopyableBox
          label="Current time"
          displayValue={currentTime}
          enableTooltip
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <CopyableBox
          label="Current week count"
          displayValue={String(weekCounter)}
          enableTooltip
        />
      </Grid.Col>
    </Grid>
  );
};
