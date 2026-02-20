"use client"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { FaChevronRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function SplideSlider({ slides }) {
    //Guard Clause
    if (!slides) throw new Error ("No slider items found")

    return (
        <Splide
            hasTrack={false}
            options={{
                type: 'loop',
                rewind: true,
                autoplay: true,
                interval: 5000,
                perMove: 1,
                perPage: 1,
                gap: '1rem',
                speed: 1000,
            }}

            aria-label="Kundereferencer"
        >

            <SplideTrack className="h-full max-w-[calc(100vw-40px)]">
                {slides.map(testimonial => {
                    return (
                        <SplideSlide key={testimonial.id} className="flex items-center justify-center">
                            <div className="flex flex-col items-end max-w-125 font-ubuntu bg-dance-drk/75 cust-shape p-6 backdrop-blur-xl">
                                <blockquote className='cust-body-text italic'><FaQuoteLeft className='float-left mr-4 size-8 text-dance-bri' />{testimonial.content}<FaQuoteRight className="float-end m-2 size-8 text-dance-bri" /></blockquote>
                                <address className="text-xl not-italic">{testimonial.name}</address>
                                <small className='opacity-70'>{testimonial.occupation}</small>
                            </div>
                        </SplideSlide>
                    )
                })}
            </SplideTrack>

            {/* Custom slider controls */}
            <div className="splide__arrows absolute w-80 left-1/2 -translate-x-1/2 bottom-4">
                {/* Splide rotates the left button by default so they can use the same icon */}
                <button className="splide__arrow splide__arrow--prev transform-none bottom-0 ring-2 ring-dance-e9 bg-transparent!"><FaChevronRight className="fill-dance-e9! mr-1" /></button>
                <button className="splide__arrow splide__arrow--next transform-none bottom-0 ring-2 ring-dance-e9 bg-transparent!"><FaChevronRight className="fill-dance-e9! ml-1" /></button>
            </div>

            {/* Custom slider progress bard */}
            <div className="splide__progress absolute w-16 left-1/2 -translate-x-1/2 bg-dance-e9/25 bottom-20">
                <div className="splide__progress__bar rounded bg-dance-e9!"></div>
            </div>
        </Splide>

    )
}