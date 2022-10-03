import React from "react"
import { useState } from "react"

export default function SearchFilters(){
    const[open, setOpen] = useState(true)

    return(
     <section className="bg-gray-800 xl:w-72">
        <div className="flex justify-between px-3 py-4 xl:hidden">
            <div className='relative w-full max-w-xs'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg className='w-6 h-6 mt-1 text-gray-600 fill-current' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z" fill="currentColor"/></svg>
                </div>
                <input className="block w-full py-2 pl-10 pr-4 text-white bg-gray-900 rounded-lg sm:w-full focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search by keywords"/>
            </div>
            <button onClick={() => setOpen(!open)} className='inline-flex px-2 pt-2 bg-gray-700 rounded-lg shadow hover:bg-gray-400'>
                <svg className="w-6 h-6 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M32 144h448M112 256h288M208 368h96"/></svg>
                <span className='ml-1 font-medium text-white'>Filters</span>
            </button> 
        </div>
        <form className={(open ? "block xl:h-full xl:flex-col xl:justify-between xl:flex" : "hidden")}>
        <div className="lg:flex xl:block xl:owerflow-y-auto">
            <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full">
                <div className="flex flex-wrap -mx-2">
                    <label className="block w-1/2 px-1 sm:w-1/4 lg:w-1/2">
                        <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                        <select className="block w-full mt-1 leading-snug text-white bg-gray-700 border-transparent rounded-lg shadow form-select focus:bg-gray-600">
                            <option>4</option>
                        </select>
                    </label>
                    <label className="block w-1/2 px-1 sm:w-1/4 lg:w-1/2">
                        <span className="ml-1 text-sm font-semibold text-gray-500 ">Bathrooms</span>
                        <select className="block w-full mt-1 leading-snug text-white bg-gray-700 border-transparent rounded-lg shadow form-select focus:bg-gray-600">
                            <option>2</option>
                        </select>
                    </label>
                    <label className="block w-full mt-4 sm:w-1/2 sm:mt-0 sm:pl-1 lg:w-full lg:mt-4">
                        <span className="text-sm font-semibold text-gray-500">Price Range</span>
                        <select className="block w-full mt-1 leading-snug text-white bg-gray-700 border-transparent rounded-lg shadow form-select focus:bg-gray-600">
                            <option className="">Up to $2,000 /wk</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                <span className="text-sm font-semibold text-gray-500">Property Type</span>
                <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
                <label className="flex items-center mt-3 sm:px-2 sm:w-1/4 lg:w-full lg:px-0">
                    <input className="w-6 h-6 mt-3 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-full form-radio" type="radio" name="propertyType" value="House"/>
                    <span className="mt-2 ml-2 text-white">House</span>
                </label>
                <label className="flex items-center mt-3 sm:px-2 sm:w-1/4 lg:w-full lg:px-0">
                    <input className="w-6 h-6 mt-3 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-full form-radio" type="radio" name="propertyType" value="Apartment"/>
                    <span className="mt-2 ml-2 text-white ">Apartment</span>
                </label>    
                <label className="flex items-center mt-3 sm:px-2 sm:w-1/4 lg:w-full lg:px-0">
                    <input className="w-6 h-6 mt-3 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-full form-radio" type="radio" name="propertyType" value="Loft"/>
                    <span className="mt-2 ml-2 text-white">Loft</span>
                </label>
                <label className="flex items-center mt-3 sm:px-2 sm:w-1/4 lg:w-full lg:px-0">
                    <input className="w-6 h-6 mt-3 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-full form-radio" type="radio" name="propertyType" value="Townhouse"/>
                    <span className="mt-2 ml-2 text-white">Townhouse</span>
                </label>
                </div>
            </div>
            <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full">
                <span className="text-sm font-semibold text-gray-500">Amenities</span>
                <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="balcony" />
                    <span className="ml-2 text-white">Balcony</span>
                </label>
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="parking" />
                    <span className="ml-2 text-white">Parking</span>
                </label>
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="pool" />
                    <span className="ml-2 text-white">Pool</span>
                </label>
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="beach" />
                    <span className="ml-2 text-white">Beach</span>
                </label>
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="pet friendly" />
                    <span className="ml-2 text-white">Pet friendly</span>
                </label>
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="kid friendly" />
                    <span className="ml-2 text-white">Kid friendly</span>
                </label>
                <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-full">
                    <input className="w-6 h-6 leading-snug text-indigo-500 bg-gray-900 border-transparent rounded-lg form-checkbox" type="checkbox" name="air conditioning" />
                    <span className="ml-2 text-white">Air conditioning</span>
                </label>
                </div>
            </div>
            </div> 
            <div className="px-4 py-4 bg-gray-900 sm:text-right">
                <button className="block w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-lg sm:w-auto sm:inline-block hover:bg-indigo-400 xl:block xl:w-full" type="button">Update results</button>
            </div>  
        </form>
      </section>
    )
}