import React from 'react';
import bannerimg from '../../assets/image/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div className='bg-accent '>
                <div class="hero lg:h-[70vh] h-screen lg:mt-0 md:mt-16 sm:mt-16 mt-16 relative z-10">
                    <div class="hero-content flex-col lg:flex-row">

                        <div>
                            <p data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                                className='text-xl'> Best Quality</p>
                            <h1 data-aos="fade-right"
                                data-aos-delay="400"
                                data-aos-duration="900"
                                class="text-5xl font-bold">Professional Cleaning Service</h1>
                            <p data-aos="fade-right"
                                data-aos-delay="600"
                                data-aos-duration="800"
                                class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button data-aos="zoom-in"
                                data-aos-delay="1000"
                                data-aos-duration="1300"
                                class="btn btn-primary">Get Started</button>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="900"
                            className=' shrink-0'>
                            <img style={{ width: '100%' }} src={bannerimg} class="max-w-lg " alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='shadow-sm p-5 lg:p-10 md:p-8 relative w-5/6 mx-auto rounded-2xl lg:mt-[-75px] md:mt-[-100px] sm:mt-[-75px] mt-[-70px] bg-base-200 z-20 '>
                <h1 className='text-start text-2xl text-primary mb-2'>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    
                </div>
                <button className='btn btn-primary mt-5'>Request a Quote</button>
            </div>
        </>
    );
};

export default Landing;