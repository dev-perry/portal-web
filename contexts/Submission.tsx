import { createContext, useState } from "react";
import { PortalApiResponse } from "../models/Portal";

type SubContext = {
    isSubmitting: boolean;
    targetPortal: PortalApiResponse;
    setTargetPortal: (portal: PortalApiResponse) => void;
    setSubmittingState: (state: boolean) => void;
    sendSubmission: (portal_id: string, fields: {[key: string]: string}) => void;
}

export const SubmissionContext = createContext({} as SubContext);

function Submission({children} : {children: React.ReactNode}){
    const [isSubmitting, setSubmittingState] = useState<boolean>(false);
    const [targetPortal, setTargetPortal] = useState({} as PortalApiResponse)

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
        <SubmissionContext.Provider value={{isSubmitting, setSubmittingState, sendSubmission, targetPortal, setTargetPortal}}>
            {children}
        </SubmissionContext.Provider>
    )
}

export default Submission;