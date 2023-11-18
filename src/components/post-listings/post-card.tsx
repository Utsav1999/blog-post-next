import { Posts } from '../interfaces/post-interface'
import Link from 'next/link'

export default function PostCard({ post } : { post: Posts }) {
    return (
        <div className="bg-gray-800 p-4 mt-8 rounded relative">
            <div className="relative">
                <button className="absolute bottom-2 right-2 bg-green-500 w-55 h-10 rounded flex items-center justify-center hover:bg-green-800">
                    <span className=" text-white p-3">
                        <Link className='curson-pointer' href={`/post/${post.id}`}>View Post</Link>
                    </span>
                </button>
            </div>
            <div className="text-left">
                <h3 className="text-md font-bold mb-1 text-white">{post.title}</h3>
                <p className="text-sm mb-2 text-yellow-500">Posted By: User-{post.userId}</p>
            </div>
        </div>
    );
}