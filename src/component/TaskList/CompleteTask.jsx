import React from 'react';
 
const CompleteTask =() =>{
    return (
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
             <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-3'>
                    {data.taskDescription}</p> 

              <div className='mt-2'>
                <button className='w-full bg-green-500 py-2 rounded-lg font-bold'>Complete</button>
                </div>  

      </div>

    )
}

export default CompleteTask