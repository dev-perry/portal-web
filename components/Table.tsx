import Submission from "../models/Submission";
import classNames from "classnames";
import {useState, useEffect} from "react";

function Table({data} : {data: Submission[]}): JSX.Element {
  const dateLabel = (dateString: string) => {
    const submittedDate = new Date(dateString)
    return submittedDate.toLocaleDateString("en-US", {weekday: undefined, month: "short", day: "numeric", year: "numeric"});
  };

  const [selectedSubmission, setSelectedSubmission] = useState<string>();

  useEffect(() => {
      setSelectedSubmission(data[0].id);
      console.log(selectedSubmission)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

    return(
        <div className="flex flex-col mt-8"> 
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">  
              <div className="overflow-hidden rounded-t">
                <table className="min-w-full divide-gray-300">
                  <thead className="bg-[#F7F7F7] text-[#4C4C4C]">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold">
                        Submission ID
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                        Portal
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                        Submitted On
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2F2F2] bg-white text-[#4C4C4C]">
                    {data.map((submission) => (
                      <tr onClick={() => setSelectedSubmission(submission.id)} className={classNames({
                        "text-[#4C4C4C]": true,
                        "bg-[#427A5B26]": selectedSubmission && submission.id === selectedSubmission,
                        })} key={submission.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                          {submission.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{submission.portal_id}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{dateLabel(submission.created_on)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Table;