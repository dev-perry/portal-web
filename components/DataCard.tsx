function DataCard(): JSX.Element {
    return(
        <div className="w-60 h-40 border-2 border-[#E6E6E6] rounded bg-[#FAFAFA] font-default flex flex-col items-center py-4 space-y-3">
            <p className="font-semibold text-lg">Submissions</p>
            <p className="font-bold text-5xl text-[#427A5B]">23</p>
            <div className="flex flex-row text-xs font-semibold space-x-4">
                <button className="uppercase text-[#427A5B] font-bold">Day</button>
                <button className="uppercase font-bold">Week</button>
                <button className="uppercase font-bold">Month</button>
            </div>
        </div>
    )
}

export default DataCard