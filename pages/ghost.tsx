import useSWR from 'swr';
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Head from 'next/head';
import Link from "next/link"
import HeaderGhost from 'components/Header/SiteHeaderGhost'
import SearchFilters from 'components/Search_filters/SearchFilters'
import PropertyGhost from 'components/PropertyCard/PropertyGhost';

function Ghost() {
    return(
    <div id="app" className='min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col hl:h-screen'>
      <HeaderGhost className="xl:flex-shrink-0" />
        <div className='xl:flex'>
        <SearchFilters/>
        <main className='px-12 py-6 xl:flex-1'>
          <div className=''>
            <h3 className='text-xl text-gray-900 xl:pl-12 xl:ml-1'>Los Angeles</h3>
            <p className='text-gray-600 xl:pl-12 xl:ml-1'>Live like the stars in these luxurious Southern California estates</p>
          </div>
          <div>          
          <PropertyGhost/>
          </div>
        </main>
        </div>
      </div>
    )
}


export default Ghost