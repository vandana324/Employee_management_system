import React from 'react';

const TaskListNumber = ({data}) => {
    return (
        <div className='flex mt-10 screen justify-between gap-5' >
            <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
                <h2 className='text-2xl font-semibold' >{data.taskCount.active}</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
                <h2 className='text-2xl font-semibold' >{data.taskCount.failed}</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'>
                <h2 className='text-2xl font-semibold' >{data.taskCount.completed}</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            
            

           
            
        </div>
    )
}

export default TaskListNumber;