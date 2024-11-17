import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/button'

const BookDetail = () => {
    const param = useParams()
    const navigate = useNavigate()
    const books = useSelector((state) => {
        return state.books
    })

    const [bookInfo, setBookInfo] = useState({})
    console.log("bookInfo ::", bookInfo)

    useEffect(() => {
        console.log(param)
        console.log(books)
        const currentBook = books.find(i => i.id == param.id)
        setBookInfo(currentBook)
    }, [])
    return (
        <div>



            <div className=' flex justify-center mt-10'>
                {/* THIS IS BOOK Detail page of id {param?.id} */}

                <div className=' aspect-[9/12] w-[300px]'>
                    <img src={bookInfo?.image} alt="" className='aspect-[9/12] border-2' width={300} />
                </div>

                <div className='p-4 w-[550px]'>
                    <p className='text-3xl font-bold pb-4'>{bookInfo?.title}</p>
                    <p className='text-xl font-base pb-4'>by {bookInfo?.author}</p>
                    <p className='text-xl font-base pb-4'>Rating: {bookInfo?.rating}</p>
                    <p className='text-xl font-base pb-4'>{bookInfo?.description}</p>

                    <Button title={"Back to Browse"} onClick={() => {
                        navigate(-1)
                    }} />
                </div>
            </div>

        </div>
    )
}

export default BookDetail
