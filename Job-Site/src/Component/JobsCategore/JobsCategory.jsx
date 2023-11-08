import React from 'react'
import Icon_1 from '../Image/accounts1.png'
import Icon_2 from '../Image/Group13.png'
import Icon_3 from '../Image/social-media1.png'
import Icon_4 from '../Image/chip1.png'
const JobsCategory = () => {

const jobIcon=[
    { 
      id:1,
      img:Icon_1,
      heading:"Account & Finance" ,
      text :"This is most importent job"
    },
    { 
        id:2,
        img:Icon_4,
        heading:"Account & Finance",
        text :"This is most importent job" 
      },
      { 
        id:3,
        img:Icon_3,
        heading:"Account & Finance" ,
        text :"This is most importent job"
      },
      { 
        id:4,
        img:Icon_4,
        heading:"Account & Finance" ,
        text :"This is most importent job"
      }
]

  return (
    <div className='text-center px-[10%]'>
        <div >
            <h1 className='font-medium text-5xl my-5'>Job Category List</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, molestiae architecto. Nemo at officiis nulla . </p>
        </div>
       <div className='grid grid sm:grid-cols-1  md:grid-cols-4 lg:grid-cols-4 gap-4 mt-5 text-left'>
            {
                jobIcon.map(job=> 
                <div key={job.id}
                 className='h-auto bg-gray-100 p-5 grid gap-2  rounded'
                >
                   <span className='p-2 bg-gray-200 w-[50px] grid justify-items-center rounded' >
                      <img  className='w-[30px] h-[30px] ' src={job.img} alt="" /> 
                    </span>  
                    <h1 className='text-2xl font-medium italic '>{job.heading}</h1>
                    <p>{job.text}</p>
                </div> 
                )
            }
       </div>

    </div>
  )
}

export default JobsCategory