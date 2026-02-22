import React from 'react';
import Logo from '../images/whitegoodyman.png';


const Home = () => {

   


    return (
        <div>
            {/* navigation section */}
            <div className="navigation h-[10vh] pt-2 pl-5">
                <img src={Logo} alt="" className='w-50' />
            </div>
            {/* hero Section */}
            <div className="heroSection h-[90vh] relative">

                <div className="heroImage bg-blend-soft-light flex flex-col  md:flex-row justify-center items-center md:gap-20 gap-10">
                    <h1 className='text-white font-bold text-center '><span className='text-[3rem] md:text-[5rem]'>DISCOVER </span>
                        <br />
                        <span className='text-[2rem] md:text-[2.5rem]'>NEW <span className='text-orange-400'>POSSIBILITIES</span></span></h1>
                    <div className=' roundImage h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] border-4 border-white rounded-full scale-x-[-1]'>

                    </div>
                    {/* <img src={ClassImage} alt="" className='transform scaleX(-1)' /> */}
                </div>

            </div>

            {/* video section */}
            <div className="videoSection h-fit  flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10">
                <div className="videoBox bg-white h-70 w-[100%] md:h-90 md:w-[40%]">
                  

                    <iframe
                        className='h-[100%] w-[100%]'
                        src="https://www.youtube.com/embed/tS0hwTnhzY4?si=ngJ8_h0H3Ylzd_cR" 
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        loading='lazy'>

                    </iframe>

                </div>

                
                <div className="videoBox bg-white h-70 w-[100%] md:h-90 md:w-[40%]">
                  

                    <iframe
                        className='h-[100%] w-[100%]'
                        src="https://www.youtube.com/embed/P9PbpYRLFhQ?si=xppzHZRPIqh_miB3" 
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        loading='lazy'>

                    </iframe>

                </div>

                

            </div>
        </div>
    )
}

export default Home
