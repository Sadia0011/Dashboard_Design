import React from 'react';
import CourseCard from './CourseCard';

const Cards = () => {
    return (
        <div className="w-96 h-screen  grid grid-cols-1 gap-1 mt-6">
       <div className="bg-gradient-to-r from-blue-400 to-blue-200 rounded-2xl">
        <CourseCard btnColor="bg-white text-black"  assignments={4} videos={20} title="Foundations of User Experience (UX) Design" progress={75} />
       </div>
        <CourseCard btnColor="bg-gradient-to-r from-blue-400 to-blue-200 text-white" assignments={4} videos={20} title="Start the UX Design Process: Empathize, Define, and Ideate" progress={50} />
        <CourseCard btnColor="bg-gradient-to-r from-blue-400 to-blue-200 text-white" assignments={4} videos={20} title="Build Wireframes and Low-Fidelity Prototypes" progress={90} />
        <CourseCard btnColor="bg-gradient-to-r from-blue-400 to-blue-200 text-white" assignments={4} videos={20} title="Build Wireframes and Low-Fidelity Prototypes" progress={90} />
      </div>
    );
};

export default Cards;