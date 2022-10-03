import React from "react"
import Link from "next/link"
import useSWR from 'swr'



const fetcher = (...args:any) => fetch(...args).then(res => res.json())
function Property() { 


    const { data, error } = useSWR('/api/property', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    

    console.log("dada", data.properties)
    function getRandomInt(min:any, max:any) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }
    return(
       <div className="xl:grid xl:grid-cols-3 md:grid md:grid-cols-2">
        {data.properties.map((properties:any) =>(
        <Link href={`/property/${(properties.id)}`}>  
        <div className='flex -mt-10 sm:py-6 sm:flex sm:-mx-2 sm:overflow-auto sm:pb-8 xl:mx-12 xl:pt-3'>
          <div className='mt-10 sm:max-w-xs sm:w-full sm:flex-shrink-0' key={properties}>
              <div className='relative sm:px-2 pb-5/6'>
                 <img className="object-cover h-full rounded-lg shadow-md" src={`https://picsum.photos/seed/${(properties.id)}/1000/800`} alt=""/>
               </div>
               <div className='relative px-4 -mt-16'>  
               <div className='px-4 py-4 mb-3 bg-white rounded-lg shadow-lg'>
                 <div className='flex items-baseline'>
                   <span className='inline-block px-2 py-1 text-xs font-semibold leading-none tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full'>Plus</span>
                   <div className='ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase'>
                     {properties.bed} beds &bull; {properties.bath} baths  
                   </div>
                 </div>
                 <h4 className='text-lg font-semibold text-gray-900 '>{properties.property_name}</h4>
                 <div className=''>
                   <span className='text-gray-900'>${properties.price}</span>
                   <span className='ml-1 text-sm text-gray-600'>/wk</span>
                 </div>
                 <div className='flex items-center text-sm text-gray-600'>
                    <svg className={(properties.star>=1 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(properties.star>=2 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(properties.star>=3 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(properties.star>=4 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(properties.star>=5 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <span className='ml-2'>{properties.views} views</span>
                </div>
               </div>
               </div>
             </div>
        </div>
        </Link>
        ))}
        </div>
    )
}
    

export default Property;