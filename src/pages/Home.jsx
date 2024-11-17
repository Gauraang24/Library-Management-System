import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button';
import Card from '../components/card';
import { useSelector } from 'react-redux';

const Home = () => {
    const books = useSelector((state) => {
        return state.books
    })

    const navigate = useNavigate()
    const [popularBooks, setPopularBooks] = useState([])

    useEffect(() => {
        const pB = books.filter(i => {
            return i.rating > 4.8
        })

        setPopularBooks(pB)
    }, [])
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

                <div className='flex flex-wrap gap-4 mb-8 mt-14 px-10'>
                    {
                        popularBooks.map(i => {
                            return <div key={i.id} className=' w-[350px]  rounded-xl overflow-hidden mb-4'>
                                <Card
                                    link={`${i?.image}`}
                                    title={i?.title}
                                    desc={i?.description}
                                    onClick={() => {
                                        console.log("CLICKED!!")
                                    }} />
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
