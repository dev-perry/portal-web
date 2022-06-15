import type { NextPage } from 'next';
import TeamCard from '../components/TeamCard';

const Team: NextPage = () => {
  return (
    <div className="pt-12 px-12 h-screen">
    <div className="flex flex-row">
    <h1 className="text-3xl font-default font-semibold">Team</h1>
    <button className="h-8 ml-9 text-base rounded border px-4 border-[#427A5B] text-[#427A5B]">Invite Teammates</button>
    </div>
    <div className="grid grid-cols-3 mt-8">
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
  </div>
  );
};

export default Team;