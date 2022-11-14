function PlayNote() {
    function handleKeyPress() {
        console.log( "You pressed a key." )
    }
    
    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
        </div>
    )
}