import { useState } from 'react';
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  TextInput,
  Group,
  Avatar,
  Badge,
  Title,
  Card,
  ThemeIcon,
  Paper,
  Stack,
  ActionIcon,
  Menu,
  Tabs,
} from '@mantine/core';
import SideNavbar from '@/pages/components/layout/Navbar';
import {
  IconBell,
  IconCheck,
  IconCircles,
  IconPlaylistX,
  IconSearch,
  IconX,
} from '@tabler/icons-react';
import DashboardTable from '@/pages/components/DashboardTable';

export default function Dashboard() {
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
      <Stack spacing="lg">
        <Title
          order={3}
          sx={(theme) => ({
            color: theme.colors.gray[8],
          })}
        >
          Informasi Individual Development Plan
        </Title>
        <Group grow>
          <Card shadow="xs" padding="md" withBorder>
            <ThemeIcon size="xl">
              <IconCircles />
            </ThemeIcon>
            <Text mt="xl" color="dimmed" size="sm">
              Total Pengajuan
            </Text>
            <Title
              order={2}
              mt={8}
              sx={(theme) => ({
                color: theme.colors.gray[9],
              })}
            >
              12
            </Title>
          </Card>
          <Card shadow="xs" padding="md" withBorder>
            <ThemeIcon size="xl" color="green">
              <IconCheck />
            </ThemeIcon>
            <Text mt="xl" color="dimmed" size="sm">
              Disetujui
            </Text>
            <Title
              order={2}
              mt={8}
              sx={(theme) => ({
                color: theme.colors.gray[9],
              })}
            >
              12
            </Title>
          </Card>
          <Card shadow="xs" padding="md" withBorder>
            <ThemeIcon size="xl" color="red">
              <IconX />
            </ThemeIcon>
            <Text mt="xl" color="dimmed" size="sm">
              Ditolak
            </Text>
            <Title
              order={2}
              mt={8}
              sx={(theme) => ({
                color: theme.colors.gray[9],
              })}
            >
              3
            </Title>
          </Card>
          <Card shadow="xs" padding="md" withBorder>
            <ThemeIcon size="xl" color="orange">
              <IconPlaylistX />
            </ThemeIcon>
            <Text mt="xl" color="dimmed" size="sm">
              Revisi
            </Text>
            <Title
              order={2}
              mt={8}
              sx={(theme) => ({
                color: theme.colors.gray[9],
              })}
            >
              1
            </Title>
          </Card>
        </Group>
        <Paper shadow="xs" withBorder>
          <DashboardTable />
        </Paper>
      </Stack>
    </AppShell>
  );
}
