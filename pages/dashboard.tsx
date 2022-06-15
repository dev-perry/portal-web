import type { NextPage } from 'next';
import DataCard from '../components/DataCard';

const Dashboard: NextPage = () => {
  const today = new Date().toLocaleDateString(undefined, {month: 'long', day: 'numeric', weekday: 'long'})
  return (
    <div className="pt-12 px-12 h-screen">
      <div className="flex flex-row">
      <p className="text-3xl font-default font-semibold">{today}</p>
      <button className="h-8 ml-9 text-base rounded border px-4 border-[#427A5B] text-[#427A5B]">Create Portal</button>
      </div>
      <div className="grid grid-cols-3 mt-8">
        <DataCard/>
        <DataCard/>
        <DataCard/>
      </div>
      <div className="mt-8">
      <p className="text-lg font-default font-semibold mb-4">Activity</p>
      <ul className="text-[#797979] font-regular">
        <li className="flex flex-row space-x-4">
          <p>5:30 pm</p>
          <p>A new submission was sent to the <span className="text-[#427A5B] font-medium">Essay Competition</span> portal</p>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Dashboard;