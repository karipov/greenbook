import React from 'react';
import Hero from './components/Hero';
import Information from './components/Information'

import Navbar from './components/Navbar';



function clickMe() {
    alert("You clicked me!");
}

function App() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Information/>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <button class="bg-[#243E36] hover:bg-[#243E36] text-[#E0EEC6] font-bold py-2 px-4 rounded-md">
                    Add Item
                </button>
            </a>
        </div>
    );
}

export default App;