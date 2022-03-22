import React, { useState } from "react";

const Jumbotron = ({fetchData}) => {
    const [value, setValue] = useState('')
    const handleEnter = (e) => {
      if(e.key === 'Enter'){
          fetchData({params: {
              title: value
          }})
          setValue('');
      }
    }
    const onSearchButtonClick = () =>{
        if(value.length){
            fetchData({params: {
                title: value
            }})
            setValue('');
        }
    }
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center py-20 px-2">
      <h3 className="text-2xl text-white font-semibold">Search APIs</h3>
      <div className="flex items-center mt-6 max-w-md mx-auto bg-white rounded-md">
        <input
          type="text"
          className="w-full px-4 py-2 rorunded-md text-gray-800 focus:outline-none"
          placeholder="Random facts of dogs"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          onKeyDown = {handleEnter}
        />
        <button className="bg-blue-500 w-200 h-12 text-white rounded-r-md flex items-center justify-center p-2" onClick={onSearchButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
