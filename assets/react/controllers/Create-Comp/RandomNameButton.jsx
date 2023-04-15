import React from "react";

export default function RandomNameButton({ setEventName, data, setData }) {

    const firstWord = ['ultra', 'retro', 'star', 'banana', 'virtual',
                    'bonus', 'bobomb', 'jungle', 'slam', 'master',
                    'super', 'club', 'power', 'warp',
                    'pow', 'mega', 'luma', 'chomp',
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
        setData({ ...data, name: randomName });
    }

    return (
        <div className="relative">
            <div className="flex items-center gap-4 py-2 px-4 rounded-lg 
                            border-solid border-[1px] border-text text-text 
                            hover:text-lumi hover:cursor-pointer"
                onClick={handleRandomName}>
                Nom aléatoire
            </div>
        </div>
    )
}