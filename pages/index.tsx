import Head from 'next/head'
//import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import Header from 'components/Header/SiteHeader'
import SearchFilters from 'components/Search_filters/SearchFilters'
// import PropertyCard from 'components/PropertyCard/PropertyCard' 
import { useState, useEffect } from 'react'
import Test from './test'
import Test2 from './test2'
import Property from 'components/PropertyCard/Property'


export default function Home(){
  return (
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <section className="flex justify-center mb-3 font-mono text-3xl font-bold text-md">
    //     <p>I learning with <span className='text-yellow-600 '>Golden</span> Team</p>
    //   </section>
    //   <section className="grid justify-left" >
    //     <h2 className="grid justify-center font-mono text-2xl italic font-extrabold text-right">Blog</h2>
    //     <ul className="grid justify-center">
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li className="grid justify-center mb-1 bg-gray-300 border-2" key={id}>
    //           <Link href={`/posts/${id}`}>
    //             <a>{title}</a>
    //           </Link>
    //           <small className="grid justify-center">
    //             <Date dateString={date} />
    //           </small>
    //           <br />
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
      <div id="app" className='min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col hl:h-screen'>
      <Header className="xl:flex-shrink-0" />
        <div className='xl:flex'>
        <SearchFilters/>
        <main className='px-12 py-6 xl:flex-1'>
          <div className=''>
            <h3 className='text-xl text-gray-900 xl:pl-12 xl:ml-1'>Los Angeles</h3>
            <p className='text-gray-600 xl:pl-12 xl:ml-1'>Live like the stars in these luxurious Southern California estates</p>
          </div>
          <div>          
          <Property/>
          </div>
        </main>
        </div>
      </div>
  )
}

