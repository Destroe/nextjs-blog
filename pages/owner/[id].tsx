import Layout from "components/Layout";
import useSWR from 'swr';
import { useRouter } from 'next/router'


const fetcher = (...args: any) => fetch(...args).then(res => res.json())


export default function Owners() {
    const router = useRouter()
    const { data, error } = useSWR(`/api/users/${router.query.id}`, fetcher)

    function getRandomInt(min: any, max: any) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


    return (
        <Layout>
            <div className="mx-4 my-4">
                <div className="flex">
                    <div className="w-5/6">
                        <div className="flex py-6 pl-4 bg-white border-b border-gray-300">
                            <div className='px-4'>
                                <img className='object-cover mt-1 rounded-full' src={`https://picsum.photos/seed/${getRandomInt(1, 99)}/60/60`} alt="" />
                            </div>
                            <div className='px-4'>
                                <h1 className='pt-1 text-2xl text-gray-900'>Hi I am {data.user?.first_name}</h1>
                                <p className='text-gray-600'>{data.user?.role}</p>
                            </div>
                        </div>
                        <div className="px-4 py-4 bg-white">
                            <p>
                                {data.user?.register_data}
                            </p>
                        </div>
                        <div className="px-4 py-4 bg-white">
                            <p>
                                dfsfsfs
                            </p>
                        </div>
                        <div className="px-4 py-4 bg-white">
                            <p>
                                dfsfsfs
                            </p>
                        </div>
                        <div className="px-4 py-4 bg-white">
                            <p>
                                dfsfsfs
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 py-4 bg-white border-l border-gray-300">
                        <div className="text-center">
                            <span>Contact me</span>
                        </div>
                        <form className="text-center">
                            <input className="my-3 border border-gray-400" placeholder="Enter your name"></input>
                            <input className="my-3 border border-gray-400 " placeholder="Enter your email"></input>
                            <input className="my-3 border border-gray-400 " placeholder="Enter your phone"></input>
                            <textarea className="px-5 my-3 border border-gray-400" placeholder="Type your message hear"></textarea>
                        </form>
                        <div className='mx-10 text-center text-white bg-teal-500 border rounded b-gray-300 hover:bg-teal-400 hover:text-white'>
                            <button>Instant Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}