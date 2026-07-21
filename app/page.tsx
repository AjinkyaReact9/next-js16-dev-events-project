import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn'
import { events } from '@/lib/constants';
import React from 'react';

// const events = [
//   {title: 'Event 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'event-1', location: 'location-1', date: 'Date-1', time: 'Time-1'},
//   {title: 'Event 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'event-2', location: 'location-2', date: 'Date-2', time: 'Time-2'},
//   {title: 'Event 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'event-3', location: 'location-3', date: 'Date-3', time: 'Time-3'},
//   {title: 'Event 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'event-4', location: 'location-4', date: 'Date-4', time: 'Time-4'},
//   {title: 'Event 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'event-5', location: 'location-5', date: 'Date-5', time: 'Time-5'},
//   {title: 'Event 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', slug: 'event-6', location: 'location-6', date: 'Date-6', time: 'Time-6'}
// ]

const Page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for Every Dev</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in one Place</p>
      <ExploreBtn />
      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>

        <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }} className='events'>
          {events.map((event) => (
            <li key={event.title}><EventCard {...event} /></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
