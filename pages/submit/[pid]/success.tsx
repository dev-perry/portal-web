import { NextPage } from "next";
import { useRouter } from "next/router";

const SubmitSuccess: NextPage = () => {
    const router = useRouter();
    let { pid } = router.query;
    return (
    <div className="m-auto w-full flex flex-col h-full text-white bg-[#427A5B] items-center">
        <div className="flex flex-col my-auto space-y-6">
        <p className="text-2xl font-medium text-center">Submission Sent!</p>
        <button className="h-8 text-base rounded border px-4 border-white text-[#427A5B] bg-white" onClick={() => router.push(`/submit/${pid}`)}>Submit Again</button>
        </div>
    </div>)
}

export default SubmitSuccess;