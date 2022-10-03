import useSWR from 'swr'
import Properties from 'server'

const fetcher = (...args: any) => fetch(...args).then(res => res.json())

function Test() {
  const { data, error } = useSWR('/api/property', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)
  console.log(data.properties)
  // render data
  return (  
  <div>
    <div className='h-full'>

    </div>
    <div className="relative bg-black">
      <p>Relative parent</p>
      <div className="absolute bottom-0 left-0 bg-white">
        <p>Absolute child</p>
      </div>
    </div>
  </div>
  )
}
export default Test