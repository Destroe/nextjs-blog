

import Properties from 'server'
import useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Test2(){
    const { data, error } = useSWR('/api/property', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log("ddddddddddddddddddddddddddddd", data)
    console.log("sssssssssssssssssssssssssssss", data.properties)
 {/* {property.star > 1 ? <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg> : <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg>} */}

    return (
    // <div >
    //     {data.properties.map((property) =>(
    //         <div>
    //             name: {property.property_name} price: {property.price} {property.description}
    //             {property.year_build} {property.owner_user_id} {property.customer_user_id} 
    //             {property.status_properties}
    //         </div>
    //     ))}
    // </div>
    // <div className='w-10 -mt-10 sm:flex sm:-mx-2 sm:pb-8'>
    //     {data.properties.map((property) =>(
    //         <div className='mt-10 sm:max-w-xs sm:w-full sm:flex-shrink-0'>
    //           <div className='relative sm:px-2 pb-5/6'>
    //             <img className="object-cover h-full shadow-md roubded-lg" alt="not found"/>
    //           </div>
    //           <div className='relative px-4 -mt-12'>  
    //           <div className='px-4 py-4 bg-white rounded-lg shadow-lg'>
    //             <div className='flex'>
    //               <span className='inline-block px-2 py-1 text-xs font-medium leading-none tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full'>Plus</span>
    //               <div className='ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase '>
    //                 {/* {props.beds}{props.beds === 1 ? "bed" : "beds " } &bull; {props.baths} {props.baths === 1 ? "bath" : "baths " }  */}

    //               </div>
    //             </div>
    //             <h4 className='mt-1 text-lg text-gray-900 text-semibold'>{property.property_name}</h4>
    //             <div className='mt-1'>
    //               <span className='text-gray-900'></span>
    //               <span className='ml-1 text-sm text-gray-600'>/wk</span>
    //             </div>
    //             <div className='flex mt-1 text-sm text-gray-600'>
    //               <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg>
    //               <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg>
    //               <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg>
    //               <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg>
    //               <svg className='w-4 h-4 pt-1 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.512466 10.7148L5.68804 15.1021L4.0784 21.6988C3.76221 22.9293 5.11997 23.9393 6.22406 23.2453L12 19.678L17.7757 23.2446C18.849 23.9068 20.2057 22.9291 19.9215 21.6979L18.3117 15.1019L23.4879 10.7144C24.4656 9.89401 23.961 8.28437 22.6673 8.18958L15.8814 7.68426L13.3252 1.40415C12.852 0.236418 11.1791 0.236418 10.6738 1.40415L8.11762 7.68449L1.33196 8.18981C0.0389648 8.31664 -0.466357 9.89446 0.512466 10.7148Z" fill="#009688"/></svg>
    //               <span className='ml-3'> reviews</span>
    //             </div>
    //           </div>
    //           </div>
    //           </div>
    //     ))}
    // </div>

            // <div>
            //     {data.properties.map((property) =>(
            //     <div>
            //         <div>
            //             <img/>
            //         </div>
            //         <></>
            //     </div>
            //     ))}
            // </div>


        )
}