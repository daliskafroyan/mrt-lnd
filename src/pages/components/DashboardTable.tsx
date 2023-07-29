import {
  Box,
  Group,
  Stack,
  Image,
  Text,
  Badge,
  Select,
  createStyles,
} from '@mantine/core';
import dayjs from 'dayjs';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import data from './dummydata.json';
import { sortBy } from 'lodash';

const PAGE_SIZE = 15;

const useStyles = createStyles((theme) => ({
  header: {
    '&& th': {
      fontSize: theme.spacing.sm,
      color: theme.colors.gray[6],
      background: theme.colors.gray[0],
    },
  },
}));

export default function DashboardTable() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data.slice(from, to));
  }, [page]);

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'event.title',
    direction: 'asc',
  });

  useEffect(() => {
    const sortedData = sortBy(data, sortStatus.columnAccessor) as typeof data;
    setRecords(
      sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData,
    );
  }, [sortStatus]);

  const { classes } = useStyles();
  return (
    <Box>
      <Group my={20} mx={24} position="apart">
        <Stack spacing={0}>
          <Text
            size="lg"
            fw="bold"
            sx={(theme) => ({
              color: theme.colors.gray[9],
            })}
          >
            List Pelatihan IDP
          </Text>
          <Text c="dimmed">
            Semua kegiatan yang dapat diikuti oleh karyawan
          </Text>
        </Stack>
        <Select
          value="softskill"
          data={[{ value: 'softskill', label: 'Soft Skill Competency' }]}
        />
      </Group>
      <DataTable
        classNames={classes}
        records={records}
        mih={190}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        columns={[
          {
            accessor: 'event.title',
            title: 'Judul Kegiatan',
            width: 300,
            render: ({ event }) => (
              <Stack spacing={0}>
                <Text
                  fw={600}
                  truncate
                  sx={(theme) => ({
                    color: theme.colors.gray[9],
                  })}
                >
                  {event.title}
                </Text>
                <Text c="dimmed" truncate>
                  {event.subTitle}
                </Text>
              </Stack>
            ),
          },
          {
            accessor: 'organizer.name',
            title: 'Penyelenggara',
            render: ({ organizer }) => (
              <Group>
                <Image alt="logo" src={organizer.logo} width="36" height="36" />
                <Stack spacing={0}>
                  <Text>{organizer.name}</Text>
                  <Text c="dimmed">{organizer.detail}</Text>
                </Stack>
              </Group>
            ),
          },
          {
            accessor: 'startEvent',
            title: 'Tanggal Pelaksanaan',
            render: ({ startEvent }) => dayjs(startEvent).format('MMM D, YYYY'),
          },
          {
            accessor: 'endEvent',
            title: 'Hitung Mundur',
            render: ({ startEvent, endEvent }) =>
              `${dayjs(endEvent).diff(dayjs(startEvent), 'day')} Hari`,
          },
          {
            accessor: 'status',
            width: 100,
            render: ({ status }) => {
              if (status === 'running') {
                return <Badge radius="xs">running</Badge>;
              } else if (status === 'incoming') {
                return (
                  <Badge color="green" radius="xs">
                    incoming
                  </Badge>
                );
              } else if (status === 'delayed') {
                return (
                  <Badge color="dark" radius="xs">
                    delayed
                  </Badge>
                );
              }

              return (
                <Badge color="grey" radius="xs">
                  running
                </Badge>
              );
            },
          },
        ]}
        totalRecords={data.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
        loadingText="Memuat..."
        noRecordsText="Tidak ada data ditemukan"
      />
    </Box>
  );
}
