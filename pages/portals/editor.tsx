import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import PortalConfig from '../../components/PortalConfig';
import PortalElementButton from '../../components/PortalElementButton';
import { PortalConfigurationContext } from '../../contexts/PortalConfiguration';

function PortalEditor(): JSX.Element {
  const router = useRouter();

  const portalButtons: string[] = [
    'text',
    'text-area',
    'single-choice',
    'multi-choice',
    'date',
  ];

  const {updateDesc, updateName, writeToDatabase } = useContext(PortalConfigurationContext);

  const savePortal = () => {
    writeToDatabase();
    router.replace('/portals');
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Vostome Portal - Portal Editor</title>
      </Head>
      <div className="flex flex-row h-full overflow-y-auto">
        <div className="bg-[#F9F9F9] w-[480px] px-10 py-8">
          <div className="flex flex-col space-y-3 relative">
            <label className="block">
              <span className="font-medium text-base">Portal Name</span>
              <input
                onChange={(e) => updateName(e.target.value)}
                className="block border-2 border-[#D4D4D4] mt-3.5 h-8 w-[396px] rounded-lg px-2"
              ></input>
            </label>
            <label className="block">
              <span className="font-medium text-base">Description</span>
              <textarea
                onChange={(e) => updateDesc(e.target.value)}
                className="block border-2 border-[#D4D4D4] mt-3.5 w-[396px] rounded-lg px-2 h-24"
              ></textarea>
            </label>
            <div className="grid grid-cols-3 gap-y-6 pt-8">
              {portalButtons.map((type) => (
                <PortalElementButton key={type} fieldType={type} />
              ))}
            </div>
            <div className="flex flex-row space-x-5 justify-end pt-8">
              <button className="border border-[#9D2F2F] bg-[#FFFFFF] text-[#9D2F2F] w-20 h-8 font-medium rounded">
                Cancel
              </button>
              <button onClick={savePortal} className="bg-[#427A5B] w-20 h-8 text-[#FFFFFF] font-medium rounded">
                Save
              </button>
            </div>
          </div>
        </div>
        <PortalConfig />
      </div>
    </div>
  );
}

export default PortalEditor;
