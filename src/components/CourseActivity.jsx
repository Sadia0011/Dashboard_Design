import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', video: 3, practice: 2 },
  { month: 'Feb', video: 4, practice: 3 },
  { month: 'Mar', video: 2, practice: 3 },
  { month: 'Apr', video: 7, practice: 5 },
  { month: 'May', video: 6, practice: 4 },
  { month: 'Jun', video: 8, practice: 6 },
  { month: 'Jul', video: 5, practice: 5 },
  { month: 'Aug', video: 6, practice: 4 },
  { month: 'Sep', video: 4, practice: 1 },
  { month: 'Oct', video: 7, practice: 6 },
  { month: 'Nov', video: 5, practice: 3 },
  { month: 'Dec', video: 6, practice: 4 },
];
const CourseActivity = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-xl shadow-md my-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Course Activity</h2>
          <button className=" dropdown">Monthly </button>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm text-gray-500">Video</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
              <span className="text-sm text-gray-500">Practice</span>
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="video" fill="#5A67D8" barSize={10} />
            <Bar dataKey="practice" fill="#1C3AA9" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
};

export default CourseActivity;