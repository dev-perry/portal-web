const elements: {[key: string]: {icon: string, label: string}} = {
  "text": {
    icon: "fa-input-text",
    label: "Text Field"
  },
  "text-area": {
    icon: "fa-input-pipe",
    label: "Text Area"
  },
  "single-choice": {
    icon: "fa-circle-dot",
    label: "Single Choice"
  },
  "multi-choice": {
    icon: "fa-circle-check",
    label: "Multi-Choice"
  },
  "date": {
    icon: "fa-calendar",
    label: "Date"
  }, 
  "file": {
    icon: "fa-file-lines",
    label: "File Upload"
  }
}

function PortalElementButton({type} : {[key: string]: string}): JSX.Element {
  return (
    <button className="w-[100px] h-[72px] border-2 border-[#D4D4D4] rounded text-center bg-[#FFFFFF]">
      <i className={elements[type].icon + " fa-regular fa-xl"} style={{color:'#427A5B'}}/>
      <p className="text-sm font-medium pt-1">{elements[type].label}</p>
    </button>
  );
}

export default PortalElementButton;