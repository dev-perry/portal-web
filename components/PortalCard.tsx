type CardProps = {
  name: string;
  desc: string;
  id: string;
}
function PortalCard({name, desc}: CardProps): JSX.Element {
  return (
    <div className="w-80 h-40 border-2 border-[#E6E6E6] rounded bg-[#FFFFFF] font-default flex flex-row">
      <div className="w-1/2 h-full border-r-2 border-[#E6E6E6] bg-[#FAFAFA] px-3 pt-3">
        <p className="font-semibold text-base">{name}</p>
        <div className="h-1/2 whitespace-normal font-regular text-xs text-ellipsis overflow-hidden">{desc}</div>
      </div>
      <div className="pt-2 w-1/2 h-full relative pl-3 flex flex-col">
        <span className="text-xs font-bold absolute right-3"><i className="fa-solid fa-circle fa-xs pr-1" style={{color:'#427A5B'}}></i>Active</span>
        <div className="mt-6 space-y-1.5">
          <span className="text-sm m-auto block"><i className="fa-regular fa-circle-check pr-2" style={{color:'#427A5B'}}></i>Text</span>
          <span className="text-sm m-auto block"><i className="fa-regular fa-circle-check pr-2" style={{color:'#427A5B'}}></i>Files</span>
          <span className="text-sm m-auto block"><i className="fa-regular fa-circle-check pr-2" style={{color:'#427A5B'}}></i>Payment</span>
        </div>
        <div className="flex flex-row space-x-3 absolute bottom-3 right-3 mx-auto">
          <button className="text-xs border border-[#4C4C4C] text-[#4C4C4C] rounded px-2">
            Edit
          </button>
          <button className="text-xs border border-[#9D2F2F] text-[#9D2F2F] rounded px-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortalCard;
