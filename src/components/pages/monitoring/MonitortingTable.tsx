import {
  Box,
  Stack,
  Text,
  Badge,
  createStyles,
  Avatar,
  Group,
} from '@mantine/core';
import dayjs from 'dayjs';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import data from '../../dummymonitoringdata.json';
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

export default function MonitoringTable() {
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
      <DataTable
        classNames={classes}
        records={records}
        mih={190}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        columns={[
          {
            accessor: 'index',
            title: 'No.',
            textAlignment: 'center',
            width: 40,
            render: (record) => records.indexOf(record) + 1,
          },
          {
            accessor: 'user.name',
            title: 'Nama Lengkap',
            width: 300,
            render: ({ user: { name, email, avatar } }) => (
              <Group>
                <Avatar>{avatar}</Avatar>
                <Stack spacing={0}>
                  <Text
                    fw={600}
                    truncate
                    sx={(theme) => ({
                      color: theme.colors.gray[9],
                    })}
                  >
                    {name}
                  </Text>
                  <Text c="dimmed" truncate>
                    {email}
                  </Text>
                </Stack>
              </Group>
            ),
          },
          {
            accessor: 'event.title',
            title: 'Nama Lengkap',
            width: 300,
            render: ({ event: { title, subTitle } }) => (
              <Stack spacing={0}>
                <Text
                  fw={600}
                  truncate
                  sx={(theme) => ({
                    color: theme.colors.gray[9],
                  })}
                >
                  {title}
                </Text>
                <Text c="dimmed" truncate>
                  {subTitle}
                </Text>
              </Stack>
            ),
          },
          {
            accessor: 'startEvent',
            title: 'Tanggal Pelaksanaan',
            render: ({ startEvent, endEvent }) =>
              `${dayjs(startEvent).format('MMM D, YYYY')} - ${dayjs(
                endEvent,
              ).format('MMM D, YYYY')}`,
          },
          {
            accessor: 'submitDate',
            title: 'Tanggal Pengajuan',
            render: ({ submitDate }) => dayjs(submitDate).format('MMM D, YYYY'),
          },
          {
            accessor: 'status',
            width: 100,
            render: ({ status }) => {
              if (status === 'berlangsung') {
                return <Badge radius="xs">berlangsung</Badge>;
              } else if (status === 'overdue') {
                return (
                  <Badge color="red" radius="xs">
                    overdue
                  </Badge>
                );
              } else if (status === 'belum mulai') {
                return (
                  <Badge color="dark" radius="xs">
                    delayed
                  </Badge>
                );
              }

              return (
                <Badge color="grey" radius="xs">
                  selesai
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
