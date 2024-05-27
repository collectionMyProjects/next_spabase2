import type { AppProps } from 'next/app';

import ThunderLayout from '@/components/layout/ThunderLayout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThunderLayout>
      <Component {...pageProps} />
    </ThunderLayout>
  );
}
