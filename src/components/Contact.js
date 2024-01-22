import React from 'react';

const Contact = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl p-4 m-4'>Contact US</h1>
        <form>
          <input type='text' className='m-2 p-2 border border-black' placeholder='name' />
          <input type='text' className='m-2 p-2 border border-black' placeholder='message' />
          <button className='m-2 p-2 border border-black shadow-lg cursor-pointer bg-gray-200 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;