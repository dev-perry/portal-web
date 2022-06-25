import FormInput from '../components/FormInput';

type WrapperProps = {
  type: string;
};

function FormInputWrapper({ type }: WrapperProps): JSX.Element {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <i className="fa-grip-dots-vertical fa-regular hover:cursor-grab" />
      <div>
        <FormInput type={type}/>
        {type === 'single-choice' || type === 'multi-choice' ? <button className="mt-3 font-semibold text-[#427A5B]">Add option</button> : null}
        <div className="block mt-1">
          <input
            type="checkbox"
            className="border-2 border-[#D4D4D4] rounded"
          />
          <span className="ml-2">Required</span>
        </div>
      </div>
    </div>
  );
}

export default FormInputWrapper;
