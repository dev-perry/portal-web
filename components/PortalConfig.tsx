import { useContext } from 'react';
import FormInputWrapper from './FormInputWrapper';
import {PortalConfigurationContext} from '../contexts/PortalConfiguration';


function PortalConfig(): JSX.Element {

  const {fields, name, desc,} = useContext(PortalConfigurationContext);

    return(
        <div className="grow px-10 py-8 overflow-auto">
        <p className="text-2xl font-medium text-[#427A5B] mb-1">
          {name}
        </p>
        <p className="leading-5 mt-6 mb-7">{desc}</p>
        <hr
          style={{
            color: '#D4D4D4',
            backgroundColor: '#D4D4D4',
            height: 2,
            width: 216,
            margin: 'auto',
          }}
        />
        <div className="flex flex-col space-y-8 mt-7 h-screen">
          {fields.map((field, position) => (
            <FormInputWrapper key={position} field={field} index={position}/>
          ))}
        </div>
      </div>
      )
}

export default PortalConfig;