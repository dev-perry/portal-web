import Submission from "../models/Submission";
import classNames from "classnames";
import { useEffect, useContext} from "react";
import { ViewingContext } from "../contexts/SubmissionViewing";

function Table({data} : {data: Submission[]}): JSX.Element {
  const dateLabel = (dateString: string) => {
    const submittedDate = new Date(dateString)
    return submittedDate.toLocaleDateString("en-US", {weekday: undefined, month: "short", day: "numeric", year: "numeric"});
  };

  const { selectedSubmission, setSelectedSubmission } = useContext(ViewingContext);

  const handleSelection = (index: number) => {
    setSelectedSubmission(data[index]);
  }

  const sortByDate = (a: Submission, b: Submission) => {
    const aDate = new Date(a.created_on);
    const bDate = new Date(b.created_on);
    return bDate.getTime() - aDate.getTime();
  }


  useEffect(() => {
      if(data.length > 0) {
        handleSelection(0);
      }
  }, [])

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
                    {data.sort(sortByDate).map((submission, index) => (
                      <tr onClick={() => handleSelection(index)} className={classNames({
                        "text-[#4C4C4C]": true,
                        "bg-[#427A5B26]": selectedSubmission && submission.id === selectedSubmission.id,
                        })} key={submission.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                          {submission.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-[#427A5B]">{submission.portals!.name}</td>
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