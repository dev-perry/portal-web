import type { NextPage } from 'next';
import Head from 'next/head';
import Table from '../components/Table';

const Submissions: NextPage = () => {
  return (
    <div className="pt-12 px-12 h-screen">
      <Head>
        <title>Vostome Portal - Submissions</title>
      </Head>
      <p className="text-3xl font-default font-semibold">Submissions</p>
      <div className='mt-5 ml-4'>
      <Table/>  
      </div>

    </div>
  );
};

export default Submissions;