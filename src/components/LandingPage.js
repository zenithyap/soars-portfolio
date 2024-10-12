import '../animations.css';
import BouncingBall from './BouncingBall';
import Kitty from './Kitty';

export default function LandingPage() {
    return (
        <div className="flex flex-col gap-y-9 items-center justify-center min-h-screen transform -translate-y-20">
            <div className="relative flex flex-row text-8xl font-bold select-none">
                Soar Z
                <Kitty/>
            </div>
            <div className="text-lg select-none">
                I psychologised. I life scienced. Now I am
                <span className="glowy font-bold">
                    &nbsp;design.
                </span>
            </div>
            <BouncingBall/>
        </div>
    );
};
