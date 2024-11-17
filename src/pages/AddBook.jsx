import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../store/BookSlice";
import { useNavigate } from "react-router-dom";
// import { addBook } from "../redux/BookSlice";

const AddBook = () => {
    const {
        handleSubmit,
        control,
        setValue,
        getValues,
        formState: { errors },
        reset,
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const uniqueId = Date.now();
        const newBook = { ...data, id: uniqueId };
        dispatch(addBook(newBook));
        alert("Book added successfully!");
        navigate(`/browse/${data.category}`)
        reset();
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setValue("image", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-4 max-w-[600px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Add New Book</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block font-medium mb-1">Title</label>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: "Title is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`w-full p-2 border rounded ${errors.title ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter book title"
                                value={getValues("title") || ""}
                                onChange={(e) => setValue("title", e.target.value)}
                            />
                        )}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                    )}
                </div>

                {/* Author */}
                <div>
                    <label className="block font-medium mb-1">Author</label>
                    <Controller
                        name="author"
                        control={control}
                        rules={{ required: "Author is required" }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className={`w-full p-2 border rounded ${errors.author ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter author name"
                                value={getValues("author") || ""}
                                onChange={(e) => setValue("author", e.target.value)}
                            />
                        )}
                    />
                    {errors.author && (
                        <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: "Description is required" }}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                className={`w-full p-2 border rounded ${errors.description ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter book description"
                                value={getValues("description") || ""}
                                onChange={(e) => setValue("description", e.target.value)}
                            />
                        )}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                </div>

                {/* Rating */}
                <div>
                    <label className="block font-medium mb-1">Rating</label>
                    <Controller
                        name="rating"
                        control={control}
                        rules={{
                            required: "Rating is required",
                            min: {
                                value: 1,
                                message: "Rating must be between 1 and 5",
                            },
                            max: {
                                value: 5,
                                message: "Rating must be between 1 and 5",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="number"
                                min="1"
                                max="5"
                                className={`w-full p-2 border rounded ${errors.rating ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter rating (1-5)"
                            />
                        )}
                    />
                    {errors.rating && (
                        <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <Controller
                        name="category"
                        control={control}
                        rules={{ required: "Category is required" }}
                        render={({ field }) => (
                            <select
                                {...field}
                                className={`w-full p-2 border rounded ${errors.category ? "border-red-500" : "border-gray-300"
                                    }`}
                            >
                                <option value="">Select a category</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Biography">Biography</option>
                                <option value="Mystery">Mystery</option>
                            </select>
                        )}
                    />
                    {errors.category && (
                        <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                    )}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block font-medium mb-1">Image</label>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className={`w-full p-2 border rounded ${errors.image ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                        )}
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
