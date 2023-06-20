import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <iframe className="h-[700px] w-[700px]" src="https://embed.lottiefiles.com/animation/98488"></iframe>
            <Link to='/'><button className="btn-custom flex justify-center items-center mx-auto">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;