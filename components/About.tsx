import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen p-8 bg-white">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-5xl font-bold whitespace-nowrap mb-6">
                    Hello! I am
                    <br />
                    Sumire Doi
                </h1>
                <p className="text-2xl font-light mb-6">
                    I’m a master’s student.
                    <br />
                    I’m currently learning Unity!
                </p>
                {/* ソーシャルアイコン */}
                <div className="flex space-x-6 mt-6 justify-center md:justify-start">
                    <a href="https://github.com/spheal363" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/github.png" alt="GitHub" className="w-10 h-10" />
                    </a>
                    <a href="https://qiita.com/spheal363" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/qiita.png" alt="GitHub" className="w-10 h-10" />
                    </a>
                    <a href="https://x.com/Spheal_363_poke" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/x.png" alt="X (Twitter)" className="w-10 h-10" />
                    </a>
                    <a href="https://atcoder.jp/users/Spheal_363" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/atcoder.png" alt="AtCoder" className="w-10 h-10" />
                    </a>
                    <a href="https://unityroom.com/users/9sgx2wvbhcjd58qt6znk#google_vignette" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/unityroom.png" alt="unityroom" className="w-10 h-10" />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
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
