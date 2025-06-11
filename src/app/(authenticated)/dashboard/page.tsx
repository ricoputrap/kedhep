import React from 'react'

export default async function DashboardPage() {
  // simulate loading for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <section id="dashboard-page" className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <div className="text-center max-w-md">
        <div className="bg-base-200 p-8 rounded-lg shadow-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 mx-auto text-primary mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
            />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Dashboard Under Construction</h2>
          <p className="text-gray-600 mb-4">
            We&apos;re working hard to build an amazing dashboard experience for you. 
            Please check back soon!
          </p>
          <div className="text-sm text-gray-500">Expected completion: July 2025</div>
        </div>
      </div>
    </section>
  )
}
