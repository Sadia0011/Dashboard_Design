import React from 'react';
import { FaHome, FaBook, FaGraduationCap, FaMoneyBill, FaChartLine, FaChartBar, FaCog } from 'react-icons/fa';
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiSun } from "react-icons/fi";
const Sidebar = () => {
    return (
        <div className="w-64  bg-gray-100 flex flex-col justify-between p-5">

            <div>
                <div className="flex items-center ">
                    <div className=" p-2 rounded">
                        <FiSun className="text-purple-600 h-6 w-6" />
                    </div>
                    <span className="ml-3 text-xl font-bold  uppercase"><span className='text-purple-600'>On</span>Course</span>
                </div>
                <nav className="space-y-1 text-sm mt-5">
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaHome className="mr-3 h-6 w-6" />
                        Overview
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaBook className="mr-3 h-6 w-6" />
                        My Course
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaGraduationCap className="mr-3 h-6 w-6" />
                        Completed
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaMoneyBill className="mr-3 h-6 w-6" />
                        Financial Aid
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaChartLine className="mr-3 h-6 w-6" />
                        Transactions
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaChartBar className="mr-3 h-6 w-6" />
                        Reports
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                        <FaChartBar className="mr-3 h-6 w-6" />
                        Statistics
                    </a>
                </nav>
            </div>
            <div className="space-y-1 text-sm">
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                    <MdOutlineSupportAgent className="mr-3 h-6 w-6" />
                    Support
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded">
                    <FaCog className="mr-3 h-6 w-6" />
                    Settings
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
