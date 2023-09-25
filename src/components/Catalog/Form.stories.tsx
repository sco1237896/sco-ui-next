import React, { useState } from "react";

export default {
    title: "Form/Button"
}


export const basic = () => {
    const [text, setText] = useState("hello");

    function buttonHandler(event) {
        setText("Hola");
        console.log("hello");

    }
    
    return <div><button onClick={buttonHandler}>{text}</button></div>;
}
