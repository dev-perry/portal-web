type ChoicesProps = {
  disabled: boolean;
  type: 'radio' | 'checkbox';
  id: number;
  options: string[];
};

function FormInputChoices({
  type,
  id,
  options,
  disabled,
}: ChoicesProps): JSX.Element {
  return (
    <fieldset className="block">
      {options?.map((option, index) => (
        <div key={index} className="block mt-3">
          <input
            disabled={disabled}
            type={type}
            className="border-2 border-[#D4D4D4]"
          ></input>
          <span className="ml-2">{option}</span>
        </div>
      ))}
    </fieldset>
  );
}

export default FormInputChoices;
