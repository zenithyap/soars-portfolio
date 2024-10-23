import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function MobileScrollingImages({ imagesArray }) {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef} className="flex flex-row overflow-x-auto gap-3 select-none scroll-smooth">
            {
                imagesArray.map((item, key) => {
                    return (
                        <img id={`${key}`} src={item} alt={`${item}`} className="w-[600px]" />
                    );
                })
            }
        </div>
    );
};

function LaptopScrollingImages({ imagesArray }) {
    const scrollRef = useRef(null);
    const scrollAmount = 500;

    const handleLeftClick = () => {
        scrollRef.current.scrollLeft -= scrollAmount;
    };

    const handleRightClick = () => {
        scrollRef.current.scrollLeft += scrollAmount;
    };

    return (
        <div className="flex flex-row items-center gap-10">
            <FaArrowLeft className="w-28 hover:cursor-pointer" onClick={handleLeftClick} />
            <div ref={scrollRef} className="flex flex-row overflow-x-auto gap-3 select-none scroll-smooth">
                {
                    imagesArray.map((item, key) => {
                        return (
                            <img id={`${key}`} src={item} alt={`${item}`} className="w-[600px]" />
                        );
                    })
                }
            </div>
            <FaArrowRight className="w-28 hover:cursor-pointer" onClick={handleRightClick} />
        </div>
    );
};

export { MobileScrollingImages, LaptopScrollingImages }
