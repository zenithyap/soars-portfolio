import cat from "../../Images/ImaginativeSketching/cat.jpg";
import piano from "../../Images/ImaginativeSketching/piano.jpg";
import room from "../../Images/ImaginativeSketching/room.jpg";
import pens1 from "../../Images/ImaginativeSketching/pens1.jpg";
import pens2 from "../../Images/ImaginativeSketching/pens2.jpg";
import pens3 from "../../Images/ImaginativeSketching/pens3.jpg";
import pens4 from "../../Images/ImaginativeSketching/pens4.jpg";
import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function University() {
    const scrollRef = useRef(null);
    const scrollAmount = 500;
    const heightThreshold = 800;

    const isLaptop = () => {
        return window.innerHeight > heightThreshold;
    }

    const handleLeftClick = () => {
        scrollRef.current.scrollLeft -= scrollAmount;
    };

    const handleRightClick = () => {
        scrollRef.current.scrollLeft += scrollAmount;
    };

    const MobileImages = () => {
        return (
            <div ref={scrollRef} className="flex flex-row overflow-x-auto gap-3 select-none scroll-smooth">
                <img src={piano} alt="piano" className="w-[600px]" />
                <img src={room} alt="room" className="w-[600px]" />
                <img src={pens1} alt="pens1" className="w-[600px]" />
                <img src={pens2} alt="pens2" className="w-[600px]" />
                <img src={pens3} alt="pens3" className="w-[600px]" />
                <img src={pens4} alt="pens4" className="w-[600px]" />
            </div>
        );
    };

    const LaptopImages = () => {
        return (
            <div className="flex flex-row items-center gap-10">
                <FaArrowLeft className="w-28" onClick={handleLeftClick} />
                <MobileImages />
                <FaArrowRight className="w-28" onClick={handleRightClick} />
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="font-bold text-4xl">Bachelor of Science (Honours), Life Sciences</div>
            <div className="text-xl">National University of Singapore</div>
            <div className="text-xl">2021-2025</div>
            <div className="text-xl">GPA: 4.53/5.0</div>
            <div className="mt-4 font-semibold text-xl">Art of Imaginative Sketching: Distinction</div>
            {
                isLaptop() ? <LaptopImages /> : <MobileImages />
            }

        </div>
    );
};