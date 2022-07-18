import { useContext } from 'react';
import FormInputWrapper from './FormInputWrapper';
import {PortalConfigurationContext} from '../contexts/PortalConfiguration';


function PortalConfig(): JSX.Element {

  const {fields, name, desc, start, end} = useContext(PortalConfigurationContext);
  const startDate = new Date(start)
  const endDate = new Date(end)
  const dateOptions = { month: 'long', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric'};

  function dateIsValid(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

    return(
        <div className="grow px-10 py-8 overflow-auto">
        <p className="text-2xl font-medium text-[#427A5B] mb-1">
          {name}
        </p>
        <div className="flex flex-row items-center space-x-2">
          <p>{dateIsValid(startDate) ? startDate.toLocaleDateString("en-Us", dateOptions) : 'Start Date'}</p>
          <hr
            style={{
              color: '#D4D4D4',
              backgroundColor: '#D4D4D4',
              height: 2,
              width: 16,
            }}
          />
          <p>{dateIsValid(endDate) ? endDate.toLocaleDateString("en-US", dateOptions) : 'End Date'}</p>
        </div>
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
            <FormInputWrapper key={position} fieldType={field.fieldType} index={position}/>
          ))}
        </div>
      </div>
      )
}

export default PortalConfig;