import React from 'react'

function LeftAbout() {
  return (
    <div className="sm:relative  sm:h-full  sm:w-[100%] sm:flex sm:items-center sm:justify-center sm:overflow-hidden hidden">
              <div className="absolute inset-0">
                <div className="absolute top-[10%] left-[20%] w-32 h-32 bg-gradient-to-r from-[#FF4500]/30 to-[#FF4500]/10 rounded-full blur-xl animate-pulse"></div>
                <div
                  className="absolute bottom-[15%] right-[25%] w-40 h-40 bg-gradient-to-l from-[#FF4500]/20 to-[#FF4500]/5 rounded-full blur-xl animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4500]/50 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div
                  className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4500]/30 to-transparent animate-[pulse_5s_ease-in-out_infinite]"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                <div
                  className="absolute top-0 left-[40%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF4500]/40 to-transparent animate-[pulse_6s_ease-in-out_infinite]"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-0 left-[70%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#FF4500]/20 to-transparent animate-[pulse_7s_ease-in-out_infinite]"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4500] to-[#FF4500]/70 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative px-7 py-6 bg-zinc-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      TEDx<span className="text-[#FF4500]">JUET</span>
                    </span>
                  </div>
                </div>

                <div className="max-w-xs text-center relative">
                  <svg
                    className="absolute top-0 left-0 w-8 h-8 text-[#FF4500] -translate-x-6 -translate-y-6"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg italic text-white/80 mb-4">Ideas worth spreading</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full bg-[#FF4500] animate-bounce`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="absolute w-full h-full pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-[#FF4500]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#FF4500]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                </div>
              </div>
            </div>
  )
}

export default LeftAbout