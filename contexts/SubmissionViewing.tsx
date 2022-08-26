import { createContext, useState } from "react"
import Submission from "../models/Submission"
import { supabase } from "../utils/supabaseClient";

type ViewingContext = {
    submissions: Submission[];
    selectedSubmission: Submission | undefined;
    setSubmissions: (submissions: Submission[]) => void;
    setSelectedSubmission: (submission: Submission) => void;
    fetchSubmissions: () => void;
}

export const ViewingContext = createContext({} as ViewingContext);

function Viewing({children} : {children: React.ReactNode}){
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [selectedSubmission, setSelectedSubmission] = useState<Submission>();

    const fetchSubmissions = async () => {
        try {
          const { data, error } = await supabase
            .from('submissions')
            .select('id, portal_id, created_on, fields, portals(name)')
            .limit(100, { foreignTable: 'portals' });
          if (error) throw error;
          setSubmissions(data);
        } catch (error) {
          console.error(error);
        }
      };


    return(
        <ViewingContext.Provider value={{submissions, selectedSubmission, setSubmissions, setSelectedSubmission, fetchSubmissions}}>
            {children}
        </ViewingContext.Provider>
    )
}

export default Viewing;