import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button';
import { popularBooks } from '../data/homepage';

const Home = () => {
    const navigate = useNavigate()
    return (
        <section className=''>
            {/* //Banner */}
            <div className='w-screen h-auto relative bg-black'>

                <img src="/images/homeBannerBg.jpg" alt="banner" className='w-screen h-auto  opacity-50' />


                <div className='absolute top-1/2 text-white flex flex-col items-start mx-8 gap-2'>
                    <p className='text-4xl  font-bold'>Welcome to Our Book Store</p>
                    <p className='text-[#d4cfcf] text-xl  font-medium '>Discover a world of stories and knowlwdge to inspire your mind.</p>

                    <Button title={"Browse"} onClick={() => {
                        navigate("/browse")
                    }} />
                </div>
            </div>

            {/* Explore by book categories section  */}
            <div>
                <p className='header-mid'>
                    Explore us by book categories
                </p>

                <div className=''>
                    <ul className='flex justify-center gap-4 '>
                        <li className=' px-4 py-1 rounded-md bg-[#636ae8] text-white font-medium'>Fiction</li>
                        <li className=' px-4 py-1 rounded-md bg-[#e8618c] text-white font-medium'>Non-Fiction</li>
                        <li className=' px-4 py-1 rounded-md bg-[#22ccb2] text-white font-medium'>Sci-Fi</li>
                        <li className=' px-4 py-1 rounded-md bg-[#7F55E0] text-white font-medium'>Romance</li>
                        <li className=' px-4 py-1 rounded-md bg-[#EA916E] text-white font-medium'>Anime</li>
                    </ul>
                </div>
            </div>

            {/* Most POpular books section  */}

            <div>
                <p className='header-mid'>Out Most Popular Books Now</p>

                <div className='flex flex-wrap justify-evenly mb-8'>
                    {
                        popularBooks.map(i => {
                            return <div key={i.key} className=' w-[350px] border border-gray-400 rounded-xl overflow-hidden'>
                                <div className=' w-full aspect-[9/12]  '>

                                    <img src={`/images/${i?.imglink}`} alt="Book Image" className='w-full h-full' />
                                </div>
                                <div className='p-4'>
                                    <p className='text-xl font-medium'>{i?.title}</p>
                                    <p className='text-lg font-normal h-14'>{i?.desc.slice(0, 60)}...</p>
                                    <div className='mt-4'>

                                        <Button className={'w-full'} title={"View Detail"} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <div>

            </div>
        </section>
    )
}

export default Home
