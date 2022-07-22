import { createContext, useState } from "react";

type SubContext = {
    isSubmitting: boolean;
    setSubmittingState: (state: boolean) => void;
    sendSubmission: (portal_id: string, fields: {[key: string]: string}) => void;
}

export const SubmissionContext = createContext({} as SubContext);

function Submission({children} : {children: React.ReactNode}){
    const [isSubmitting, setSubmittingState] = useState<boolean>(false);

    const sendSubmission = (portal_id: string, fields: {[key: string]: string}) => {
        setSubmittingState(true);
        fetch('/api/submissions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({portal_id, fields})
        }).then((res) => {
            setSubmittingState(false);
            if(res.status === 200){
                return res.json();
            }else{
                throw new Error('Error submitting form');
            }
        }).catch((err) => {
            console.error(err);
        }
        )
    }

    return(
        <SubmissionContext.Provider value={{isSubmitting, setSubmittingState, sendSubmission}}>
            {children}
        </SubmissionContext.Provider>
    )
}

export default Submission;