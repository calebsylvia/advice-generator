import React from 'react'

function LineBreak() {
  return (
    <div className='flex mb-6'>
        <hr className="w-1/3 mx-auto" />
        <svg className='flex items-center md:hidden' width="22" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g  fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <svg className='flex items-center max-md:hidden' width="24" height="36" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g  fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <hr className="w-1/3 mx-auto" />
    </div>
  )
}

export default LineBreak;