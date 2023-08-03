import { useEffect, useState } from 'react';
import { type AppProps } from 'next/app';
// import LayoutFactory from '@/layouts/LayoutFactory';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
// import { Notifications } from '@mantine/notifications';
// import { QueryClientProvider } from '@tanstack/react-query';

// const variants = {
//   in: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.75,
//       delay: 0.5,
//     },
//   },
//   out: {
//     opacity: 0,
//     scale: 1,
//     y: 40,
//     transition: {
//       duration: 0.75,
//     },
//   },
// };

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // const {
  //   asPath: routerAsPath,
  //   push: routerPush,
  //   events: routerEvents,
  // } = useRouter();

  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       queryCache: new QueryCache({
  //         onError: (error) => {
  //           console.log('#debug error', catchTypeErrorPattern(error as string));
  //           if (catchTypeErrorPattern(error as string)) {
  //             return MantineNotification({
  //               title: 'API Error',
  //               message:
  //                 'Kesalahan ada di sisi server, harap hubungi pihak terkait',
  //               type: 'failed',
  //             });
  //           }

  //           // showNotification({
  //           //   title: (error as ErrorResponse).message,
  //           //   message: (error as ErrorResponse).response.data.message.en,
  //           // })
  //         },
  //       }),
  //       mutationCache: new MutationCache({
  //         onError: (error) => {
  //           showNotification({
  //             title: (error as ErrorResponse).message,
  //             message: (error as ErrorResponse).response.data.message.en,
  //           });
  //         },
  //       }),
  //       defaultOptions: {
  //         queries: {
  //           refetchOnWindowFocus: false,
  //         },
  //       },
  //     }),
  // );

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) return null;

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      // <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            fontFamily: 'Inter, sans-serif',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {/* <LayoutFactory> */}
          {/* <Notifications position="top-center" zIndex={2077} maw="21.5rem" /> */}
          <Component {...pageProps} />
          {/* </LayoutFactory> */}
        </MantineProvider>
      </ColorSchemeProvider>
      // </QueryClientProvider>
    );
  }
}
