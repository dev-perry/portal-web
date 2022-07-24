import {useState, createContext} from 'react';
import update from 'immutability-helper';
import Field from '../models/Field';

type ConfigContext = {
    fields: Field[],
    desc: string,
    name: string,
    start: string,
    end: string,
    handleAddField: (type: string) => void,
    handleMoveField: (dragIndex: number, hoverIndex: number) => void,
    handleUpdateField: (id: number, attribute: string, value: string | string[] | boolean) => void,
    updateDesc: (desc: string) => void,
    updateName: (name: string) => void,
    updateStart: (start: string) => void,
    updateEnd: (end: string) => void,
    writeToDatabase: () => void
}

export const PortalConfigurationContext = createContext({} as ConfigContext);


function PortalConfiguration({children}:{children: React.ReactNode}) {
    const [fields, setFields] = useState<Field[]>([])
    const [desc, updateDesc] = useState('Edit the Description field to update this text. Important instructions for your submitters should be included here.');
    const [name, updateName] = useState('Portal Name');
    const [start, updateStart] = useState('');
    const [end, updateEnd] = useState('');

  const handleAddField = (type: string) => {
    const id = Math.floor(Math.random() * 68759)
    setFields((previous: Field[]) => 
    update(previous, {
        $push: [{
            id: id,
            label: 'Label',
            type: type,
            required: false
        }]
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

  const handleUpdateField = (id: number, attribute: string, value: string | string[] | boolean) => {
    setFields((previous: Field[]) =>
      update(previous, {
        [fields.findIndex(field => field.id === id)]: {
          [attribute]: {$set: value}
        }
      }),
    )
  }

  const writeToDatabase = () => {
    fetch('/api/portals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fields: {"blocks": fields},
            desc: desc,
            name: name,
            is_active: true,
            files: true
    })}
    ).then(res => {
      if(res.status === 200) {
      return res.json()
    }else{
      throw new Error("Error creating portal")
    }
  })
  .catch(err => console.error(err))
  }

  return (
    <PortalConfigurationContext.Provider value={{fields, name, desc, start, end, handleAddField, handleMoveField, handleUpdateField, updateName, updateDesc, updateStart, updateEnd, writeToDatabase}}>
      {children}
    </PortalConfigurationContext.Provider>
  );


}

export default PortalConfiguration;