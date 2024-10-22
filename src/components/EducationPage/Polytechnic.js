import page1 from "../../Images/VisualCommunication/page1.jpg";
import page2 from "../../Images/VisualCommunication/page2.jpg";

export default function Polytechnic() {
    return (
        <div className="flex flex-col gap-3 mt-[10%]">
            <div className="font-bold text-4xl">Diploma in Psychology Studies</div>
            <div className="text-xl">Ngee Ann polytechnic</div>
            <div className="text-xl">2018-2021</div>
            <div className="text-xl">GPA: 3.82/4.0</div>
            <div className="mt-4 font-semibold text-xl">Visual Communications module: Distinction</div>
            <div className="flex flex-col lg:flex-row gap-3">
                <div>
                    <img src={page1} alt="page1alt" />
                </div>
                <div>
                    <img src={page2} alt="page2alt" />
                </div>
            </div>
        </div>
    );
};