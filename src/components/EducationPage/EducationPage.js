import Polytechnic from "./Polytechnic";
import University from "./University";

export default function EducationPage() {
    return (
        <div className="flex justify-center w-svw pt-24">
            <div className="w-[70%]">
                <University />
                <Polytechnic />
            </div>
        </div>
    );
};