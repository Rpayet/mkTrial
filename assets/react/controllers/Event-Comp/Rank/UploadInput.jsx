import React, { useState } from "react";

export default function UploadInput() {

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleInput = () => {
        const uploadInput = document.querySelector('#upload');
        uploadInput.disabled = false;
        uploadInput.click(); 
    }

    const handleChange = ({ target: {files}}) => {
        files[0] && setFileName(files[0].name)
        if (files) {
            setImage(URL.createObjectURL(files[0]))
        } 
    }

    const handleDelete = () => {
        setFileName('');
        setImage(null);
    }

    return (
        <div className="flex flex-col w-2/5">
            <div className="flex justify-between">
                <label 
                    htmlFor="timer"
                    className="font-bold text-xs text-silver">
                        Capture
                </label>
                {image && 
                    <span 
                        className="flex items-center text-xs cursor-pointer">
                            <img src="/assets/admin/img/icons/Cross.svg" 
                                alt="cross"
                                className="w-4 h-4 p-1 bg-red-600 rounded-full"
                                onClick={handleDelete} />
                            {fileName.substring(0, 5)+ '...' + fileName.substring(fileName.length - 4)}    
                    </span>
                }
            </div>

            <div 
                id="form-timer"
                className="flex py-2 items-center 
                border-dashed border-2 border-lumi rounded-lg
                cursor-pointer"
                onClick={handleInput}>

                <input 
                    id="upload"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    hidden />

                {image ? 
                    <img 
                        className="mx-auto"
                        src={image} 
                        width={120} 
                        alt={fileName} />
                    :
                    <div className="mx-auto border-solid border-[1px] border-lumi rounded-full hover:bg-slate-100">
                        <img 
                            className="w-4 p-1"
                            src="/assets/admin/img/icons/Upload.svg" 
                            alt="upload" />
                    </div>
                }

            </div>
            
        </div>

    )
}

// https://www.youtube.com/watch?v=FtpN8QI9PuA