import type { NextPage } from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import PortalCard from '../../components/PortalCard';

const Portals: NextPage = () => {
  const router = useRouter();
  return (
    <div className="pt-12 px-12 h-screen">
      <Head>
        <title> Vostome - Portals</title>
      </Head>
      <div className="flex flex-row">
      <p className="text-3xl font-default font-semibold">Portals</p>
      <button className="h-8 ml-9 text-base rounded border px-4 border-[#427A5B] text-[#427A5B]" onClick={() => router.push("/portals/editor")}>Create Portal</button>
      </div>
      <div className="grid grid-cols-3 mt-8">
        <PortalCard/>
        <PortalCard/>
        <PortalCard/>
      </div>
    </div>
  );
};

export default Portals;