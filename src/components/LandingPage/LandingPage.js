import '../../animations.css';
import KittyOnName from './KittyOnName';
import KittyBall from './KittyBall/KittyBall';
import DigitalArt from './DigitalArt';
import TraditionalArt from './TraditionalArt';
import Photography from './Photography';

export default function LandingPage() {
    return (
        <div>
            <div className="h-svh w-svh relative">
                <div className={`flex flex-col gap-y-9 items-center justify-center h-svh transform -translate-y-10`}>
                    <div className="relative flex flex-row text-8xl font-bold select-none">
                        Soar Z
                        <KittyOnName />
                    </div>
                    <div className="text-base select-none">
                        I psychologised. I life scienced. Now I am
                        <span className="glowy font-bold">
                            &nbsp;design.
                        </span>
                    </div>
                </div>
                <KittyBall />
            </div>
            <DigitalArt />
            <TraditionalArt />
            <Photography />
        </div>
    );
};
