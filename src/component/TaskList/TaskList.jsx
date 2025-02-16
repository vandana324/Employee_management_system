import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className="h-[55%]  overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap bg-500 mt-10 p-5 overflow-x-auto">
      
     {/* <AcceptTask />
     <NewTask />

     <CompleteTask />
     <FailedTask /> */}

     {data.tasks.map((e,idx)=>{
      if(e.active){
        return <AcceptTask key={idx} data={e} />
      }

      if(e.Completed){
        return <CompleteTask key={idx} data={e} />
      }

      if(e.failed){
        return <FailedTask key={idx} data={e}   />
      }
        
      // if(e.newTask){
      //   return <NewTask key={idx} data={data} />
      // }

     })}

      
    
    </div>
  );
};

export default TaskList;
