import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textbox(props) {
    
    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const loCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const capCase = () => {
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let str2 = arr.join(" ");
        setText(str2);
        props.showAlert("Converted to Capitalize Case!", "success")
    }
    const senCase = () => {
        function capitalizeSentences(string) {
            var sentences = string.split('. ');
            for (var i = 0; i < sentences.length; i++) {
                var sentence = sentences[i];
                sentence = sentence.trim();
                sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
                sentences[i] = sentence;
            }
            var result = sentences.join('. ');

            return result;
        }
        var capitalizedString = capitalizeSentences(text);
        setText(capitalizedString);
        props.showAlert("Converted to Sentence Case!", "success")
    }
    const altCase = () => {
        let alternateCase = function (s) {
            let chars = s.toLowerCase().split("");
            for (let i = 0; i < chars.length; i += 2) {
                chars[i] = chars[i].toUpperCase();
            }
            return chars.join("");
        };
        setText(alternateCase(text));
        props.showAlert("Converted to Alternate CapitalCase!", "success")
    }
    const extraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed Suceessfully!", "success")
    }
    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text is successfully copied from clipboard!", "success")
    }
    const clear = () => {
        let newText = ""
        setText(newText)
        props.showAlert("All text is cleared successfully!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    
    return (
        <>
            <div className="container my-3">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.head}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='light'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>


            </div>
            <div className="container my-2">
                <button type="button" onClick={upCase} disabled={text.length===0} className={`btn btn-primary mx-2 my-3 ${props.mode}`}>Uppercase</button>
                <button type="button" onClick={loCase} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Lowercase</button>
                <button type="button" onClick={senCase} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Sentence case</button>
                <button type="button" onClick={capCase} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Capitalized Case</button>
                <button type="button" onClick={altCase} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Alternate Case</button>
                <button type="button" onClick={extraSpace} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Remove Extra Spaces</button>
                <button type="button" onClick={copy} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Copy to Clipboard</button>
                <button type="button" onClick={clear} disabled={text.length===0} className="btn btn-primary mx-2 my-3">Clear</button>
            </div>

            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h3>Your Text Summary</h3>
                <p><b>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</b></p>
                <p><b>Reading Time: {0.0032 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes</b></p>
            </div>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h3>Text Preview</h3>
                <p> {text.length>0 ? text : "Nothing to Preview"}</p>
            </div>
        </>


    )
}

Textbox.propTypes = {
    head: PropTypes.string.isRequired
}
Textbox.defaultProps = {
    head: "Enter Your Text Below"
}