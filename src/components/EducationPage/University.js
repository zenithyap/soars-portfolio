import piano from "./Images/University/ImaginativeSketching/piano.jpg";
import room from "./Images/University/ImaginativeSketching/room.jpg";
import pens1 from "./Images/University/ImaginativeSketching/pens1.jpg";
import pens2 from "./Images/University/ImaginativeSketching/pens2.jpg";
import pens3 from "./Images/University/ImaginativeSketching/pens3.jpg";
import pens4 from "./Images/University/ImaginativeSketching/pens4.jpg";
import flyer1 from "./Images/University/Typography/flyer1.jpg";
import flyer2 from "./Images/University/Typography/flyer2.jpg";
import flyer3 from "./Images/University/Typography/flyer3.jpg";
import flyer4 from "./Images/University/Typography/flyer4.jpg";
import binary from "./Images/University/Typography/binary.jpg";
import disappear from "./Images/University/Typography/disappear.jpg";
import guidelines from "./Images/University/Typography/guidelines.jpg";
import peek from "./Images/University/Typography/peek.png";
import smoke from "./Images/University/Typography/smoke.jpg";
import unique from "./Images/University/Typography/Unique.jpg";
import jk from "./Images/University/Typography/jk.jpg";
import k5 from "./Images/University/Typography/k5.jpg";
import q2 from "./Images/University/Typography/q2.jpg";
import r2 from "./Images/University/Typography/r2.jpg";


import { MobileScrollingImages, LaptopScrollingImages } from "./ScrollingImages";

const imaginativeSketchingArray = [piano, room, pens1, pens2, pens3, pens4];
const typographyArray = [
    flyer1, 
    flyer2, 
    flyer3, 
    flyer4, 
    binary, 
    disappear, 
    guidelines, 
    peek, 
    smoke, 
    unique,
    jk,
    k5,
    q2,
    r2
];

export default function University() {
    const heightThreshold = 800;

    const isLaptop = () => {
        return window.innerHeight > heightThreshold;
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="font-bold text-xl lg:text-4xl">Bachelor of Science (Honours), Life Sciences</div>
            <div className="text-base lg:text-xl font-raleway">National University of Singapore</div>
            <div className="text-base lg:text-xl font-raleway">2021-2025</div>
            <div className="text-base lg:text-xl font-raleway">GPA: 4.53/5.0</div>
            <div className="mt-4 font-semibold text-base lg:text-xl font-raleway">Art of Imaginative Sketching: Distinction</div>
            {
                isLaptop() 
                    ? <LaptopScrollingImages imagesArray={imaginativeSketchingArray} /> 
                    : <MobileScrollingImages imagesArray={imaginativeSketchingArray} />
            }
            <div className="mt-4 font-semibold text-base lg:text-xl font-raleway">Typographic Form and Communication</div>
            {
                isLaptop() 
                    ? <LaptopScrollingImages imagesArray={typographyArray} /> 
                    : <MobileScrollingImages imagesArray={typographyArray} />
            }
        </div>
    );
};