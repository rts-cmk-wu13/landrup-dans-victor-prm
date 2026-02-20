/* "use client" */
import LandingSection from '..';
import SplideSlider from './splide-slider';
import HeroBG from "@/app/_assets/img/heroimg.jpg"
import Image from 'next/image';


export default async function LandingTestimonials() {
    const data = await fetch("http://localhost:4000/api/v1/testimonials")
    const testimonials = await data.json();

    return (
        <LandingSection>
            <figure className="grid *:col-start-1 *:row-start-1 my-8">
                <Image
                    src={HeroBG}
                    alt="Landrup Dans Logo"
                    width={1500}
                    height={1000}
                    className="blur-2xl h-120 opacity-75"
                    priority
                />
                <h2 className='font-ubuntu text-2xl font-medium max-w-60 text-center mx-auto mt-8 z-10 h-fit'>Det siger vores kunder om os</h2>
                <SplideSlider slides={testimonials}/>
            </figure>
        </LandingSection>
    )
}