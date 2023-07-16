import React from "react";
import { RxCross2, RxUpload } from 'react-icons/rx';

export default function UploadInput({ entryInput, setEntryInput, image, setImage, fileName, setFileName }) {

    const handleInput = () => {
        const uploadInput = document.querySelector('#upload');
        uploadInput.disabled = false;
        uploadInput.click(); 
    }

    const handleFile = ({ target: { files } }) => {

        const file = files[0];

        if (file) {
            setFileName(file.name)
            setImage(URL.createObjectURL(file));
            setEntryInput({ ...entryInput, picture: file });
        } 
    }

    const handleDelete = () => {
        setFileName('');
        setImage(null);
    }
    

    return (
        <>
            <div className="flex justify-between">
                <label 
                    htmlFor="timer"
                    className="font-bold text-xs text-silver">
                        Capture
                </label>
                {image && 
                    <span className="flex items-center text-xs cursor-pointer">
                        <RxCross2
                            className="w-4 h-4 p-1 bg-red-600 rounded-full"
                            onClick={handleDelete} />
                        <span>{fileName.substring(0, 5)+ '...' + fileName.substring(fileName.length - 4)}</span>   
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
                    onChange={handleFile}
                    multiple={false}
                    hidden />

                {image 
                    ? <img 
                        className="mx-auto"
                        src={image} 
                        width={120} 
                        alt={fileName} />
                    : <RxUpload className="m-auto text-lumi w-5 h-5" />
                    
                }

            </div>
            
        </>

    )
}

// https://www.youtube.com/watch?v=FtpN8QI9PuA