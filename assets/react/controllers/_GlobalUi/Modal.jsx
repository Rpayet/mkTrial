import React, { useContext } from "react";
import { Button } from "./Buttons";
import { EventContext } from "../_Provider/EventContext";

export default function Modal() {
  const { modal } = useContext(EventContext);

  return (
    <div className='absolute w-full h-full backdrop-blur-[2px] z-50 flex items-center justify-center'>
        <div className='bg-white h-fit w-1/2 rounded-md p-2 flex flex-col justify-between gap-2 items-center border-solid border-2 border-lumi'>
            <div className="flex flex-col gap-2 items-center">
                <h2 className='font-bold'>{modal?.title}</h2>
                {modal?.content() && modal?.content()}
            </div>

            <div className='flex gap-2'>
                <Button 
                    onClick={modal?.buttons[0].action} 
                    text={modal?.buttons[0].text}
                    type={modal?.buttons[0].type}
                    disabled={modal?.buttons[0].disabled} />
                <Button 
                    onClick={modal?.buttons[1].action} 
                    text={modal?.buttons[1].text}
                    type={modal?.buttons[1].type}
                    disabled={modal?.buttons[1].disabled} />
            </div>
        </div>
    </div>
  );
}