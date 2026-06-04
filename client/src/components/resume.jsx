
import './style.css';
const MyResume = () => {
    return(
        <div className ='pdf'>
            <iframe
                src={`${import.meta.env.BASE_URL}Jae_Hong_Jang_Resume.pdf`}
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