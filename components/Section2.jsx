import React from 'react'
import Image from 'next/image'
import Card from './Card'
import Link from 'next/link'

const Section2 = () => {
    return (
        <div id="services" className='min-h-[100vh] w-[full]  flex flex-col items-center justify-center gap-1 px-10 py-3 bg-white mt-30'>

            <h1 className='text-4xl flex flex-col font-extrabold justify-center text-blue-800 items-center text-center'>Our AI Services</h1>

            <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>


                <Card>
                    <Image src="/images/se0.png" alt="AI Model Development" width={50} height={20} />
                    <h2 className='text-2xl font-extrabold  flex-col'>AI Model Development</h2>
                    <p className='text-gray-600'>Design, train, and deploy custom AI models tailored to specific business needs, ensuring high performance and accuracy.</p>
                    <Link href="#Home" className='text-blue-500 hover:'>Learn More</Link>
                </Card>
                <Card>
                    <Image src="/images/se1.png" alt="AI Consulting" width={50} height={20} />
                    <h2 className='text-2xl font-bold  flex-col'>Machine Learning & Predictive Analytics</h2>
                    <p className='text-gray-600'>Leverage AI-driven forecasting and real-time analytics to enhance decision-making and business strategy.</p>
                    <Link href="#Home" className='text-blue-500 hover:'>Learn More</Link>
                </Card>
                <Card>
                    <Image src="/images/se2.png" alt="AI Consulting" width={50} height={20} />
                    <h2 className='text-2xl font-bold '>Process Automation & Workflow Optimization</h2>
                    <p className='text-gray-600'>Implement intelligent process automation to streamline operations, reduce manual efforts, and increase productivity.</p>
                    <Link href="#Home" className='text-blue-500 hover:'>Learn More</Link>
                </Card>

                <Card>
                    <Image src="/images/se3.png" alt="AI Integration" width={50} height={20} />
                    <h2 className='text-2xl font-extrabold '>Natural Language Processing (NLP) & Conversational AI</h2>
                    <p className='text-gray-600'>Enhance customer engagement with AI-powered chatbots, voice assistants, and automated text processing.</p>
                    <Link href="#Home" className='text-blue-500 hover:'>Learn More</Link>
                </Card>
                <Card>
                    <Image src="/images/se4.png" alt="AI Support" width={50} height={20} />
                    <h2 className='text-2xl font-extrabold '>Computer Vision & Image Processing</h2>
                    <p className='text-gray-600'>Use AI-powered image and video analysis for facial recognition, object detection, and automated tagging.</p>
                    <Link href="#Home" className='text-blue-500 hover:'>Learn More</Link>
                </Card>
                <Card>
                    <Image src="/images/se5.png" alt="AI Training" width={50} height={20} />
                    <h2 className='text-2xl font-extrabold '>AI Training</h2>
                    <p className='text-gray-600'>Provide comprehensive training programs for teams to effectively use and manage AI tools and technologies.</p>
                    <Link href="#Home" className='text-blue-500 hover:'>Learn More</Link>
                </Card>
                <br />
                <div className='flex flex-col text-center'>
                    <p className='flex text-md px-2 py-5  text-center text-gray-800 w-[screen] '>Ready to revolutionize your business with cutting-edge AI?</p>
                    <Link href="#contactus">
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white  px-8 py-2 rounded-full shadow hover:opacity-90 ">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>




    )
}
export default Section2