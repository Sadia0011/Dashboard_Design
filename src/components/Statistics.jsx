import React from 'react';
import { FaBookOpen, FaGraduationCap } from 'react-icons/fa';
import StatsCards from './StatsCards';

const Statistics = () => {
    return (
        <div className="flex justify-evenly gap-5">
        <StatsCards 
          count="04" 
          label="Completed Course" 
          icon={<FaGraduationCap />} 
          changePercentage="20% Increase" 
          isIncrease={true} 
        />
        <StatsCards 
          count="12" 
          label="Course in Progress" 
          icon={<FaBookOpen />} 
          changePercentage="1% Decrease " 
          isIncrease={false} 
        />
      </div>
    );
};

export default Statistics;