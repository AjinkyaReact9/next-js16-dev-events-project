import { Image } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href='/' className='logo'><p>DevEvent</p></Link>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
