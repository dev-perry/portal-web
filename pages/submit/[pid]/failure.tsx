import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head"

const SubmitFailure: NextPage = () => {
    const router = useRouter();
    let { pid } = router.query;
    return (
    <div className="m-auto w-full flex flex-col h-full text-white bg-[#9D2F2F] items-center">
        <Head>
            <title>Submit Failure</title>
        </Head>
        <div className="flex flex-col my-auto space-y-6">
        <p className="text-2xl font-medium text-center">Something Broke!</p>
        <button className="h-8 text-base rounded border px-4 border-white text-[#9D2F2F] bg-white" onClick={() => router.push(`/submit/${pid}`)}>Try Again</button>
        </div>
    </div>)
}

export default SubmitFailure;