import React, { useState, useEffect } from 'react'
import { CalendarIcon, User, Volume2, ChevronLeft, ChevronRight } from 'lucide-react'

function RightAbout() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const groups = [
        [
            {
                icon: <CalendarIcon className="w-12 h-12 text-[#FF4500] mb-3" />,
                title: "ATTEND EVENT",
                subtitle: "Join us on May 15th, 2025",
            },
            {
                icon: <User className="w-12 h-12 text-[#FF4500] mb-3" />,
                title: "ABOUT US",
                subtitle: "Learn about our mission",
            },
            {
                icon: <Volume2 className="w-12 h-12 text-[#FF4500] mb-3" />,
                title: "BECOME A SPEAKER",
                subtitle: "Share your ideas",
            },
        ],
        [
            {
                icon: <CalendarIcon className="w-12 h-12 text-[#FF4500] mb-3" />,
                title: "ATTEND EVENT",
                subtitle: "Join us on May 15th, 2025",
            },
            {
                icon: <User className="w-12 h-12 text-[#FF4500] mb-3" />,
                title: "ABOUT US",
                subtitle: "Learn about our mission",
            },
            {
                icon: <Volume2 className="w-12 h-12 text-[#FF4500] mb-3" />,
                title: "BECOME A SPEAKER",
                subtitle: "Share your ideas",
            },
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                    TEDx<span className="font-normal">JUET</span> 2025 <span className="text-[#FF4500]">will witness</span>
                </h2>
                <p className="text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
                    IDEAS WITH THE POTENTIAL TO
                    <br />
                    <span className="text-[#FF4500]">CHANGE THE WORLD</span> WE LIVE IN!
                </p>
            </div>

            <div className="relative pt-4 pb-24">
                <div className="w-full overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {groups.map((group, i) => (
                            <div key={i} className="w-full flex-shrink-0">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {group.map((item, j) => (
                                        <div
                                            key={j}
                                            className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer h-40"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                                            <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <span className="text-base md:text-lg text-center mt-2 font-bold group-hover:text-[#FF4500] transition-colors duration-300">
                                                {item.title}
                                            </span>
                                            <p className="text-xs text-zinc-400 mt-1 text-center">{item.subtitle}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2">
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