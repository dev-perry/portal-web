import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import classNames from 'classnames';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="flex flex-row min-h-screen">
      <div
        className={classNames('flex-none align-self-start', {
          hidden: router.asPath == '/auth',
        })}
      >
        <NavBar />
      </div>
      <div className="grow">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
