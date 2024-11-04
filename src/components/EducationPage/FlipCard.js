import '../../animations.css';

export default function FlipCard() {
    return (
        <div className='w-[600px] relative group' style={{perspective: '1000px'}}>
            <div className='w-[300px] h-[400px] bg-cyan-500 flip-cardy z-10 relative'/>
            <div className='w-[300px] h-[400px] bg-cyan-950 absolute right-0 top-0 z-0'/>
        </div>
    );
};