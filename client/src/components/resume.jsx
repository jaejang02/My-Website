import React from 'react';
import './style.css';
const MyResume = () => {
    return(
        <div className ='pdf'>
            <iframe
                src={`${process.env.PUBLIC_URL}/myResume.pdf`}
                width ="100%"
                height ="1200px"
                loading = "lazy"
                title ='myResumePDF'
            >
            </iframe>
        </div>
    )
};

export default MyResume;