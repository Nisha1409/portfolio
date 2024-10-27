import React from "react";
const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
                <p className="text-md md:text-md leading-tight mt-3">
                    I am a dedicated developer with a passion for creating efficient, user-friendly 
                    applications. With hands-on experience in JavaScript, React.js, Tailwind CSS,
                     ML Algorithms, Basic C, Java, Pyhton.
                    I specialize in building responsive and scalable solutions. I continuously strive 
                    to stay updated with the latest trends, delivering clean and innovative code to 
                    solve real-world problems.
                </p>
            </div>

        </div>
    );
};

export default About;