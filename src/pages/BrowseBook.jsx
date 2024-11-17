import React, { useEffect, useState } from "react";
import { menuList } from "../data/browseBook";
import Card from "../components/card";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseBook = () => {
    const [bookList, setBookList] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const books = useSelector((state) => {
        return state.books
    })
    const param = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (param.category === "all") {
            setBookList(books);
        } else {
            const data = books.filter((i) => {
                return i.category === param.category;
            });
            setBookList(data);
        }
    }, [param.category]);


    useEffect(() => {
        if (searchValue === "" && param.category !== "all") {
            const newData = books.filter((i) => {
                return i.category === param.category;
            });
            setBookList(newData)
        } else if (searchValue === "" && param.category === "all") {
            setBookList(books);
        } else {
            const data = bookList.filter(i => {
                return i.title.toLowerCase().includes(searchValue)
            })
            setBookList(data)
        }
    }, [searchValue])
    return (
        <section className="flex">
            {/* left section  */}
            <div className="w-[10%] min-w-[150px] max-w-[200px]">
                <ul className="p-2 ml-5">
                    {menuList.map((i) => {
                        return (
                            <li
                                className={`p-2 cursor-pointer font-medium ${param.category === i?.param ? "bg-[#c7c9ff] rounded-lg" : ""
                                    }`}
                                key={i?.key}
                                onClick={() => {
                                    navigate(`/browse/${i?.param}`);
                                    setSearchValue("")
                                }}
                            >
                                {i?.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* right section  */}
            <div className="flex-1 p-5 ">
                <h2 className="text-2xl font-bold mb-4">Book Collection</h2>

                <div className="border rounded-md w-[400px] p-1 mb-4 flex">
                    <img src="/images/searchIcon.png" alt="" width={30} className="" />
                    <input
                        placeholder="Search for books..."
                        className="focus:outline-none text-sm"
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}
                        value={searchValue}
                    />
                </div>

                <div className="flex flex-wrap gap-4 mb-8 mt-14">
                    {bookList.map((i) => {
                        return (
                            <div
                                key={i.id}
                                className=" w-[350px]  rounded-xl overflow-hidden mb-4"
                            >
                                <Card
                                    link={i?.image}
                                    title={i?.title}
                                    desc={i?.description}
                                    buttonClass={
                                        "!bg-white !text-[#636ae8] border border-[#636ae8]"
                                    }
                                    onClick={() => {
                                        navigate(`/details/${i?.id}`)
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BrowseBook;
