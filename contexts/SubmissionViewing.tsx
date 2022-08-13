import { createContext, useState } from "react"
import Submission from "../models/Submission"

type ViewingContext = {
    submissions: Submission[];
    selectedSubmission: Submission | undefined;
    setSubmissions: (submissions: Submission[]) => void;
    setSelectedSubmission: (submission: Submission) => void;
}

export const ViewingContext = createContext({} as ViewingContext);

function Viewing({children} : {children: React.ReactNode}){
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [selectedSubmission, setSelectedSubmission] = useState<Submission>();


    return(
        <ViewingContext.Provider value={{submissions, selectedSubmission, setSubmissions, setSelectedSubmission}}>
            {children}
        </ViewingContext.Provider>
    )
}

export default Viewing;