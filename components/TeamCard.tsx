function TeamCard() {
  return (
    <div className="w-80 h-28 border-2 border-[#E6E6E6] rounded bg-[#FFFFFF] font-default flex flex-col">
      <div className="w-full h-1/2 bg-[#FAFAFA] border-b-2 border-[#E6E6E6] flex flex-row justify-between pt-2 px-3">
        <div>
          <p className="text-base font-medium">Mariah Codoc</p>
          <p className="text-xs font-regular">Associate Editor</p>
        </div>
        <div>
          <p className="uppercase text-xs font-semibold text-[#427A5B]">
            Reviewer
          </p>
        </div>
      </div>
      <div className="w-full h-1/2 relative flex flex-row">
        <div className="flex flex-row space-x-3 absolute bottom-3 right-3 mx-auto">
          <button className="text-xs border border-[#4C4C4C] text-[#4C4C4C] rounded px-2">
            Edit Access
          </button>
          <button className="text-xs border border-[#9D2F2F] text-[#9D2F2F] rounded px-2">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
