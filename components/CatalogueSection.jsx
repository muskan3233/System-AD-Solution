"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM DESIGN",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "Explore Simple and Stylish Solutions to Transform Your Bedroom into a Comfortable and Elegant Retreat.",
        },
        {
            id: "02",
            catagory: "KITCHING DESIGN",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "Discover Easy and Stylish Ideas to Turn Your Kitchen into a Practical and Beautiful Area.",
        },
        {
            id: "03",
            catagory: "DROWING DESIGN",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "Discover Practical and Stylish Solutions to Create an Inspiring and Efficient Space for All Your Drawing Needs.",
        },
        {
            id: "04",
            catagory: "LIVING DESIGN",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "Explore Practical and Elegant Ideas to Transform Your Living Room into a Comfortable and Stylish Gathering Space.",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}