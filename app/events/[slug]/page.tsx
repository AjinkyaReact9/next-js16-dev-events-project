import BookEvent from '@/components/BookEvent';
import EventCard from '@/components/EventCard';
import { IEvent } from '@/database/eventmodel';
import { getSimilarEventsBySlug } from '@/lib/actions/event.actions';
import { notFound } from 'next/navigation';
import React from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventAgenda = ({agendaItems} : {agendaItems: string[]}) => (
    <div className='flex-col-gap-2 mx-2'>
        <h2>Agenda</h2>
        <ul>
           { agendaItems.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
    <div className="flex flex-row gap-1.5 flex-wrap mb-5">
        {tags.map((tag) => (
            <div className="pill" key={tag}>{tag}</div>
        ))}
    </div>
)


const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const request = await fetch(`${BASE_URL}/api/events/${slug}`);
    const { event: {description, overview, date, time, location, mode, agenda, audience, organizer, tags} } = await request.json();
    console.log('request', description);
    if(!request) return notFound();

    const bookings = 10;

    const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);
    console.log('similarEvents', similarEvents)

    return (
        <section id='event'>
            <div className='header'>
                <h1>Event Description</h1>
                <p className="mt-2">{description}</p>
            </div>

            <div className='details'>
                {/* {Left Side - Event Content} */}
                <div className='content'>
                    <section className='flex-col-gap-2'>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </section>

                    <section className='flex-col-gap-2 mx-2'>
                        <h2>Event Details</h2>
                        <p>🗓️ {date}</p>
                        <p>⏰ {time}</p>
                        <p>📍 {location}</p>
                        <p>🖥️ {mode}</p>
                        <p>👨‍👩‍👧‍👦 {audience}</p>
                    </section>

                    <EventAgenda agendaItems={agenda}/>

                    <section className='flex-col-gap-2 mx-2'>
                        <h2>About Organizer</h2>
                        <p>{organizer}</p>
                    </section>
                    
                    <EventTags tags={tags} />
                </div>
                {/* {Right Side - Booking Form} */}
                <aside className='booking'>
                    <div className='signup-card'>
                        <h2>Book Your Spot</h2>
                        {bookings > 0 ? (
                            <p className='text-sm'>Join {bookings} people who have already booked their spot</p>
                        ): (
                            <p className='text-sm'>Be the first to book your spot!</p>
                        )}

                        <BookEvent />
                    </div>
                </aside>
            </div>

            <div>
                <h2>Similar Events</h2>
                <div>{similarEvents.length >= 0 && similarEvents.map((similarEvent: IEvent, index) => (
                        <EventCard key={index} {...similarEvent}/>

                    ))}</div>
            </div>
        </section>
    )
}

export default EventDetailsPage
