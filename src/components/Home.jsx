import React, { useState } from 'react';
import Logo from '../images/whitegoodyman.png';
import { FaBars } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";


const Home = () => {



    // toggle the menu bar
    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };




    return (
        <div className=''>

            {/* -------background Modal Overlay-------- */}
            {isVisible && (
                <div onClick={toggleVisibility} className='bg-gray-800/90  h-[100vh] w-[100%] fixed z-30 top-0 right-0  '>

                </div>
            )}


            {/* -----------main modal overlay------------*/}

            {isVisible &&  (

                <div className='bg-black/95 text-white h-[100vh] w-[70%] fixed z-40 top-0 right-0 flex flex-col items-center'>
                    <div onClick={toggleVisibility} className='bg-green-500  w-[100%] p-5 '>
                        <h1 ><IoMdCloseCircle className='text-[2rem]' /></h1>
                    </div>
                    <div className='text-white  flex  flex-col  w-[100%] '>
                        <button className='text-left w-[100%] p-5 hover:bg-gray-800 cursor-pointer focus:bg-gray-800'>About Us</button>
                        <button className='text-left w-[100%] p-5 hover:bg-gray-800 cursor-pointer focus:bg-gray-800'>Contact </button>
                        <button className='text-left w-[100%] p-5 hover:bg-gray-800 cursor-pointer focus:bg-gray-800'>More Courses</button>
                    </div>

                </div>
            )}




            {/* navigation section */}
            <div className="navigation h-[10vh]  grid grid-cols-2 justify-between items-center  ">
                <div className='flex items-center pl-5 md:pl-10'>
                    <img src={Logo} alt="" className='w-30 md:w-45' />
                </div>

                {/* menu section */}
                <div className='flex justify-end pe-10 md:justify-center items-center '>
                    <ul className='text-white  justify-center items-center gap-10 hidden md:flex'>
                        <li className='hover:text-yellow-500 cursor-pointer hover:border-b-1'>About Us</li>
                        <li className='hover:text-yellow-500 cursor-pointer hover:border-b-1'>Contact </li>
                        <li className='hover:text-yellow-500 cursor-pointer hover:border-b-1'>More Courses</li>
                    </ul>

                    {/* FaBars */}
                    <FaBars onClick={toggleVisibility} className='text-white text-[1.5rem] cursor-pointer hover:text-yellow-500 flex md:hidden' />
                </div>


            </div>






            {/* hero Section */}
            <div className="heroSection h-[90vh] relative">

                <div className="heroImage bg-blend-soft-light flex flex-col  md:flex-row justify-center items-center md:gap-20 gap-10">
                    <h1 className='text-white font-bold text-center '><span className='text-[3rem] md:text-[5rem]'>DISCOVER </span>
                        <br />
                        <span className='text-[2rem] md:text-[2.5rem]'>NEW <span className='text-orange-400'>POSSIBILITIES</span></span></h1>
                    <div className=' roundImage h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] border-4 border-white rounded-full scale-x-[-1]'>

                    </div>
                </div>

            </div>

            {/*-----------video section--------------- */}
            <div className="videoSection ">

                {/*--------------video set ---------------  */}

                <div className="videoCommunity h-fit  flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10">
                    <div className="videoBox bg-white h-70 w-[100%] md:h-90 md:w-[40%]">


                        <iframe
                            className='h-[100%] w-[100%]'
                            src="https://www.youtube.com/embed/Yy2Rb-7NVow?si=yIFhesOacqwr8bUm"
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
                            src="https://www.youtube.com/embed/tS0hwTnhzY4?si=5QFx53jYqFGdelak"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            loading='lazy'>

                        </iframe>

                    </div>

                </div>

                {/*--------------another set ---------------  */}
                <div className="videoCommunity h-fit  flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10">
                    <div className="videoBox bg-white h-70 w-[100%] md:h-90 md:w-[40%]">


                        <iframe
                            className='h-[100%] w-[100%]'
                            src="https://www.youtube.com/embed/P9PbpYRLFhQ?si=mM5rcTMwvYmbQcEL"
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
                            src="https://www.youtube.com/embed/uUDF0V540yU?si=KV4oAlFHHvM8GHMB"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            loading='lazy'>

                        </iframe>

                    </div>

                </div>


                {/*--------------another set ---------------  */}
                <div className="videoCommunity h-fit  flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10">
                    <div className="videoBox bg-white h-70 w-[100%] md:h-90 md:w-[40%]">


                        <iframe
                            className='h-[100%] w-[100%]'
                            src="https://www.youtube.com/embed/0iIlVI8utSM?si=YszKXLMJ30G0a_f9"
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
                            src="https://www.youtube.com/embed/t2KME5jowVo?si=i3VClC0KuRrGtA-6"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            loading='lazy'>

                        </iframe>

                    </div>

                </div>


                {/*--------------another set ---------------  */}
                <div className="videoCommunity h-fit  flex flex-col md:flex-row justify-center items-center p-5 md:p-10 gap-10">
                    <div className="videoBox bg-white h-70 w-[100%] md:h-90 md:w-[40%]">


                        <iframe
                            className='h-[100%] w-[100%]'
                            src="https://www.youtube.com/embed/mXOMxM7AOEU?si=covGpGovjvksSEK5"
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
                            src="https://www.youtube.com/embed/IBe5FlOdXtU?si=_kKffy6BwLfDFnl6"
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
        </div>
    )
}

export default Home
