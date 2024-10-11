import '../animations.css';
import BouncingBall from './BouncingBall';

export default function LandingPage() {
    return (
        <div className="flex flex-col gap-y-9 items-center justify-center min-h-screen transform -translate-y-20">
            <span className="flex flex-row text-8xl font-bold">
                Soar Z
            </span>
            <div className="text-lg">
                I psychologised. I life scienced. Now I am 
                <span className="glowy font-bold">
                    &nbsp;design.
                </span>
            </div>
            <BouncingBall/>
        </div>
    );
};
