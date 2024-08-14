import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Statistics from '../components/Statistics';
import CourseActivity from '../components/CourseActivity';
import Reminders from '../components/Reminders';

const Main = () => {
    return (
        <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
      <Header></Header>
       <div className='flex gap-5'>
       <Cards></Cards>
        <div className='flex-1 flex-col gap-5 ' >
        <Statistics></Statistics>
        <CourseActivity></CourseActivity>
        <Reminders></Reminders>
        </div>
       </div>
       
      </div>
    </div>
    );
};

export default Main;