import React from 'react';
import { TfiStatsUp ,TfiStatsDown} from "react-icons/tfi";

const StatsCards = ({ count, label, icon, changePercentage, isIncrease }) => {
    return (
        <div className="w-[350px] flex items-center justify-between p-4 bg-gray-100 rounded-xl shadow-md mt-6">
        <div >
          <h2 className="stat-value">{count}</h2>
          <p className="stat-title  w-[60px] break-words">{label}</p>
          
        </div>
        <div className="text-2xl flex flex-col items-center">
        <div className="flex justify-center items-center mb-2 text-blue-800">{icon}</div>
          <p className={`text-sm ${isIncrease} flex items-center ml-2`}>
            {changePercentage} {isIncrease ? <TfiStatsUp className="ml-1"/> : <TfiStatsDown className="ml-1"/>}
          </p>
        </div>
      </div>
    );
};

export default StatsCards;