function PortalElementButton(): JSX.Element {

  const elements: {[key: string]: {icon: string, label: string}} = {
    "text": {
      icon: "fa-input-text",
      label: "Text Field"
    },
    "text-area": {
      icon: "fa-input-pipe",
      label: "Text Area"
    }
  }
  
  return (
    <button className="w-[100px] h-[72px] border-2 border-[#D4D4D4] rounded text-center">
      <i className="fa-input-text fa-regular fa-xl" style={{color:'#427A5B'}}/>
      <p className="text-sm font-medium">Text Field</p>
    </button>
  );
}

export default PortalElementButton;