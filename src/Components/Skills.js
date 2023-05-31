import React from 'react';
import { skills, codingProfile } from '../Constants';
import { useEffect } from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import Lottie from "lottie-react";
import animationData from "../assets/images/tech-animate.json";
// import {CircularProgress} from 'react-native-circular-progress-indicator';


const Skills = () => {
    
    useEffect(() => {
      document.addEventListener('click', () => {
        console.log('Hello');
      })
    }, [])
    
    return (
        <div className='skills'>
            <h1 className='text-center text-4xl'>Technical Skills</h1>
            <div className='container mx-auto mt-20 flex flex-col sm:flex-row'>
                <Lottie animationData={animationData}></Lottie>
                <div className='container mx-auto flex-col w-full border border-solid border-[#ddd] rounded-[12px]' style={{boxShadow:'rgb(221, 221, 221) 0px 0px 27px 1px'}}>
                    {skills.map(skill =>
                        <div className='cotainer mx-auto drop-shadow-md hover:drop-shadow-xl'>
                            <p className='text-center'>{skill.tech}</p>
                            <div className='progress w-full bg-[#ddd] h-2 mt-5 md:mt-10 my-5 md:my-10 rounded-full'>
                                <div className={`bg-blue-600 hover:bg-blue-700 progress-bar w-[${[skill.percentage]}] h-2 rounded`}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='container mx-auto mt-20 coding-profile flex flex-col sm:flex-row text-left gap-9'>
                <h1>Check Coding Profile 👉</h1>
                {
                    codingProfile.map(profile =>
                        <div className='sm:w-1/3 text-center mx-[10px] py-5  sm:mx-auto my-[10px] drop-shadow-md bg-[#16eb75]'>
                            <p className='font-bold text-lg bold'><a href={`${profile.url}`} target="_blank">{profile.platform}</a></p>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Skills;

//${[skill.percentage+'%']}