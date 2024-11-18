import Image from 'next/image'

const Comments = () => {
    return (
        <div className='mt-4'>
            {/* Write */}
            <div className="flex items-center gap-4">
                <Image src="/narmin.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-[10px]" />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
                    <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>
            </div>
            {/* Comments */}
            <div className="">
                {/* Comment */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* Avatar */}
                    <Image
                        src="/narmin.jpg"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-[10px]"
                    />
                    {/* Desc */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Narmin</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas et eos consequuntur. Vitae, cum, distinctio odit
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/like.png"
                                    alt=""
                                    width={12}
                                    height={12}
                                    className="cursor-pointer w-4 h-4"
                                />
                                <span className='text-gray-500'>123 Likes</span>
                                <span className='text-gray-300'>|</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                        <div className='text-gray-400 mt-2 mb-[10vh] text-[12px]'>more comments...</div>
                    </div>
                    {/* Icon */}
                    <Image
                        src="/more.png"
                        alt=""
                        width={16}
                        height={16}
                        className="cursor-pointer w-4 h-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Comments
