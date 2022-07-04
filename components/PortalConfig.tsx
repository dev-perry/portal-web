import { useState } from 'react';
import {useDrop} from 'react-dnd';
import update from 'immutability-helper';
import type Field from '../models/Field';
import FormInputWrapper from './FormInputWrapper';


function PortalConfig(): JSX.Element {
  const [fields, setFields] = useState<Field[]>([
  ])

  const [_, drop] = useDrop(() => ({
    accept: 'portal-element',
    drop: (item : Field) => {
        if(fields.some(field => field.id === item.id))
            return;
        handleAddField(item.fieldType, item.id)
        },
}))

const handleAddField = (type: string, id: number) => {
  setFields((previous: Field[]) => 
  update(previous, {
      $splice: [[0, 0, {
          fieldType: type,
          id: id,
      }]]
  })
  )
}

const handleMoveField = (dragIndex: number, hoverIndex: number) => {
  setFields((previous: Field[]) =>
    update(previous, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, previous[dragIndex] as Field],
      ],
    }),
  )
}

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
        <div ref={drop} className="flex flex-col space-y-8 mt-7 h-screen">
          {fields.map((field, position) => (
            <FormInputWrapper key={field.id} fieldType={field.fieldType} index={position} moveField={handleMoveField}/>
          ))}
        </div>
      </div>
      )
}

export default PortalConfig;