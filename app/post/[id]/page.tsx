import { Posts } from "@/src/components/interfaces/post-interface";

interface Props {
    params: {
        id: string
    }
}

async function getPostData(id : string) {
    const apiUrl = process.env['POST_SOURCE_API'];
    const apiUrlFinal = `${apiUrl}/${id}`;
    // console.log(apiUrlFinal, id);
    const response = await fetch(apiUrlFinal);

    if(!response.ok) {
        throw new Error("API Failure - In Post Page");
    }

    return response.json();
}

export default async function PostPage({ params } : Props) {
    const postData: Posts = await getPostData(params.id);

    return (
        <div className="bg-black h-screen text-center">
            <h1 className="font-extrabold text-2xl text-white pt-14">{postData.title}</h1>
            <h3 className="font-bold text-white mt-2 p-4">Posted By:&nbsp;&nbsp;&nbsp;
                <span>User {postData.userId}</span>
            </h3>
            <p className="text-sky-500/100">{postData.body}</p>
        </div>
    );
}