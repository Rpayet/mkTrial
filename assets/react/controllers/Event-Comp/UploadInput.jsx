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
        <div className="flex flex-col justify-center">
            <label 
                htmlFor="timer"
                className="font-bold text-xs text-center text-silver">Capture</label>

            <div 
                id="form-timer"
                className="w-3/5 flex flex-col mx-auto justify-center items-center 
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
                <img src={image} width={160} alt={fileName} />
                :
                <div className="my-6 border-solid border-[1px] border-lumi rounded-full hover:bg-slate-100">
                    <img 
                        className="w-8 p-2"
                        src="/assets/admin/img/icons/Upload.svg" 
                        alt="upload" />
                </div> }

            </div>
            {image && 
                <span 
                    className="flex text-xs mx-auto cursor-pointer">
                    {fileName.substring(0, 5)+ '...' + fileName.substring(fileName.length - 4)}
                    <img src="/assets/admin/img/icons/Cross.svg" 
                    alt="cross"
                    className="w-4 p-1 bg-red-600 rounded-full"
                    onClick={handleDelete} />
                </span>
            }
        </div>

    )
}

// https://www.youtube.com/watch?v=FtpN8QI9PuA