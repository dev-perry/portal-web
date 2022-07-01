import { useState } from 'react';
import FormInputWrapper from './FormInputWrapper';

type Field = {
    id: number;
    type: string;
}

function PortalConfig(): JSX.Element {
    const [fields, setFields] = useState<Field[]>([
        { id: 1, type: 'text' },
        {  id: 2, type: 'text-area' },
        {  id: 3, type: 'single-choice' },
        {  id: 4, type: 'multi-choice' },
        {  id: 5, type: 'date' },  
    ])

    return(
        <div className="grow px-10 py-8 overflow-auto">
        <p className="text-2xl font-medium text-[#427A5B] mb-1">
          Portal Name
        </p>
        <div className="flex flex-row items-center space-x-2">
          <p>May 3 2022</p>
          <hr
            style={{
              color: '#D4D4D4',
              backgroundColor: '#D4D4D4',
              height: 2,
              width: 16,
            }}
          />
          <p>May 3 2022</p>
        </div>
        <p>
          <span className="font-bold pr-2">$12.00</span>fee
        </p>
        <p className="leading-5 mt-6 mb-7">
          Cursus quis quis sit urna, tortor suspendisse vitae mauris. Quis
          quis volutpat a sit massa et nullam aliquam quam. Viverra faucibus
          imperdiet consectetur malesuada aliquet. Vitae, urna, imperdiet sem
          placerat velit convallis suscipit amet est. Consectetur vitae nulla
          bibendum ornare gravida ultrices. Lacus sit donec egestas donec id.
          Sit praesent laoreet nulla malesuada accumsan. Consequat sed elit
          neque, mattis lectus. Amet a fames neque ultricies erat.
        </p>
        <hr
          style={{
            color: '#D4D4D4',
            backgroundColor: '#D4D4D4',
            height: 2,
            width: 216,
            margin: 'auto',
          }}
        />
        <form className="flex flex-col space-y-8 mt-7">
          {fields.map((field) => (
            <FormInputWrapper key={field.type} type={field.type}/>
          ))}
        </form>
      </div>
      )
}

export default PortalConfig;