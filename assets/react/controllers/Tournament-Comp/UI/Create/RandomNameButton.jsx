import React, { useContext } from "react";
import { TournamentContext } from "../../../_Provider/TournamentContext";

export default function RandomNameButton({ setEventName }) {

    const { setData } = useContext(TournamentContext);

    const firstWord = ['ultra', 'retro', 'star', 'banana', 'virtual',
                    'bonus', 'bobomb', 'jungle', 'slam', 'master',
                    'super', 'club', 'power', 'warp', 'burning',
                    'pow', 'mega', 'luma', 'chomp', 'hero',
                    'comet', 'double', 'fuzzy', 'shroom', 
                    'crazy', 'jump', 'lucky', 'magic'];

    const secondWord = ['jam', 'team', 'bros', 'saga', 'world',
                    'fury', 'plus', 'classic', 'special', 'charged',
                    'clash', 'land', 'deluxe', 'fever', 'striker',
                    'league', 'rush', 'party', 'mix', 'melee',
                    'dash', 'fresh', 'shell', 'smasher',
                    'barrel', 'punch', 'machine', 'blast'];

    const handleRandomName = () => {
        const randomFirstWord = firstWord[Math.floor(Math.random() * firstWord.length)];
        const randomSecondWord = secondWord[Math.floor(Math.random() * secondWord.length)];
        const randomName = randomFirstWord.charAt(0).toUpperCase() 
                            + randomFirstWord.slice(1) 
                            + " " 
                            + randomSecondWord.charAt(0).toUpperCase() 
                            + randomSecondWord.slice(1);
        setEventName(randomName);
        setData((prevData) => ({ ...prevData, name: randomName }));
    }

    return (
        <div className="relative">
            <div className="flex items-center gap-4 py-2 px-4 rounded-lg 
                            border-solid border-[1px] border-silver text-silver 
                            hover:text-lumi hover:cursor-pointer"
                onClick={handleRandomName}>
                    Nom aléatoire
            </div>
        </div>
    )
}