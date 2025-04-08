import React, { useState, useEffect } from 'react'
import { CalendarIcon, User, Volume2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation';

function RightAbout() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();
    const groups = [
        [
            {
                icon: <CalendarIcon className="w-[200px] h-[200px] text-[#FF4500]  mb-3" />,
                title: "ATTEND EVENT",
                subtitle: "Join us on May 3rd, 2025",
                half: false
            },
           
        ],
        [
            {
                icon: <User className="w-[200px] h-[200px] text-[#FF4500] mb-3" />,
                title: "ABOUT US",
                subtitle: "Learn about our mission",
                half: false
            },
          
        ],
        [
            {
                icon: <Volume2 className="w-[200px] h-[200px] text-[#FF4500] mb-3" />,
                title: "BECOME A SPEAKER",
                subtitle: "Share your ideas",
                half: false
            }
        ],
       
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === groups.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center p-8 z-10 relative text-white">
            <div className="mt-18 transform transition-all duration-500">
                <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-tight break-words text-wrap">
                    TEDx<span className="font-normal">JUET</span> 2025 <span className="text-[#FF4500]">will witness</span>
                </h2>
                <p className="text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
                    IDEAS WITH THE POTENTIAL TO
                    <br />
                    <span className="text-[#FF4500]">CHANGE THE WORLD</span> WE LIVE IN!
                </p>
            </div>

            <div className="relative pt-4 pb-24">
                <div className="w-[60%]  overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 60}%)` }}
                    >
                        {groups.map((group, i) => (
                            <div key={i} className="w-[60%] flex-shrink-0 ">
                                <div className="grid grid-cols-0 md:grid-cols-0  gap-6 ">
                                    {group.map((item, j) => (
                                 
                                    <div
                                    key={j}
                                    onClick={()=>{
                                        if(item.title === "ABOUT US"){
                                            router.push('/About')
                                        }
                                    }}
                                    className={item.half === false?"bg-zinc-900 rounded-lg p-6 flex flex-col w-[250px] sm:w-[300px] items-center justify-center relative overflow-hidden group hover:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer sm:h-90 h-80":"bg-zinc-900  rounded-bl-lg rounded-tl-lg p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer h-90 w-[50%]"}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                                    <div className="absolute left-[-40px] top-[20px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-base md:text-lg text-center absolute bottom-10 font-bold group-hover:text-[#FF4500] transition-colors duration-300">
                                        {item.title}
                                    </span>
                                    <p className="text-xs text-zinc-400 mt-1 text-center absolute bottom-5">{item.subtitle}</p>
                                </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-11 left-3 flex justify-center gap-2">
                    {groups.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentSlide === index ? "bg-[#FF4500] w-4" : "bg-gray-500"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightAbout