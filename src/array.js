function Arr(){
    const arr = [
        "svecw",
        "vit",
        "vishnu"
    ]
    return(
        <div>
            <h1>Accessing Array Elements</h1>
            <ul>
            {arr.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
            </ul>
        </div>
    );
    
}
export default Arr;