import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import PortalConfiguration from '../contexts/PortalConfiguration';
import Submission from '../contexts/Submission';
import Viewing from '../contexts/SubmissionViewing';
import PortalManager from '../contexts/Portal';
import Auth from '../contexts/Auth';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Auth>
    <div className="flex flex-row min-h-screen">
      <div
        className={classNames('flex-none align-self-start', {
          hidden:
            router.asPath.includes('/auth') ||
            router.asPath.includes('/submit'),
        })}
      >
        <NavBar />
      </div>
      <div className="grow">
        <DndProvider backend={HTML5Backend}>

          <PortalConfiguration>
            <PortalManager>
            <Submission>
              <Viewing>
                <Component {...pageProps} />
              </Viewing>
            </Submission>
            </PortalManager>
          </PortalConfiguration>
        </DndProvider>
      </div>
    </div>
    </Auth>
  );
}

export default MyApp;
