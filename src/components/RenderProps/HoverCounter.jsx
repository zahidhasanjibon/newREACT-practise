function HoverCounter({ count, handleCounter, theme, themeChanger }) {
    const style = theme === 'dark' ? { backgroundColor: 'red', color: 'white' } : null;

    return (
        <div>
            <h1 style={style} onMouseOver={handleCounter}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={themeChanger}>
                change theme
            </button>
        </div>
    );
}

export default HoverCounter;
