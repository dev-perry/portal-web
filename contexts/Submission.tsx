import { createContext, useState } from 'react';
import Portal from '../models/Portal';
import { supabase } from '../utils/supabaseClient';
import {useRouter} from 'next/router';

type SubContext = {
  isSubmitting: boolean;
  targetPortal: Portal;
  setTargetPortal: (portal: Portal) => void;
  setSubmittingState: (state: boolean) => void;
  sendSubmission: (
    fields: { [key: string]: string | string[] }
  ) => void;
  deleteSubmission: (submission_id: string) => void;
};

export const SubmissionContext = createContext({} as SubContext);

function Submission({ children }: { children: React.ReactNode }) {
  const [isSubmitting, setSubmittingState] = useState<boolean>(false);
  const [targetPortal, setTargetPortal] = useState({} as Portal);
  const router = useRouter();

  const sendSubmission = async (
    fields: { [key: string]: string | string[] }
  ) => {
    setSubmittingState(true);
    try {
      const { error } = await supabase
        .from('submissions')
        .insert({ portal_id: targetPortal.id, portal_owner_id: targetPortal.owner_id, fields});
      if (error) throw error;
      setSubmittingState(false);
      router.push(`/submit/${targetPortal.id}/success`);
    } catch (error) {
      setSubmittingState(false);
      router.push(`/submit/${targetPortal.id}/failure`);
      console.error(error);
    }
  };

  const deleteSubmission = async (submission_id: string) => {
    try {
      const { error } = await supabase
        .from('submissions')
        .delete()
        .eq('id', submission_id);
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SubmissionContext.Provider
      value={{
        isSubmitting,
        setSubmittingState,
        sendSubmission,
        deleteSubmission,
        targetPortal,
        setTargetPortal,
      }}
    >
      {children}
    </SubmissionContext.Provider>
  );
}

export default Submission;
