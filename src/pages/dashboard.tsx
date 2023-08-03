import DashboardLayout from '@/components/layout/DashboardLayout';
import { Stack, Title, Group, Card, ThemeIcon, Text } from '@mantine/core';
import {
  IconCircles,
  IconCheck,
  IconX,
  IconPlaylistX,
} from '@tabler/icons-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
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
      </Stack>
    </DashboardLayout>
  );
}
