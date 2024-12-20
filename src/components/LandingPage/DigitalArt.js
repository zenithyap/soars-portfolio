import shooting_star from './Images/DigitalArt/shooting_star.jpg';
import cat_piano from './Images/DigitalArt/cat_piano.jpg';
import sun_moon from './Images/DigitalArt/sun_moon.jpg';
import capybara from './Images/DigitalArt/capybara.jpg';
import sad_fox from './Images/DigitalArt/sad_fox.jpg';
import campfire from './Images/DigitalArt/campfire.jpg';
import butterfly from './Images/DigitalArt/butterfly.jpg';
import souffle from './Images/DigitalArt/souffle.jpg';
import grandma from './Images/DigitalArt/grandma.jpg';


export default function DigitalArt() {
    return (
        <div className="flex flex-col items-center">
            <section id="digital_art" />
            <div className="text-5xl font-semibold">
                Digital Art
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 border-24 border-transparent w-5/6">
                <div className="grid gap-4">
                    <img className="rounded-xl" src={capybara} alt="capybara_image" loading="lazy" />
                    <img className="rounded-xl" src={cat_piano} alt="cat_piano_image" loading="lazy" />
                    <img className="rounded-xl" src={campfire} alt="campfire_image" loading="lazy" />
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={shooting_star} alt="shooting_star_image" loading="lazy" />
                    <img className="rounded-xl" src={grandma} alt="grandma_image" loading="lazy" />
                    <img className="rounded-xl" src={butterfly} alt="butterfly_image" loading="lazy" />
                </div>
                <div className="grid gap-4">
                    <img className="rounded-xl" src={sad_fox} alt="sad_fox_image" loading="lazy" />
                    <img className="rounded-xl" src={sun_moon} alt="sun_moon_image" loading="lazy" />
                    <img className="rounded-xl" src={souffle} alt="souffle_image" loading="lazy" />
                </div>
            </div>
        </div>
    );
};
