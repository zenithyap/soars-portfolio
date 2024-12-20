import couple from "./Images/TraditionalArt/couple.jpg";
import deer from "./Images/TraditionalArt/deer.jpg";
import dog from "./Images/TraditionalArt/dog.jpg";
import flower from "./Images/TraditionalArt/flower.jpg";
import fox from "./Images/TraditionalArt/fox.jpg";
import mural from "./Images/TraditionalArt/mural.jpg";
import otah from "./Images/TraditionalArt/otah.jpg";
import toothless from "./Images/TraditionalArt/toothless.jpg";
import abstract from "./Images/TraditionalArt/abstract.jpg";
import flowerfield from "./Images/TraditionalArt/flowerfield.jpg";
import forest from "./Images/TraditionalArt/forest.jpg";
import nini from "./Images/TraditionalArt/nini.jpg";

export default function TraditionalArt() {
    return (
        <div className="flex flex-col items-center mt-[10%]">
            <section id="traditional_art"/>
            <div className="text-5xl font-semibold">
                Traditional Art
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-start gap-4 border-24 border-transparent w-5/6">
                <div className="grid gap-4">
                    <img className="rounded-xl" src={mural} alt="mural_image" loading="lazy" />
                    <img className="rounded-xl" src={dog} alt="dog_image" loading="lazy" />
                    <img className="rounded-xl" src={toothless} alt="toothless_image" loading="lazy" />
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={fox} alt="fox_image" loading="lazy" />
                    <img className="rounded-xl" src={forest} alt="forest_image" loading="lazy" />
                    <img className="rounded-xl" src={deer} alt="deer_image" loading="lazy" />
                    <img className="rounded-xl" src={flowerfield} alt="flowerfield_image" loading="lazy" />
                    <img className="rounded-xl" src={nini} alt="nini_image" loading="lazy" />
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={couple} alt="couple_image" loading="lazy" />
                    <img className="rounded-xl" src={otah} alt="otah_image" loading="lazy" />
                    <img className="rounded-xl" src={abstract} alt="abstract_image" loading="lazy" />
                    <img className="rounded-xl" src={flower} alt="flower_image" loading="lazy" />
                </div>
            </div>
        </div>
    );
};
