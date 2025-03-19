import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen p-8 bg-white">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-5xl font-bold whitespace-nowrap">
                    Hello! I am
                    <br />
                    Sumire Doi
                </h1>
                <p className="text-2xl font-light mt-2">
                    I’m a master’s student.
                    <br />
                    I’m currently learning Unity!
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <Image
                    src="/images/profile.png"
                    alt="Profile Picture"
                    width={800}
                    height={800}
                    className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
                />
            </div>
        </div>
    );
}
