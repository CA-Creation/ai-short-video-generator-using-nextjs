'use client'
import { useState } from 'react'
import { Button } from '../../components/ui/button'
import React from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

function Dashboard () {
  const [videoList,seVideoList] = useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
        <Button>+ Create New</Button>
        </Link>
      </div>
      <div>
        {/*Empty state*/}
        {videoList?.length==0 &&<div>
          <EmptyState></EmptyState>
          </div>}
      </div>
    </div>
  )
}

export default Dashboard 