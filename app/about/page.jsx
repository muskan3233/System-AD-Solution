import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"
export default function About() {
    return (
        <div>
            <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">WHO ARE WE?</h1>

            </div>
            <div className="container ">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">We have great idea & Interior Design</h2>
                    <p className="text-2xl font-medium lg:w-1/2">
                    System Ad Solution provides a range of interior design services for homes, offices, apartments, and other spaces. Our experienced team is committed to delivering customized design solutions that align with your preferences and requirements.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} alt="" className="" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide">
                           At System Ad Solution, based in Indore, Madhya Pradesh, India, we have been transforming spaces with innovative home decoration and interior design solutions since 2000. Our approach integrates modern styles with practical functionality to create beautiful and personalized environments. We blend fresh perspectives with contemporary tools to enhance every room in your home, ensuring that our designs are both stylish and practical.
                            <br />
                            <br />

                            Our team is dedicated to improving the aesthetics and functionality of your living spaces, using advanced techniques and a deep understanding of design principles. By staying ahead of trends and exploring new ideas, we aim to provide solutions that are not only current but also anticipate future needs. We strive to make your home a reflection of your unique style and needs, creating spaces that are both inviting and inspiring.
                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight">We, Elevate Your Living Space with Expert Home Decoration and Interior Design</span>
                        </p>
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">Contact Us<TbArrowUpRight className="text-xl" /> </a>


                    </div>
                </div>
                
            </div>
        </div >
    )
}