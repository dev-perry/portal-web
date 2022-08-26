import {useContext} from 'react';
import {PortalConfigurationContext} from '../contexts/PortalConfiguration';
import FormInputChoices from '../components/FormInputChoices';
import ContentEditable from 'react-contenteditable'

type InputProps = {
  id: number;
  type: string;
  editable: boolean
  label: string;
  options: string[] | null;
  required?: boolean;
};

function FormInput({ type, id, editable, label, options, required}: InputProps): JSX.Element {

  const { handleUpdateField } = useContext(PortalConfigurationContext);

  const updateLabel = (e: React.FormEvent<HTMLSpanElement>) => {
    handleUpdateField(id, "label", e.currentTarget.innerText);
  }

  const inputs: { [key: string]: () => JSX.Element } = {
    text: () => (
      <input disabled={editable} name={label} type={type} className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-[396px] rounded-lg px-2"></input>
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
    'single-choice': () => <FormInputChoices id={id} type="single-choice" options={options} disabled={editable} label={label}/>,
    'multi-choice': () => <FormInputChoices id={id} type="multi-choice" options={options} disabled={editable} label={label}/>,
  };

  return (
      <label className="block">
        <span className="font-medium text-base">
          <ContentEditable
          disabled={!editable}
          html={required ? `* ${label}` : label}
          onChange={updateLabel} />
        </span>
        {inputs[type]()}
      </label>
  );
}

export default FormInput;
