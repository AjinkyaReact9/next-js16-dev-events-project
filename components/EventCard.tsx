import Link from 'next/link'
import React from 'react';

interface Props{
    title: String;
    description: String;
    slug: String;
    location: String;
    date: String;
    time: String;

}

const EventCard = ({title, slug, location, date, time}: Props) => {
    return (
        <>

            <Link href={"/events"} id='event-card'>
                <div className='flex flex-row gap-2 mb-2'>
                    <p>{location}</p>
                </div>
                <p className='title'>{title}</p>
                <div className='datetime'>
                    <div>
                        <p>{date}</p>
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default EventCard
