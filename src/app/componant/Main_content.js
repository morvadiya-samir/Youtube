// 'use client'
import Img from "next/image"

export default async function Main_content() {

    const apikey = process.env.YOUTUBE_API_KEY
    const youtube_url = process.env.YOUTUBE_URL
    const channel_id = process.env.YOUTUBE_ID

    const fetch_data = await fetch(`${youtube_url}?key=${apikey}&channelID${channel_id}&order=date&part=snippet`);
    const json_Data = await fetch_data.json();
    const video_data = json_Data.items;


    return (
        <div className='mt-2 flex flex-wrap justify-around '>
            <ul>
                {
                    video_data.map((e) => {
                        const { id, snippet = {} } = e;
                        const { title, thumbnails = {}, channelTitle = {} } = snippet;
                        const { medium = {} } = thumbnails;
                        console.log(e)

                        return (
                            <>
                                <li key={id} className='mt-3 w-[25%] float-left pr-2'>
                                    <div className='float-left pr-2'>
                                        <Img src={medium.url} width={medium.width} height={medium.height} className=' rounded-[5%]' alt="logo" />
                                        <div className='font-bold'>Title</div>
                                        <div>{title}</div>
                                        <div className='font-bold'>Name :</div>
                                        <p>{channelTitle}</p>
                                    </div>
                                </li>

                            </>
                        )
                    })

                }
            </ul>

            {/* <div>
                <div>
                </div>
                <div className='mt-4'>
                    <div className='w-[25%] float-left pr-2'>
                        <Img src="/images/1demo.jpg" width={10} height={10} className='w-[10em] rounded-[50%]' alt="logo" />
                    </div>
                    <div className='w-auto text-left'>
                        <div>Title</div>
                        <div>Channel Name</div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}