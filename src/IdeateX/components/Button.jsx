// import React from 'react';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Button() {
 
  return (
    <Link to="/ideatex/register">
    <button className="z-10 bg-gradient-to-r from-[#AE0D61] to-[#530AAC] text-white font-semibold py-4 text-[16px] mt-8 px-12 rounded-lg">
      Register !!
    </button>
  </Link>
)
}

export default Button