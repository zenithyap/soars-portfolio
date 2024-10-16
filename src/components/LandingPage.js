import '../animations.css';
import BouncingBall from './BouncingBall';
import {Kitty, KittyIdle} from './Kitty';
import DigitalArt from './DigitalArt';
import TraditionalArt from './TraditionalArt';
import Photography from './Photography';
import Footer from './Footer';

export default function LandingPage() {
    const winHeight = window.innerHeight;

    return (
        <div>
            <div className={`h-svh w-screen relative`}>
                <div className={`flex flex-col gap-y-9 items-center justify-center h-svh transform -translate-y-10`}>
                    <div className="relative flex flex-row text-8xl font-bold select-none">
                        Soar Z
                        <Kitty />
                    </div>
                    <div className="text-lg select-none">
                        I psychologised. I life scienced. Now I am
                        <span className="glowy font-bold">
                            &nbsp;design.
                        </span>
                    </div>
                </div>
                <BouncingBall />
                <KittyIdle/>
            </div>
            <DigitalArt />
            <TraditionalArt />
            <Photography />
            <Footer />
        </div>
    );
};
