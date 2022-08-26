import type { NextPage } from 'next';
import { useEffect, useContext } from 'react';
import Head from 'next/head';
import Table from '../components/Table';
import SubViewer from '../components/SubViewer';
import { ViewingContext } from '../contexts/SubmissionViewing';
import { supabase } from '../utils/supabaseClient';

const Submissions: NextPage = () => {
  const { submissions, selectedSubmission, fetchSubmissions } =
    useContext(ViewingContext);

  useEffect(() => {
    fetchSubmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
        const subsListener = supabase
          .from('submissions')
          .on('*', () => {
            fetchSubmissions()
          })
          .subscribe()
          return () => {
            subsListener.unsubscribe()
          }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
