import '../animations.css';

function Kitty() {
    return (
        <div className='kitty' />
    );
}

function KittyIdle() {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    return (
        <div className="kitty-idly" style={{top: `${winHeight - 216}px`, left: `${winWidth / 2 - 216}px`}}/>
    );
}

export {Kitty, KittyIdle};
