import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";
import '../../animations.css';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative md:flex flex-col text hover:cursor-pointer w-[130px] bg-slate-200 rounded-lg" onClick={() => setIsOpen((prev) => !prev)}>
            <div className="flex justify-between items-center p-2 hover:bg-slate-70 rounded-lg hover-glowy">
                Art
                {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
            </div>
            {isOpen && (
                <div className="dropdown-slidy flex flex-col absolute w-[130px] top-12 gap-1 bg-slate-200 p-2 rounded-lg font-normal">
                    <a href="/#digital_art">Digital Art</a>
                    <div className="border-b border-white" />
                    <a href="/#traditional_art">Traditional Art</a>
                    <div className="border-b border-white" />
                    <a href="/#photography">Photography</a>
                </div>
            )}
        </div>
    );
};
