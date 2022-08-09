function Table(): JSX.Element {
    const submissions = [
        { label: 'The Best Place', status: 'Complete', portal: 'Poetry 2020', submitter: 'John Damian', submitted: 'Apr 5 2022' },
        { label: 'The Best Place', status: 'Complete', portal: 'Poetry 2020', submitter: 'John Damian', submitted: 'Apr 5 2022' },
        // More people...
      ]
    return(
        <div className="flex flex-col w-[708px]"> 
          <div className="-my-2 -mx-4 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">  
              <div className="overflow-hidden rounded-t">
                <table className="min-w-full divide-gray-300">
                  <thead className="bg-[#F7F7F7] text-[#4C4C4C]">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold">
                        Submission
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                        Status
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
                    {submissions.map((submission) => (
                      <tr className="text-[#4C4C4C]" key={submission.label}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                          {submission.label}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-[#427A5B]">{submission.status}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{submission.portal}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">{submission.submitted}</td>
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