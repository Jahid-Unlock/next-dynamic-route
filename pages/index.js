import React from 'react';
import Link from 'next/link'

const Home = () => {
  return (
    <div className='container py-5'>
      <h2>Thanks for visiting, mate! 🥂</h2>
      <p>This is a mini project about Next dynamic route, this project made for practic purpose! thanks to The Net Ninja {'<3'} </p>
      <Link href="/items">
      <button className='btn-primary mt-4'>View All Person</button>
      </Link>
    </div>
  )
}

export default Home