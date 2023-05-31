import React from 'react';
import { form } from '../Constants.js';


const Contact = () => {
    return (
        <div className='contact mt-20'>
            <h1 className='text-center text-4xl font-[poppins]'>Let's Connect 😁</h1>
            
            
            <div className='cotainer mx-auto w-fit sm:w-1/2  my-20 border border-solid border-[#ddd] rounded-xl'>
                <form className='form w-1/2 mx-auto my-10 sm:my-20'>
                    {form.map(attr => 
                        <div className='mt-10'>
                            <label for={attr.label} className='font-[poppins]'>{attr.label} </label>
                            <input 
                                type={attr.type} 
                                placeholder={attr.label}
                                className="block font-[poppins] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    )}
                    <div className='mt-10'>
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's Connect
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact