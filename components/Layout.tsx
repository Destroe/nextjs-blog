import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from 'components/Header/SiteHeader'
import SearchFilters from 'components/Search_filters/SearchFilters'

// const name = 'Denis'
// export const siteTitle = 'Next.js Sample Website'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    // <div >  {// .container {max-width: 36rem;padding: 0 1rem; margin: 3rem auto 6rem;//}
    // }
    //   <Head>
    //     <link rel="icon" href="/favicon.ico" />
    //     <meta
    //       name="description"
    //       content="Learn how to build a personal website using Next.js"
    //     />
    //     <meta
    //       property="og:image"
    //       content={`https://og-image.vercel.app/${encodeURI(
    //         siteTitle
    //       )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    //     />
    //     <meta name="og:title" content={siteTitle} />
    //     <meta name="twitter:card" content="summary_large_image" />
    //   </Head>
    //   <header className={styles.header}>
    //     {home ? (
    //       <>
    //         <Image
    //           priority
    //           src="/images/profile.jpg"
    //           className={utilStyles.borderCircle}
    //           height={144}
    //           width={144}
    //           alt={name}
    //         />
    //         <h1 className={utilStyles.heading2Xl}>{name}</h1>
    //       </>
    //     ) : (
    //       <>
    //         <Link href="/">
    //           <a>
    //             <Image
    //               priority
    //               src="/images/profile.jpg"
    //               className={utilStyles.borderCircle}
    //               height={108}
    //               width={108}
    //               alt={name}
    //             />
    //           </a>
    //         </Link>
    //         <h2 className={utilStyles.headingLg}>
    //           <Link href="/">
    //             <a className={utilStyles.colorInherit}>{name}</a>
    //           </Link>
    //         </h2>
    //       </>
    //     )}
    //   </header>
    //   <main>{children}</main>
    //   {!home && (
    //     <div>
    //       <Link  href="/">
    //         <a className="px-2 py-1 font-medium text-white transition duration-300 bg-teal-600 rounded-full hover:bg-indigo-500">← Back to home</a>
    //       </Link>
    //     </div>
    //   )}
    // </div>
    <div className='min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col hl:h-screen'>
      <Header/>
      <div className='xl:flex xl:w-full'>
        <SearchFilters/>
          <div className='xl:flex-1'>
            {children}
          </div>
      </div>
    </div>
  )
}