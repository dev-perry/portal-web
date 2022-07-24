import FormInput from './FormInput';
import type { Identifier, XYCoord } from 'dnd-core'
import { useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { PortalConfigurationContext } from '../contexts/PortalConfiguration';
import Field from '../models/Field';

type WrapperProps = {
  field: Field;
  index: number;
};

function FormInputWrapper({
  field,
  index,
}: WrapperProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const {handleMoveField, handleUpdateField} = useContext(PortalConfigurationContext);

  const updateRequired = (e: React.FormEvent<HTMLSpanElement>) => {
    handleUpdateField(field.id, "required", e.target.value == 'on' ? true : false);
  }

  const [{handlerId}, drop] = useDrop<{index:number}, void, {handlerId: Identifier | null}>({
    accept: 'form-input',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item:{index: number}, monitor) {
      if(!ref.current){
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      //Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      //Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      //Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      //Determine mouse position
      const clientOffset = monitor.getClientOffset();

      //Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      //Only perform the move when the mouse has crossed half of the items height
      //When dragging downwards, only move when the cursor is below 50%
      //When dragging upwards, only move when the cursor is above 50%
      
      //Drag downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      //Drag upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      //Time to actually perform the action
      handleMoveField(dragIndex, hoverIndex);

      item.index = hoverIndex;
    }
  })

  const [_, drag] = useDrag({
    type: 'form-input',
    item: () => {
      return {index}
    }
  })

  drag(drop(ref));

  return (
    <div ref={ref} className="flex flex-row space-x-2 items-center" data-handler-id={handlerId}>
      <i className="fa-grip-dots-vertical fa-regular hover:cursor-grab" />
      <div>
        <FormInput id={field.id} type={field.type} editable={true}/>
        {field.type === 'single-choice' || field.type === 'multi-choice' ? (
          <button className="mt-3 font-semibold text-[#427A5B]">
            Add option
          </button>
        ) : null}
        <div className="block mt-1">
          <input
            type="checkbox"
            className="border-2 border-[#D4D4D4] rounded"
            onChange={(e) => updateRequired(e)}
          />
          <span className="ml-2">Required</span>
        </div>
      </div>
    </div>
  );
}

export default FormInputWrapper;
