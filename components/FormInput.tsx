type InputProps = {
  type: string;
  options?: string[];
};

const inputs: { [key: string]: (options?: string[]) => JSX.Element } = {
  text: () => (
    <input className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-[396px] rounded-lg px-2"></input>
  ),
  'text-area': () => (
    <textarea className="block border-2 border-[#D4D4D4] mt-3.5 w-[396px] rounded-lg px-2 h-24"></textarea>
  ),
  date: () => (
    <input
      type="date"
      className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-32 rounded-lg"
    ></input>
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

function FormInput({ type, options }: InputProps): JSX.Element {
  return (
      <label className="block">
        <span className="font-medium text-base">Label</span>
        {inputs[type](options)}
      </label>
  );
}

export default FormInput;
