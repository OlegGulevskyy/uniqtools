import { Navbar } from '@mantine/core';
import { NavLinks } from '@/components/NavLinks';
import { SidebarFooter } from '@/components/SidebarFooter';

export function NavbarContainer() {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow mt="xs">
        <NavLinks />
      </Navbar.Section>
      <Navbar.Section>
        <SidebarFooter />
      </Navbar.Section>
    </Navbar>
  );
}
