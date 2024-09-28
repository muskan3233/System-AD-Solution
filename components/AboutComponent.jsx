import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                {/* <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">An aesthetic room is <br />given harmony</a> */}
                <p className="tracking-wider text-gray-400">WHY US?</p>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4 ">
                    System Ad Solution specializes in interior design, delivering top-quality designs for your home. Based in Indore, Madhya Pradesh, our expertise has earned the trust of numerous clients across India and beyond. We are dedicated to creating spaces that reflect your unique style and needs. Our team combines creativity with precision to transform your vision into reality, ensuring every detail is perfect. Trust us to make your home a beautifully designed sanctuary.
                    </p>
                
                </div>
            </div>
        </div>
    );
}