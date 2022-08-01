import {PortalConfigurationContext} from '../contexts//PortalConfiguration'
import {useContext} from 'react'
import update from 'immutability-helper'
import ContentEditable from 'react-contenteditable'


type ChoicesProps = {
  disabled: boolean;
  label: string;
  type: 'single-choice' | 'multi-choice';
  id: number;
  options: string[] | null;
};

function FormInputChoices({
  label,
  type,
  id,
  options,
  disabled,
}: ChoicesProps): JSX.Element {

  const { handleUpdateField } = useContext(PortalConfigurationContext);

  const updateOptions = (index: number, e: React.FormEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.innerText;
    handleUpdateField(id, 'options', update(options, {$splice: [[index, 1, value]]}))
  }

  return (
    <fieldset className="block">
      {options?.map((option, index) => (
        <div key={index} className="block mt-3">
          <input
            name={label}
            disabled={disabled}
            type={type === 'single-choice' ? 'radio' : 'checkbox'}
            className="border-2 border-[#D4D4D4]"
          ></input>
          <span className="ml-2 inline-block min-w-[50%]">
            <ContentEditable
              disabled={!disabled}
              html={option}
              onChange={(e) => updateOptions(index, e)}
            />
          </span>
        </div>
      ))}
    </fieldset>
  );
}

export default FormInputChoices;
