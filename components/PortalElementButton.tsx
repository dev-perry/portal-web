import {useContext} from "react";
import { PortalConfigurationContext } from "../contexts/PortalConfiguration";

type ButtonProps = {
  fieldType: string;
}

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
  }
}

function PortalElementButton({fieldType} : ButtonProps): JSX.Element {

  const {handleAddField} = useContext(PortalConfigurationContext);

  return (
    <button onClick={() => handleAddField(fieldType)} className="flex flex-col w-[100px] h-[72px] border-2 border-[#D4D4D4] rounded bg-[#FFFFFF] justify-center">
      <div className="mx-auto">
      <i className={elements[fieldType].icon + " fa-regular fa-xl"} style={{color:'#427A5B'}}/>
      <p className="text-sm font-medium pt-1">{elements[fieldType].label}</p>
      </div>
    </button>
  );
}

export default PortalElementButton;