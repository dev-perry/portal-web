import {useState, createContext} from 'react';
import update from 'immutability-helper';
import Field from '../models/Field';

type ConfigContext = {
    fields: Field[],
    desc: string,
    name: string,
    handleAddField: (type: string) => void,
    handleMoveField: (dragIndex: number, hoverIndex: number) => void,
    handleUpdateField: (id: number, attribute: string, value: string | string[] | boolean | null) => void,
    updateDesc: (desc: string) => void,
    updateName: (name: string) => void,
    writeToDatabase: () => void
}

export const PortalConfigurationContext = createContext({} as ConfigContext);


function PortalConfiguration({children}:{children: React.ReactNode}) {
    const [fields, setFields] = useState<Field[]>([])
    const [desc, updateDesc] = useState('Edit the description field to update this text. Important instructions for your submitters should be included here.');
    const [name, updateName] = useState('Portal Name');

  const handleAddField = (type: string) => {
    const id = Math.floor(Math.random() * 68759)
    setFields((previous: Field[]) => 
    update(previous, {
        $push: [{
            id: id,
            label: 'Label',
            type: type,
            required: false,
            options: (type == "single-choice" || type == "multi-choice") ? ['Option 1', 'Option 2', 'Option 3'] : null
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

  const handleUpdateField = (id: number, attribute: string, value: string | string[] | boolean | null) => {
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
            fields: fields,
            desc: desc,
            name: name,
            is_active: true,
    })}
    ).then(res => {
      if(res.status === 200) {
      setFields([]);
      return res.json()
    }else{
      throw new Error("Error creating portal")
    }
  })
  .catch(err => console.error(err))
  }

  return (
    <PortalConfigurationContext.Provider value={{fields, name, desc, handleAddField, handleMoveField, handleUpdateField, updateName, updateDesc, writeToDatabase}}>
      {children}
    </PortalConfigurationContext.Provider>
  );


}

export default PortalConfiguration;