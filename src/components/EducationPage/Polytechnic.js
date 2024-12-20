import page1 from "./Images/Polytechnic/VisualCommunication/page1.jpg";
import page2 from "./Images/Polytechnic/VisualCommunication/page2.jpg";

export default function Polytechnic() {
    return (
        <div className="flex flex-col gap-3 mt-[calc(5%+50px)]">
            <div className="font-bold text-xl lg:text-4xl">Diploma in Psychology Studies</div>
            <div className="text-base lg:text-xl font-raleway">Ngee Ann polytechnic</div>
            <div className="text-base lg:text-xl font-raleway">2018-2021</div>
            <div className="text-base lg:text-xl font-raleway">GPA: 3.82/4.0</div>
            <div className="mt-4 font-semibold text-base lg:text-xl font-raleway">Visual Communications module: Distinction</div>
            <div className="flex flex-col lg:flex-row gap-3">
                <div>
                    <img src={page1} alt="page1alt" loading="lazy" />
                </div>
                <div>
                    <img src={page2} alt="page2alt" loading="lazy" />
                </div>
            </div>
        </div>
    );
};