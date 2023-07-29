import {
  BackgroundImage,
  Image,
  Card,
  Center,
  Text,
  Group,
  Title,
  Stack,
  Box,
  Button,
} from '@mantine/core';
import { IconMail } from '@tabler/icons-react';

function Login() {
  return (
    <>
      <BackgroundImage h="100vh" src="/bg_mrt.png">
        <Center h="100vh">
          <Card px={48} py={32} radius="md" withBorder w={536} h={624}>
            <Stack justify="space-between" h="100%">
              <Image
                alt="mrt logo"
                src="/mrt-logo.png"
                width="130"
                height="36"
              />
              <Stack>
                <Box>
                  <Title order={1}>
                    Learning and <br /> Development Dashboard (LEAD)
                  </Title>
                  <Text c="dimmed" mt={12}>
                    Selamat Datang!
                  </Text>
                </Box>
                <Button leftIcon={<IconMail />} variant="default" mt={132}>
                  Login with SSO
                </Button>
              </Stack>
              <Group position="apart">
                <Text c="dimmed" fz="sm">
                  © MRTJakarta
                </Text>
                <Group position="apart">
                  <Text c="dimmed" fz="sm">
                    Terms Of use
                  </Text>
                  <Text c="dimmed" fz="sm">
                    Privacy
                  </Text>
                  <Text c="dimmed" fz="sm">
                    Status
                  </Text>
                </Group>
              </Group>
            </Stack>
          </Card>
        </Center>
      </BackgroundImage>
    </>
  );
}

export default Login;
