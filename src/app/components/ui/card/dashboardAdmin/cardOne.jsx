import React from 'react'

const CardOne = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-xl border bg-card text-card-foreground shadow">
    <div className="p-6 flex items-center space-x-4">
      <div className="p-3 w-fit bg-blue-100 rounded-full">
        <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.42M6.16 10.58L12 14m-6.16-3.42V16m12-5.42V16M12 14v7" />
        </svg>
      </div>
      <div className="flex-1 text-right">
        <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
        <p className="text-2xl font-bold">$45,231.89</p>
      </div>
    </div>
  </div>

  <div className="rounded-xl border bg-card text-card-foreground shadow">
    <div className="p-6 flex items-center space-x-4">
      <div className="p-3 w-fit bg-green-100 rounded-full">
        <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m-6 6l9-9 9 9" />
        </svg>
      </div>
      <div className="flex-1 text-right">
        <h3 className="text-sm font-medium text-muted-foreground">New Sales</h3>
        <p className="text-2xl font-bold">1,200</p>
      </div>
    </div>
  </div>

  <div className="rounded-xl border bg-card text-card-foreground shadow">
    <div className="p-6 flex items-center space-x-4">
      <div className="p-3 w-fit bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14V3m0 0L3 10m9-7l9 7M5 21h14" />
        </svg>
      </div>
      <div className="flex-1 text-right">
        <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
        <p className="text-2xl font-bold">3,500</p>
      </div>
    </div>
  </div>

  <div className="rounded-xl border bg-card text-card-foreground shadow">
    <div className="p-6 flex items-center space-x-4">
      <div className="p-3 w-fit bg-yellow-100 rounded-full">
        <svg className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a4 4 0 00-8 0v2m8 0a4 4 0 00-8 0v2m8 0a4 4 0 00-8 0m8 0V7a4 4 0 00-8 0v2m8 0a4 4 0 00-8 0m0 10h8a2 2 0 002-2v-5a2 2 0 00-2-2h-8a2 2 0 00-2 2v5a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex-1 text-right">
        <h3 className="text-sm font-medium text-muted-foreground">Pending Orders</h3>
        <p className="text-2xl font-bold">56</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default CardOne