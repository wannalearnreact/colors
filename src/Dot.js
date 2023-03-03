const Dot = ({ color }) => {
    const style = {
        height: 25,
        width: 25,
        backgroundColor: color,
        display: 'inline-block',
    };
    return <span style={style}></span>;
};

export default Dot;
