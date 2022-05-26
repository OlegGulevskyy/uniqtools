import React from 'react';
import { Box, Title, Tooltip } from '@mantine/core';
import copy from 'copy-to-clipboard';
import { Copy } from 'tabler-icons-react';

type CopyableBoxProps = {
  displayValue: string;
  label: string;
  enableTooltip?: boolean;
};
export const Component: React.FC<CopyableBoxProps> = ({
  displayValue,
  enableTooltip,
  label,
}) => {
  return (
    <>
      <Title style={{ margin: '5px 0' }} order={6}>
        {label}
      </Title>
      <Tooltip
        disabled={!enableTooltip}
        style={{ width: '100%' }}
        openDelay={500}
        label="Click to copy"
      >
        <Box
          onClick={() => copy(displayValue)}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[2],
            padding: theme.spacing.sm,
            borderRadius: theme.radius.md,
            display: 'flex',
            justifyContent: 'space-between',

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <div>{displayValue}</div>
          <Copy size={20} />
        </Box>
      </Tooltip>
    </>
  );
};
