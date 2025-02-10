function Button(){
    const handleClick = () => console.log("Button Clicked");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    return(<button onClick= { () => handleClick2("Suraj") }>click me</button>);
}
export default Button