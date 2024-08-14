import React from 'react';
import reminders from "../assets/reminderdta.json"
import { FaBook } from 'react-icons/fa';
const Reminders = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Reminders</h2>
        <button className="btn btn-sm btn-outline">Monthly</button>
      </div>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="py-2">Type</th>
            <th className="py-2">Due</th>
            <th className="py-2">Faculty</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder, index) => (
            <tr key={index} className="border-t">
             <td className="py-2">
  <div className="flex items-center">
    <span className="flex items-center mr-2">
      <FaBook className="text-xl" />
    </span>
    <div className="flex flex-col justify-center">
      <span className="font-semibold">{reminder.type}</span>
      <span className="text-sm text-gray-500">{reminder.course}</span>
    </div>
  </div>
</td>
              <td className="py-2">{reminder.due}</td>
              <td className="py-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={reminder.facultyImage}
                    alt={reminder.faculty}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-blue-500">{reminder.faculty}</span>
                </div>
              </td>
              <td className="py-2">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    reminder.status === 'Done' ? 'bg-blue-600' : 'bg-orange-600'
                  }`}
                >
                  {reminder.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Reminders;