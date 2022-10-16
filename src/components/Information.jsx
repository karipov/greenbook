import React, { useState } from 'react';
import { BACKEND_URL } from "../constants";

const Information = () => {
    const [imgUrl, setImgUrl] = useState("https://res.cloudinary.com/dcgrkuhox/image/upload/v1665894134/photos/1665894134.jpg.jpg");
    const [itemName, setItemName] = useState("No Item!");

    const fetchImage = async () => {
        const data = await fetch(BACKEND_URL + "take-picture")
            .then(response => response.json());

        setImgUrl(data.url);
        setItemName(data.type);
    };


    return (
        <div className='grid grid-cols-2 gap-4'>
            {/* IMAGE PART */}
            <div className='border-2 border-[#243E36]'>
                <img src={imgUrl} alt="icons" />
            </div>

            {/* INFO PART */}
            <div className='text text-[#243E36] font-bold'> 
                <p>Item Detected:</p>

                <div className='my-5 text-6xl font-mono'>{itemName}</div>

                <p>Weight: ???</p> 
                <p>Approx. Cal: ???</p>
                <p>Est. Expiry: ???</p>
                

                <div className="mt-4">
                    <a href="https://www.figma.com/proto/tAiSmkLtWYQqZHEbdwhzzU/GreenBook?node-id=16%3A36&scaling=contain&page-id=0%3A1&starting-point-node-id=8%3A21" target="_blank" rel="noreferrer">
                        <button className="bg-[#243E36] hover:bg-[#243E36] text-[#E0EEC6] font-bold py-2 px-4 rounded-md">
                        Add Item
                        </button>
                    </a>

                    <button className="mx-4 bg-[#243E36] hover:bg-[#243E36] text-[#E0EEC6] font-bold py-2 px-4 rounded-md"
                            onClick={() => fetchImage()}>
                    Refresh
                    </button>

                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <button className="bg-[#243E36] hover:bg-[#243E36] text-[#E0EEC6] font-bold py-2 px-4 rounded-md">
                        Edit Manually
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Information;