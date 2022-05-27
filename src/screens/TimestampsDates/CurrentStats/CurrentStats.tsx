import { CopyableBox } from '@/components/CopyableBox';
import { Grid } from '@mantine/core';
import { useLogic } from './logic';

export const CurrentStats = () => {
  const { currentDate, currentTime, weekCounter } = useLogic();
  return (
    <Grid>
      <Grid.Col xs={12} sm={4} md={4} lg={4}>
        <CopyableBox label="Date" displayValue={currentDate} enableTooltip />
      </Grid.Col>
      <Grid.Col xs={12} sm={4} md={4} lg={4}>
        <CopyableBox label="Time" displayValue={currentTime} enableTooltip />
      </Grid.Col>
      <Grid.Col xs={12} sm={4} md={4} lg={4}>
        <CopyableBox
          label="Week count"
          displayValue={String(weekCounter)}
          enableTooltip
        />
      </Grid.Col>
    </Grid>
  );
};
