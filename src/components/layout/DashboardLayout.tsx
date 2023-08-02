import SideNavbar from '@/components/Navbar';
import {
  useMantineTheme,
  AppShell,
  Header,
  MediaQuery,
  Burger,
  Group,
  TextInput,
  Menu,
  ActionIcon,
  Title,
  Tabs,
  Badge,
  Avatar,
} from '@mantine/core';
import { IconSearch, IconBell } from '@tabler/icons-react';
import { ReactNode, useState } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      layout="alt"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={<SideNavbar />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Group position="apart" w="100%">
              <TextInput
                placeholder="Search"
                icon={<IconSearch size="0.8rem" />}
              />
              <Group>
                <Menu shadow="md" width={430} position="bottom-end" withArrow>
                  <Menu.Target>
                    <ActionIcon variant="subtle" size="lg">
                      <IconBell size="1rem" />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown p="xl">
                    <Group position="apart" mb="xl">
                      <Title order={3}>Notifikasi</Title>
                    </Group>
                    <Tabs defaultValue="all">
                      <Tabs.List>
                        <Tabs.Tab value="all">Semua</Tabs.Tab>
                        <Tabs.Tab value="archived">Diarsipkan</Tabs.Tab>
                      </Tabs.List>

                      <Tabs.Panel value="all" pt="xs">
                        Gallery tab content
                      </Tabs.Panel>

                      <Tabs.Panel value="archived" pt="xs">
                        Messages tab content
                      </Tabs.Panel>
                    </Tabs>
                  </Menu.Dropdown>
                </Menu>
                <Badge size="lg" radius="xs" variant="outline">
                  karyawan
                </Badge>
                <Avatar src={null} alt="avatar picture">
                  AR
                </Avatar>
              </Group>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
