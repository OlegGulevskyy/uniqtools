import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  Button,
  MantineTheme,
} from '@mantine/core';
import { navData } from './data';

interface NavLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  disabled?: boolean;
}

function NavLink({ icon, color, label, disabled }: NavLinkProps) {
  const linkColorStyle = (theme: MantineTheme) => {
    if (disabled) {
      return theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.black;
    }
    return theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  };
  return (
    <UnstyledButton
      disabled
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: linkColorStyle(theme),

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
        cursor: disabled ? 'not-allowed' : 'pointer',
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export function NavLinks() {
  const links = navData.map((link) => <NavLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
