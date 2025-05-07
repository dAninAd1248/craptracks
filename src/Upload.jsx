import { useState, useRef } from "react"
import Modal from "./Modal/Modal";

import { uploadFile } from "./scripts/scripts";

export default function Upload({}) {
  const [file, setFile] = useState()
  const [showModal, setShowModal] = useState(false)
  const [modalText, setModalText] = useState("Your upload failed, idk why :(")
  const fileInputRef = useRef()
  
  function handleFileChange(e) {
    setFile(e.target.files[0])
  }
  
  function upload() {
    if (file) {
      uploadFile(file).then(() => {
        location.reload()
      }, (reason) => {
        console.error(reason)
        setShowModal(true)
        setModalText(reason.message)
        fileInputRef.current.value = ''
      })
    } else {
      console.error("no file selected");
    }
  }
  
  return (
    <div>
      <p>Upload your worst track here (must be an audio file)</p>
      <input type="file" onChange={handleFileChange} ref={fileInputRef}/>
      <button onClick={upload}>Upload that 💩</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>‼️ ERROR ‼️</h2>
        <p>{modalText}</p>
      </Modal>
    </div>
  )
}