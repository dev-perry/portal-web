import {useContext} from 'react';
import {PortalConfigurationContext} from '../contexts/PortalConfiguration';
import FormInputChoices from '../components/FormInputChoices';

type InputProps = {
  id: number;
  type: string;
  editable: boolean
  label?: string;
};

function FormInput({ type, id, editable, label="Label"}: InputProps): JSX.Element {

  const { handleUpdateField } = useContext(PortalConfigurationContext);

  const updateLabel = (e: React.FormEvent<HTMLSpanElement>) => {
    handleUpdateField(id, "label", e.currentTarget.innerText);
  }

  const inputs: { [key: string]: (options?: string[]) => JSX.Element } = {
    text: () => (
      <input disabled={editable} name={label} className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-[396px] rounded-lg px-2"></input>
    ),
    'text-area': () => (
      <textarea disabled={editable} name={label} className="block border-2 border-[#D4D4D4] mt-3.5 w-[396px] rounded-lg px-2 h-24"></textarea>
    ),
    date: () => (
      <input
        disabled={editable}
        name={label}
        type="date"
        className="block border-2 border-[#D4D4D4] mt-3.5 h-8 rounded-lg"
      ></input>
    ),
    file: () => (
      <input name={label} disabled={editable} type="file" className="block mt-3.5 file:border-2 file:bg-[#F2F2F2] file:rounded-lg file:border-[#D4D4D4]"/>
    ),
    'single-choice': (options = ['Option 1', 'Option 2', 'Option 3']) => <FormInputChoices id={id} type="radio" options={options} disabled={editable}/>,
    'multi-choice': (options = ['Option 1', 'Option 2', 'Option 3']) => <FormInputChoices id={id} type="checkbox" options={options} disabled={editable}/>,
  };

  return (
      <label className="block">
        <span className="font-medium text-base" contentEditable={editable} suppressContentEditableWarning={editable} onInput={(e) => updateLabel(e)}>{label}</span>
        {inputs[type]()}
      </label>
  );
}

export default FormInput;
