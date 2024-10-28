import { useRef } from "react";
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardArrowUp,
    MdKeyboardArrowDown,
} from "react-icons/md";

function ScrollingImagesHorizontal({ imagesArray }) {
    const GAP = 12;
    const scrollRef = useRef(null);

    const handleLeftClick = () => {
        const imageWidth = scrollRef.current.firstChild.clientWidth + GAP;
        scrollRef.current.scrollLeft -= imageWidth;
    };

    const handleRightClick = () => {
        const imageWidth = scrollRef.current.firstChild.clientWidth + GAP;
        scrollRef.current.scrollLeft += imageWidth;
    };

    return (
        <div className='relative max-h-[600px]'>
            <MdKeyboardArrowLeft 
                className="size-5 absolute top-[50%] left-0 hover:cursor-pointer" 
                onClick={handleLeftClick} 
            />
            <div ref={scrollRef} className="flex flex-row overflow-x-auto gap-3 select-none scroll-smooth">
                {
                    imagesArray.map((item, key) => {
                        return (
                            <img id={`${key}`} src={item} alt={`${item}`} className="w-[600px]" />
                        );
                    })
                }
            </div>
            <MdKeyboardArrowRight 
                className="size-5 absolute top-[50%] right-0 hover:cursor-pointer" 
                onClick={handleRightClick} 
            />
        </div>
    );
};

function ScrollingImagesVertical({ imagesArray }) {
    const scrollRef = useRef(null);

    const handleUpClick = () => {
        const imageHeight = scrollRef.current.firstChild.clientHeight;
        scrollRef.current.scrollTop -= imageHeight;
    };

    const handleDownClick = () => {
        const imageHeight = scrollRef.current.firstChild.clientHeight;
        scrollRef.current.scrollTop += imageHeight;
    };

    return (
        <div className='relative justify-self-center'>
            <MdKeyboardArrowUp 
                className="size-5 absolute top-0 left-[50%] hover:cursor-pointer" 
                onClick={handleUpClick}
            />
            <div ref={scrollRef}
                className='flex flex-col overflow-y-auto scroll-smooth w-full'
                style={{ aspectRatio: 0.715 }}
            >
                {
                    imagesArray.map((item, key) => {
                        return (
                            <img id={`${key}`} src={item} alt={`${item}`} className='w-full' />
                        );
                    })
                }
            </div>
            <MdKeyboardArrowDown 
                className="size-5 absolute bottom-0 left-[50%] hover:cursor-pointer" 
                onClick={handleDownClick}
            />
        </div>
    );
};

export { ScrollingImagesHorizontal, ScrollingImagesVertical }
