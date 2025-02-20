
import { useState } from "react";
function Feature(){
    const [isVisible, setVisible] = useState(true);
    const onClick = () => setVisible(!isVisible);
    const Text = () => 
        <div></div>;
    return (
        <>
            <p>Kas un kāpēc ir funkcionālā iezīme?</p>
            <button onClick={onClick}>{isVisible? 'Hide' : 'Show'}</button>
            {isVisible? <Text /> : null}
        </>
    )
}