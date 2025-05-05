import { useState } from "react"

import { uploadFile } from "./scripts/scripts";

export default function Upload({}) {
    const [file, setFile] = useState();

    function handleFileChange(e) {
        setFile(e.target.files[0]);
    }

    function upload() {
        if (file) {
            uploadFile(file).then(() => {
                
            }, (reason) => {
                
            })
        } else {
            console.error("no file selected");
        }
    }

    return (
        <div>
            <p>Upload your worst track here</p>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={upload}>Upload that 💩</button>
        </div>
    )
}