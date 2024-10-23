import Polytechnic from "./Polytechnic";
import University from "./University";

export default function EducationPage() {
    return (
        <div className="flex justify-center pt-24">
            <div className="w-[80%]">
                <University />
                <Polytechnic />
            </div>
        </div>
    );
};