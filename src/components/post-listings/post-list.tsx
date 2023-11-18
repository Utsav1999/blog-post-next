import { Posts } from '../interfaces/post-interface'
import PostCard from './post-card';

async function getPostData(apiUrl: string) {
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("API Failure - In Post List");
    }

    return response.json();
}

export default async function Posts({ apiUrl }: { apiUrl: string }) {
    const postData = await getPostData(apiUrl);
    // console.log(postData);
    return (
        <section className='mb-12'>
            <div className='grid grid-cols-5 gap-4'>
                {
                    postData.map((post: Posts) => {
                        return <PostCard key={post.id} post={post}/>
                    })
                }
            </div>
        </section>
    );
}