import React from 'react';
import { GoBell } from "react-icons/go";

const Header = () => {
    return (
        <div className="grid grid-cols-4 bg-base-100 w-full">
  <div className="col-span-1">
    <a className="btn btn-ghost text-xl">Overview</a>
  </div>
  {/* <div className="col-span-2 gap-2"> */}
    <div className="form-control col-span-2">
      <input type="text" placeholder="Search...." className="input input-bordered md:w-auto rounded-lg bg-gray-100 " />
    </div>
    <div className='col-span-1'>
    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <GoBell className="mr-3 h-6 w-6" />
                        <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>      
                    </a>
   
    </div>
  </div>
// </div>
    );
};

export default Header;