import Image1 from '../Images/DigitalArt/Image1.jpg';
import Image2 from '../Images/DigitalArt/Image2.jpg';
import Image3 from '../Images/DigitalArt/Image3.jpg';
import Image4 from '../Images/DigitalArt/Image4.jpg';
import Image5 from '../Images/DigitalArt/Image5.jpg';
import Image6 from '../Images/DigitalArt/Image6.jpg';
import Image7 from '../Images/DigitalArt/Image7.jpg';
import Image8 from '../Images/DigitalArt/Image8.jpg';
import Image9 from '../Images/DigitalArt/Image9.jpg';

export default function DigitalArt() {
    return (
        <div className="flex flex-col items-center h-screen">
            <div className="text-5xl font-semibold">
                Digital Art
            </div>
            <div className="grid grid-cols-3 gap-8 border-24 border-transparent w-5/6">
                <div className="grid gap-4">
                    <img className="rounded-xl" src={Image4}/>
                    <img className="rounded-xl" src={Image2}/>
                    <img className="rounded-xl" src={Image6}/>
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={Image1}/>
                    <img className="rounded-xl" src={Image9}/>
                    <img className="rounded-xl" src={Image7}/>
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={Image5}/>
                    <img className="rounded-xl" src={Image3}/>
                    <img className="rounded-xl" src={Image8}/>
                </div>
            </div>
        </div>
    );
};
