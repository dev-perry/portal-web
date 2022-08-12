import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import Submission from '../models/Submission';
import SubViewer from '../components/SubViewer';

const Submissions: NextPage = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    fetch('/api/submissions')
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Vostome Portal - Submissions</title>
      </Head>
      <div className="flex flex-row h-screen space-x-3">
        <div className="pt-12 pl-12">
        <p className="text-3xl font-default font-semibold">Submissions</p>
        <Table data={submissions} />
        </div>
        <div className="flex grow">
          <SubViewer />
        </div>
      </div>
    </>
  );
};

export default Submissions;
