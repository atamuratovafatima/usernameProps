function Username(props){
    let userName = prompt("What's your name?");
    return(
        <div className="name-container">
            <p>Hello {userName}!</p>
        </div>
    )
}



// prompt 2 ret shig'ib tur(
export default Username;