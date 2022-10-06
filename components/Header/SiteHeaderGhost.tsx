import { useState } from "react"
import React from "react"
import Link from "next/link";

export default function HeaderGhost(className:any) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);


  return (
    <header className='bg-gray-900 sm:justify-between md:justify-between lg:justify-between xl:text-black sm:flex sm:item-center xl:bg-white'>
      <Link href={'/'}>
        <div className='flex justify-between w-auto h-12 bg-gray-900 sm:item-center xl:bg-gray-900 xl:pb-[73px] pl-1'>
          <div className="pl-[19px] mt-2 sm:pt-2">
            <svg className='w-auto h-8' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M121.09 28.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336ZM137.084 16v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V28h3.096V16h-3.096Zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384ZM149.851 18.976V16h-2.712v-3.36l-3.096.936V16h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712ZM153.57 14.56c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896ZM152.034 28h3.096V16h-3.096v12ZM163.676 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336Zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312ZM178.886 15.664c-1.608 0-2.856.6-3.576 1.68V16h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V28h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968Z" fill="#A3BFFA" /><path d="M61.063 28h3.768l3.144-11.088L71.143 28h3.768l4.704-16.8h-3.48L72.92 23.656 69.391 11.2H66.56l-3.504 12.456L59.84 11.2h-3.48L61.063 28ZM85.674 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336Zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312ZM97.308 18.064V16h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V15.76c-1.512 0-3.024.672-3.648 2.304ZM113.831 28l-4.968-6.072L113.687 16h-3.696l-4.128 5.28V11.2h-3.096V28h3.096v-5.448L110.231 28h3.6Z" fill="#fff" /><path fillRule="evenodd" clipRule="evenodd" d="M43.911 12.604 36.213 8.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L1 15.078l21.09-5.273h3.122a9.552 9.552 0 0 0-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V8.161l-7.696 4.444a7.502 7.502 0 0 1 2.565-4.8h-4.12a7.489 7.489 0 0 1 6.646-2.973l-5.591-3.228a7.488 7.488 0 0 1 6.696.402c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 0 1 2.5-2.347 7.49 7.49 0 0 1 6.698-.402l-5.593 3.228a7.488 7.488 0 0 1 6.646 2.973h-4.12a7.498 7.498 0 0 1 2.567 4.8ZM25.213 28.805v-10h-6v10h6Zm-11-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#A3BFFA" /></svg>
          </div>
          <div className="flex sm:hidden">
            <button onClick={() => setOpen(!open)} type="button" className='mt-1 mr-1 text-gray-500 hover:text-white focus:outline-none focus:text-white'>
              <div className={(open ? "hidden" : "visible")}>
                <svg className="w-8 h-8 pr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M96 256h320M96 176h320M96 336h320" /></svg>
              </div>
              <div className={(open ? "visible" : " hidden")}>
                <svg className="w-8 h-8 pt-1 pr-2 fill-current" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12 4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.81Z" fill="currentColor" /></svg>
              </div>
            </button>
          </div>
        </div>
      </Link>
      <nav className={(open ? "sm:items-center sm:px-4" : "hidden sm:block justify-between")}>
        <div className="xl:grid sm:items-center sm:px-4 xl:grid-cols-2 2xl:grid-cols-4 xl:w-full">
          <div className="hidden xl:block">
            <div className='relative w-full max-w-xs xl:col-span-2'>
              <div className='absolute inset-y-0 flex items-center pl-3'>
                <svg className='w-6 h-6 mt-1 text-gray-600 fill-current' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045 4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485 6 6 0 0 1 8.485-8.485Z" fill="currentColor" /></svg>
              </div>
              <input className="block w-full py-2 pl-8 text-gray-900 bg-gray-200 border border-transparent rounded-lg sm:w-full focus:outline-none focus:bg-white focus:text-gray-900 lg:w-5/6 focus:border-gray-300" placeholder="Search by keywords" />
            </div>
          </div>
          <div className="ml-4 mr-8 xl:col-start-3 2xl:col-start-5 sm:flex sm:items-center">
            <div className='px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:px-0'>
              <a href="#" className='block px-3 py-1 font-semibold text-white rounded hover:no-underline sm:mt-2 xl:hover:bg-gray-400 hover:bg-gray-800 sm:text-sm sm:px-3 xl:text-gray-900'>News</a>
              <a href="#" className='block px-3 py-1 mt-1 font-semibold text-white rounded hover:no-underline sm:mt-2 xl:hover:bg-gray-400 hover:bg-gray-800 sm:text-sm sm:px-3 sm:ml-2 xl:text-gray-900'>Jobs</a>              
              <a href="/autefication/registration" className='block px-3 py-1 mt-1 font-semibold text-white rounded hover:no-underline sm:mt-2 xl:hover:bg-gray-400 hover:bg-gray-800 sm:text-sm sm:px-3 sm:ml-2 xl:text-indigo-500'>Sign in</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}