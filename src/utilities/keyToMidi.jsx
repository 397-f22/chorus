function PlayNote() {
    

    function handleKeyPress(e) {
        var key = e.key;
        console.log( "You pressed a key: " + key );
    }
    
    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} />
        </div>
    )

}

export default PlayNote;