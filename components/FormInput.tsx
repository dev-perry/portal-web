import {useContext} from 'react';
import {PortalConfigurationContext} from '../contexts/PortalConfiguration';

type InputProps = {
  id: number;
  type: string;
  editable: boolean
};

function FormInput({ type, id, editable}: InputProps): JSX.Element {

  const { handleUpdateField } = useContext(PortalConfigurationContext);

  const updateLabel = (e: React.FormEvent<HTMLSpanElement>) => {
    handleUpdateField(id, "label", e.currentTarget.innerText);
  }

  const inputs: { [key: string]: (options?: string[]) => JSX.Element } = {
    text: () => (
      <input disabled={editable} name="text" className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-[396px] rounded-lg px-2"></input>
    ),
    'text-area': () => (
      <textarea disabled={editable} name="textarea" className="block border-2 border-[#D4D4D4] mt-3.5 w-[396px] rounded-lg px-2 h-24"></textarea>
    ),
    date: () => (
      <input
        disabled={editable}
        name="date"
        type="date"
        className="block border-2 border-[#D4D4D4] mt-3.5 h-8 rounded-lg"
      ></input>
    ),
    file: () => (
      <input disabled={editable} type="file" className="block mt-3.5 file:border-2 file:bg-[#F2F2F2] file:rounded-lg file:border-[#D4D4D4]"/>
    ),
    'single-choice': (options = ['Option 1', 'Option 2', 'Option 3']) => (
      <fieldset className="block">
      {options?.map((option, index) => (
        <div key={index} className="block mt-3">
            <input type="radio" className="border-2 border-[#D4D4D4]"></input>
            <span className="ml-2">{option}</span>
        </div>
        ))}
      </fieldset>
    ),
    'multi-choice': (options = ['Option 1', 'Option 2', 'Option 3']) => (
      <fieldset className="block">
      {options?.map((option, index) => (
        <div key={index} className="block mt-3">
            <input type="checkbox" className="border-2 border-[#D4D4D4] rounded"></input>
            <span className="ml-2">{option}</span>
        </div>
        ))}
      </fieldset>
    ),
  };

  return (
      <label className="block">
        <span className="font-medium text-base" contentEditable={editable} suppressContentEditableWarning={editable} onInput={(e) => updateLabel(e)}>Label</span>
        {inputs[type](['Option 1', 'Option 2', 'Option 3'])}
      </label>
  );
}

export default FormInput;
