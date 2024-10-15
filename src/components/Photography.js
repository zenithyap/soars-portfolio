import butterfly from "../Images/Photography/butterfly.jpg";
import chicken from "../Images/Photography/chicken.jpg";
import dragonfly from "../Images/Photography/dragonfly.jpg";
import field from "../Images/Photography/field.jpg";
import flower from "../Images/Photography/flower.jpg";
import lizard from "../Images/Photography/lizard.jpg";
import monkey from "../Images/Photography/monkey.jpg";
import otah from "../Images/Photography/otah.jpg";
import spiderweb from "../Images/Photography/spiderweb.jpg";

export default function Photography() {
    return (
        <div>
            <div className="flex flex-col items-center mt-[10%]">
            <section id="digital_art" />
            <div className="text-5xl font-semibold">
                Digital Art
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 border-24 border-transparent w-5/6 items-start">
                <div className="grid gap-4">
                    <img className="rounded-xl" src={butterfly} alt="butterfly_image" />
                    <img className="rounded-xl" src={flower} alt="flower_image" />
                    <img className="rounded-xl" src={chicken} alt="chicken_image" />
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={field} alt="field_image" />
                    <img className="rounded-xl" src={lizard} alt="lizard_image" />
                    <img className="rounded-xl" src={dragonfly} alt="dragonfly_image" />
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={monkey} alt="monkey_image" />
                    <img className="rounded-xl" src={otah} alt="otah_image" />
                    <img className="rounded-xl" src={spiderweb} alt="spiderweb_image" />
                </div>
            </div>
        </div>
        </div>
    );
};
