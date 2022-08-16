import Submission from '../models/Submission';
import {SubmissionContext} from "../contexts/Submission";
import {useContext} from "react";

function SubViewer({ submission }: { submission: Submission }) {
    const { deleteSubmission } = useContext(SubmissionContext);
  return (
    <div className="flex flex-col space-y-3 relative">
      <button onClick={() => deleteSubmission(submission.id)} className="text-xs border border-[#9D2F2F] text-[#9D2F2F] hover:text-[#ffffff] hover:bg-[#9D2F2F] rounded px-2 absolute right-3">
        Delete
      </button>
      <p className="text-lg text-[#427A5B]">{submission.portal_id}</p>
      <p className="text-sm font-medium">{submission.id}</p>
      {Object.entries(submission.fields).map(([question, answer]) => (
        <div key={question}>
          <p className="text-sm font-medium">{question}</p>
          <p className="text-sm">{answer}</p>
        </div>
      ))}
    </div>
  );
}

export default SubViewer;
