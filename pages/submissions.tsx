import type { NextPage } from 'next';
import { useEffect, useContext } from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import SubViewer from '../components/SubViewer';
import { ViewingContext } from '../contexts/SubmissionViewing';

const Submissions: NextPage = () => {
  const { submissions, setSubmissions, selectedSubmission } = useContext(ViewingContext);

  useEffect(() => {
    fetch('/api/submissions')
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submissions]);

  return (
    <>
      <Head>
        <title>Vostome Portal - Submissions</title>
      </Head>
      <div className="flex flex-row h-screen space-x-3">
        <div className="pt-12 pl-12 w-4/6">
        <p className="text-3xl font-default font-semibold">Submissions</p>
        <Table data={submissions} />
        </div>
        <div className="w-2/6 bg-[#FAFAFA] border-l-2 border-[#E6E6E6] p-8">
          {selectedSubmission && <SubViewer submission={selectedSubmission} />}
        </div>
      </div>
    </>
  );
};

export default Submissions;
