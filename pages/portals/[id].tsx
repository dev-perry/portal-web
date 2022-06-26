import FormInput from '../../components/FormInput';
import PortalElementButton from '../../components/PortalElementButton';

function PortalEditor(): JSX.Element {
  return (
    <div className="h-screen">
      <div className="flex flex-row h-full overflow-y-auto">
        <div className="bg-[#F9F9F9] w-[480px] px-10 pt-8">
          <form className="flex flex-col space-y-3 relative">
            <FormInput type="text" label="Portal Name"/>
            <FormInput type="text-area" label="Description"/>
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
            <PortalElementButton type="text"/>
            <PortalElementButton type="text-area"/>
            <PortalElementButton type="single-choice"/>
            <PortalElementButton type="multi-choice"/>
            <PortalElementButton type="date"/>
            <PortalElementButton type="file"/>
          </div>
          <div className="flex flex-row space-x-5 justify-end pt-8">
            <button className="border border-[#9D2F2F] bg-[#FFFFFF] text-[#9D2F2F] w-20 h-8 font-medium rounded">Cancel</button>
            <button className="bg-[#427A5B] w-20 h-8 text-[#FFFFFF] font-medium rounded">Save</button>
          </div>
          </form>
        </div>
        <div className="grow px-10 pt-8">
          <p className="text-2xl font-medium text-[#427A5B] mb-1">Portal Name</p>
          <div className="flex flex-row items-center space-x-2">
            <p>May 3 2022</p>
            <hr style={{
            color: '#D4D4D4',
            backgroundColor: '#D4D4D4',
            height: 2,
            width: 16
        }}
        />
            <p>May 3 2022</p>
          </div>
          <p><span className="font-bold pr-2">$12.00</span>fee</p>
          <p className="leading-5 mt-6 mb-7">Cursus quis quis sit urna, tortor suspendisse vitae mauris. Quis quis volutpat a sit massa et nullam aliquam quam. Viverra faucibus imperdiet consectetur malesuada aliquet. Vitae, urna, imperdiet sem placerat velit convallis suscipit amet est. Consectetur vitae nulla bibendum ornare gravida ultrices. Lacus sit donec egestas donec id. Sit praesent laoreet nulla malesuada accumsan. Consequat sed elit neque, mattis lectus. Amet a fames neque ultricies erat.</p>
          <hr style={{
            color: '#D4D4D4',
            backgroundColor: '#D4D4D4',
            height: 2,
            width: 216,
            margin: 'auto'
        }}
        />
          </div>
      </div>
    </div>
  );
}

export default PortalEditor;
