'use client'
import {motion} from 'framer-motion';
import { useState ,useEffect} from 'react';
import { usePathname } from 'next/navigation';
export default function WhatsAppIcon(){
    const [show, setShow] = useState(false)
    const path = usePathname()
    useEffect(() => {
        setShow(path !== '/scholarship')
    },[path]) 
    return <>
    {show?<motion.a
        href='/scholarship'
        className="fixed flex text-white text-center justify-center items-center tooltip tooltip-open tooltip-left radial-gradient-1 drop-shadow-lg drop w-14 h-14 z-20 right-10 bottom-28 p-2 bg-bl rounded-full"
        data-tip="Get 100% Scholarship"
        initial={{ "--x": "100%", scale: 1 }as any}
        animate={{ "--x": "-100%" } as any}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.75,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
            },
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
        <span className="block absolute inset-0 p-[2px] linear-overlay rounded-full" />
    </motion.a>:<></>}
    <motion.a aria-label="Chat on WhatsApp" href="https://wa.me/919049079674?text=Hi!%20I want%20to%20learn%20more%20about%20your%20classes.%20Can%20you%20tell%20me%20what%20subjects%20you%20teach%20and%20when%20the%20classes%20are?%20Thanks!" target='_blank' 
        className="fixed radial-gradient drop-shadow-lg drop tooltip tooltip-left tooltip-open w-14 h-14 z-20 right-10 bottom-10 p-3 bg-[#2CB742] rounded-full" data-tip="Hi"
        initial={{ "--x": "100%", scale: 1 }as any}
        animate={{ "--x": "-100%" } as any}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.75,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
            },
        }}
    >

        <svg className='linear-mask block relative' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" version="1.1" id="Layer_1" viewBox="0 0 308 308" xmlSpace="preserve">
            <g id="XMLID_468_">
                <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"/>
            </g>
        </svg>
        <span className="block absolute inset-0 p-[2px] linear-overlay rounded-full" />
    </motion.a>
    </>

}