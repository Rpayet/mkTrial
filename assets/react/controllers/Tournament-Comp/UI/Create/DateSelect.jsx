import React from "react";
import { TbClockPlus } from 'react-icons/tb';

export default function DateSelect({ setHour, hour, setData, data }) {
  const minDate = new Date().toISOString().substring(0, 10);

  const handleDateChange = (event) => {
    setData({ ...data, endAt: event.target.value });
  };

  return (
    <div>
      <div className='flex gap-2 items-center p-1 justify-center'>
        <span className="block text-xs text-gray-500 font-bold">
          Fin de l'événement
        </span>
        {!hour && 
          <TbClockPlus 
            onClick={() => setHour(true)}
            className='cursor-pointer text-silver hover:text-lumi' /> }
      </div>
      <input
        name="endAt"
        className="block mx-auto px-2 py-1 border-solid border-[1px] 
                            rounded-lg cursor-pointer focus:outline-none 
                            focus:border-lumi"
        type="date"
        min={minDate}
        value={data.endAt}
        onChange={handleDateChange}
      />
    </div>
  );
}
