{/* <Layout>
      <div>
        <div className='flex py-4 pl-5 ml-10 px-15'>
          <div className=''>
            <div className='container flex px-10 mx-auto'>
              <div className='container flex mx-auto'>
                <img className="object-cover h-full shadow-md " src={`https://picsum.photos/seed/${getRandomInt(1, 99)}/1000/500`} alt="" />
              </div>
            </div>
            <div className='ml-10 w-[1000px]'>
              <div className='px-4 py-4 bg-white border-b border-gray-400'>
                <div className='flex justify-between'>
                  <h1 className='text-lg font-semibold text-gray-900 '>{data.properties?.property_name}</h1>
                  <div className='flex pr-3'>
                    <img className='object-cover mt-1 rounded-full' src={`https://picsum.photos/seed/${getRandomInt(1, 99)}/60/60`} alt="" />
                  </div>
                </div>
                <div className='flex'>
                  <div className='text-gray-900'>
                    <span className='text-gray-600'>{data.properties?.streetAddress},{data.properties?.city},{data.properties?.country}</span>
                  </div>
                  <div className='flex items-center pl-2 text-sm text-gray-600'>
                    <svg className={(data.properties?.star >= 1 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(data.properties?.star >= 2 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(data.properties?.star >= 3 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(data.properties?.star >= 4 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                    <svg className={(data.properties?.star >= 5 ? "w-5 h-5 pt-1 mb-1 text-teal-500" : "w-5 h-5 pt-1 mb-1 text-gray-400")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                  </div>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='w-full py-4 text-gray-600 bg-white border-b border-l border-gray-300 '>
                  <div className='text-center'>
                    <div className='pl-24'>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </div>
                    <span>{data.properties?.categories.categor_name}</span>
                  </div>
                </div>
                <div className='w-full py-4 text-gray-600 bg-white border-b border-l border-gray-300 '>
                  <div className='text-center '>
                    <div className='pl-24'>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <span className=''>{data.properties?.status_properties}</span>
                  </div>
                </div>
                <div className='w-full py-4 text-gray-600 bg-white border-b border-l border-gray-300 '>
                  <div className='text-center'>
                    <div className='pl-24'>
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><path d="M470 220H210v-20c0-11.028-8.972-20-20-20H80V95c0-11.028-8.972-20-20-20H20C8.972 75 0 83.972 0 95v310c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10v-55h370v55c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V240c0-11.028-8.972-20-20-20zM80 200h110v20H80v-20zM40 395H20v-45h20v45zm430 0h-20v-45h20v45zm0-65H20v-10h310v-20H20v-10h450v40zm0-60H20V95h40v125H35v20h435v30z" /><path d="M345 300h20v20h-20zM380 300h20v20h-20z" /></svg>
                    </div>
                    <span className=''>{data.properties?.bed} beds</span>
                  </div>
                </div>
                <div className='w-full py-4 text-gray-600 bg-white border-b border-l border-gray-300'>
                  <div className='text-center'>
                    <div className='pl-24'>
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315"><path d="M315 153.755c0-13.876-11.288-25.165-25.164-25.165H51.309V58.415c0-7.03 5.719-12.749 12.749-12.749s12.749 5.719 12.749 12.749a7 7 0 1 0 14 0c0-14.749-12-26.749-26.749-26.749s-26.749 12-26.749 26.749v70.176H25.164C11.288 128.59 0 139.879 0 153.755c0 11.448 7.688 21.129 18.173 24.166.064 20.84.8 41.789 9.207 57.286 6.592 12.151 17.102 20.121 32.288 24.267l-7.235 13.565a7.001 7.001 0 0 0 12.354 6.588l9.333-17.5c4.749.515 9.833.775 15.281.775H225.6c5.449 0 10.532-.261 15.281-.775l9.333 17.5a7 7 0 1 0 12.354-6.588l-7.234-13.565c15.185-4.146 25.695-12.115 32.287-24.267 8.407-15.497 9.143-36.446 9.207-57.286C307.311 174.884 315 165.204 315 153.755zm-89.4 95.148H89.4c-52.108 0-56.88-23.965-57.214-69.985h250.627c-.334 46.02-5.105 69.985-57.213 69.985zm64.236-83.986H25.164c-6.156 0-11.164-5.007-11.164-11.162 0-6.156 5.008-11.165 11.164-11.165h264.672c6.156 0 11.164 5.009 11.164 11.165 0 6.156-5.008 11.162-11.164 11.162z" /></svg>
                    </div>
                    <span>{data.properties?.bath} baths</span>
                  </div>
                </div>
              </div>
              <div className='px-4 py-4 bg-white border-b border-gray-300'>
                <h2 className='text-lg text-gray-600'>About this listing</h2>
                <p className='text-gray-600'>{data.properties?.description}</p>
              </div>
              <div className='flex justify-between px-4 py-4 bg-white'>
                <p className='text-gray-600'>Amenities</p>
                <div>
                  <ul>
                    <li className='flex text-gray-600'>Balcony {`${data.properties?.balcony}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                    <li className='flex text-gray-600'>Parking {`${data.properties?.parking}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                    <li className='flex text-gray-600'>Pool {`${data.properties?.pool}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className='flex text-gray-600'>Beach {`${data.properties?.beach}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                    <li className='flex text-gray-600'>Pet friendly {`${data.properties?.pet_friendly}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                    <li className='flex text-gray-600'>Kid friendly {`${data.properties?.kid_friendly}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className='flex text-gray-600'>Air conditioning {`${data.properties?.air_conditioning}` == "true" ? <svg className='w-4 h-4 mt-1 ml-1 text-teal-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> : <svg className='w-4 h-4 mt-1 ml-1 text-rose-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>}</li>
                  </ul>
                </div>
              </div>
              <div className='flex justify-between px-5 py-4 bg-white border-t border-gray-300'>
              <div>
                <span className='text-gray-600'>Availability</span>
              </div>
              <div className="flex">
                <svg  className='w-4 h-4 mt-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                <span className='pl-2 text-gray-600'>The minimum stay is 7 nights</span>
              </div>
              <div className='flex'>
                <svg  className='w-4 h-4 mt-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                <span className='pl-2 text-gray-600'>The maximum stay is 14 nights</span>
              </div>
              </div>
            <div className='px-40 py-4 bg-white border-t border-gray-300'>
              <div className='px-10'>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                monthsShown={2}
                inline
              />
              </div>
            </div>
            <div className='flex px-5 py-5 mt-4 bg-white border-b border-gray-300'>
              <div className=''>
                <img className='object-cover mt-1 rounded-full' src={`https://picsum.photos/seed/${getRandomInt(1, 99)}/60/60`} alt="" />
              </div>
              <div className='px-10'>
                <h1 className='pt-1 text-2xl text-gray-900'>Hosted by  {data.properties?.owner.first_name}</h1>
                <p className='text-gray-600'>fsfs</p>
              </div>
            </div>
            <div className='flex justify-between px-10 py-10 text-center bg-white'>
              <div className='w-1/2 py-3 mx-2 border rounded b-gray-300 hover:bg-gray-400 hover:text-white'>
                <button>Contact the host</button>
              </div>
              <div className='w-1/2 py-3 mx-2 text-center border rounded b-gray-300 hover:bg-gray-400 hover:text-white'>
                <button>View Profile</button>
              </div>
            </div>
            <div className='mt-4 border-t border-gray-300'>
              <div className='mt-4'>
                <span className='text-xl text-gray-900'>{data.properties?.reviews.length} Review</span>
              </div>
              <div className='flex mt-4'>
                <div className=''>
                  <img className='object-cover mt-1 rounded-full' src={`https://picsum.photos/seed/${getRandomInt(1, 99)}/250/250`} alt="" />
                </div>
                <div className='px-4'>
                  <div className=''>
                    <span> {data.properties?.reviews[0].id_user}</span>
                  </div>
                  <div className='mt-8 text-gray-600 '>
                    {data.properties?.reviews[0].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='sticky text-center top-10'>
            <div className='bg-gray-700'>
              <span className='text-gray-300'>${data.properties?.price} /wk</span>
            </div>
            <div className='bg-white'>
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </div>
            <div className='text-left text-gray-600 bg-white'>
              <span className='px-2'>Total ${data.properties?.price}</span>
            </div>
            <div className='flex justify-between px-2 py-2 text-center bg-white'>
              <div className='w-full py-2 text-white bg-teal-500 border rounded b-gray-300 hover:bg-teal-400 hover:text-white'>
                <button>Instant Booking</button>
              </div>
            </div>
            <div className='flex justify-between px-2 py-2 text-center bg-white'>
              <div className='w-full py-2 border rounded b-gray-300 hover:bg-gray-400 hover:text-white'>
                <button>Contact the host</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout > */}