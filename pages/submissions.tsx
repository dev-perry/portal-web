import type { NextPage } from 'next';
import Table from '../components/Table';

const Submissions: NextPage = () => {
  return (
    <div className="pt-12 px-12 h-screen">
      <h1 className="text-3xl font-default font-semibold">Submissions</h1>
      <div className="flex flex-row mt-8 space-x-4">
        <input
        type="search"
        className="h-8 w-60 rounded border-[#E6E6E6] bg-[#FAFAFA] font-regular"
        placeholder="Search"
        />
        <button className="border-[#E6E6E6] rounded border-2 px-3 text-sm font-regular text-[#4C4C4C]">Filter by Portal</button>
        <button className="border-[#E6E6E6] rounded border-2 px-3 text-sm font-regular text-[#4C4C4C]">Filter by Status</button>
        <button className="border-[#E6E6E6] rounded border-2 px-3 text-sm font-regular text-[#4C4C4C]">Filter by Date</button>
      </div>
      <div className='mt-5 ml-4'>
      <Table/>  
      </div>

    </div>
  );
};

export default Submissions;