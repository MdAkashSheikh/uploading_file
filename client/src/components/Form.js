import axios from 'axios';
import React, { useState } from 'react';

function Form() {
    const [photo, setPhoto] = useState(null);

    const handleChange = (e) => {
        if(e.target.files) {
            setPhoto(e.target.files[0]);
        }
    }

    const handleUpload = async() => {
        if(photo) {
            console.log('File Uploading...');
        }
        const formData = new FormData();
        formData.append('photo', photo);

        try {
            const res = await axios.post('//localhost:5001/image', formData);
        } catch (err) {
            console.log(err);
        }
     }

    return (
        <>
            <div>
                <input id='file' type='file' onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleUpload}>File Upload</button>
            </div>
        </>
    )
}

export default Form