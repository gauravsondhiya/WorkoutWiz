import React from 'react'
import { Button } from "@/components/ui/button"
import logo from "../assets/logo.avif"
import background from "../assets/background.mp4"
const Header = () => {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={background}
                    autoPlay
                    loop
                    muted
                />
                <div className="relative z-10 h-full text-white">
                    <div className=' h-16 m-3 flex justify-between'>
                        <div className=' m-3 text-3xl font-bold flex gap-2'>
                            <h1>Workout.Wiz</h1>
                            <div className='h-9 w-10'>
                                <img src={logo} />
                            </div>
                        </div>
                        <div className=' m-3 text-2xl font-semibold flex gap-8'>
                            <span>BodyPart</span>
                            <span>Equipments</span>
                            <span>Exercises</span>
                            <span></span>
                        </div>
                        <div className=' m-3 flex gap-5'>
                            <Button className="bg-red-700">Login</Button>
                            <Button className="bg-red-700">Signup</Button>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center justify-center mt-[190px]'>
                            <span className='text-7xl font-bold'>We Are Workout.Wiz </span>
                            <span className='text-2xl text-center'> 
                                Your Ultimate Destination for Mastering fitness,
                            Explore expert-crafted routines, Equipment Recommendations and
                            Personalized Workout Plans to transform your fitness Journey.
                            </span>
                        
                            <span className='text-3xl'>Elevate your workout game with <span className='text-5xl font-bold'> Workout.Wiz </span> 
                             Where Every Rep Counts!</span>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Header