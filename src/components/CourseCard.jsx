import React from 'react';

const CourseCard = ({ title, assignments, videos, progress,btnColor  }) => {
    return (
        <div className=" p-6  space-y-2 shadow-md rounded-xl ">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600">{assignments} Assignment • {videos} Videos</p>
            </div>
            
                <div>
                    <div className="radial-progress text-2xl font-bold text-blue-800" style={{ "--value": 70 }} role="progressbar">{progress}%</div>
                </div>
                
        </div>
        <button className={`${btnColor} text-sm font-bold py-2 px-4 rounded-full w-full`}>
            Continue Course
        </button>
    </div>
    );
};

export default CourseCard;