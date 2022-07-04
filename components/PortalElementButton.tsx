import {useDrag} from 'react-dnd';

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
  }, 
  "file": {
    icon: "fa-file-lines",
    label: "File Upload"
  }
}

function PortalElementButton({fieldType} : ButtonProps): JSX.Element {
  const [_, preview] = useDrag(() => ({
    type: 'portal-element',
    item: {fieldType: fieldType, id: Math.random()},
  }))
  return (
    <button ref={preview} className="flex flex-col w-[100px] h-[72px] border-2 border-[#D4D4D4] rounded bg-[#FFFFFF] justify-center">
      <div className="mx-auto">
      <i className={elements[fieldType].icon + " fa-regular fa-xl"} style={{color:'#427A5B'}}/>
      <p className="text-sm font-medium pt-1">{elements[fieldType].label}</p>
      </div>
    </button>
  );
}

export default PortalElementButton;