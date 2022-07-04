import Head from 'next/head';
import FormInput from '../../components/FormInput';
import PortalConfig from '../../components/PortalConfig';
import PortalElementButton from '../../components/PortalElementButton';

function PortalEditor(): JSX.Element {
  const portalButtons: string[] = [
    'text',
    'text-area',
    'single-choice',
    'multi-choice',
    'date',
    'file',
  ];

  return (
    <div className="h-screen">
      <Head>
        <title>Vostome Portal - Portal Editor</title>
      </Head>
      <div className="flex flex-row h-full overflow-y-auto">
        <div className="bg-[#F9F9F9] w-[480px] px-10 py-8">
          <div className="flex flex-col space-y-3 relative">
            <FormInput type="text" label="Portal Name" />
            <FormInput type="text-area" label="Description" />
            <label className="block">
              <span className="font-medium text-base">Fee</span>
              <input
                type="text"
                className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-32 rounded-lg"
              ></input>
            </label>
            <fieldset className="block">
              <div className="block">
                <input
                  type="checkbox"
                  className="border-2 border-[#D4D4D4] rounded"
                ></input>
                <span className="ml-2">Require payment</span>
              </div>
            </fieldset>
            <div className="flex flex-row space-x-7">
              <FormInput type="date" label="Start" />
              <FormInput type="date" label="End" />
            </div>
            <div className="grid grid-cols-3 gap-y-6 pt-8">
              {portalButtons.map((type) => (
                <PortalElementButton key={type} fieldType={type} />
              ))}
            </div>
            <div className="flex flex-row space-x-5 justify-end pt-8">
              <button className="border border-[#9D2F2F] bg-[#FFFFFF] text-[#9D2F2F] w-20 h-8 font-medium rounded">
                Cancel
              </button>
              <button className="bg-[#427A5B] w-20 h-8 text-[#FFFFFF] font-medium rounded">
                Save
              </button>
            </div>
          </div>
        </div>
        <PortalConfig/>
      </div>
    </div>
  );
}

export default PortalEditor;
