import React from 'react'

export default async function NotesPage() {
  // simulate loading for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <section id="notes-page" className="flex flex-col items-center justify-center min-h-[80vh] p-8">
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
            />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Notes Coming Soon</h2>
          <p className="text-gray-600 mb-4">
            Our notes feature is still being developed. Soon you&apos;ll be able to 
            create, organize, and search through your notes.
          </p>
          <div className="text-sm text-gray-500">Expected completion: August 2025</div>
        </div>
      </div>
    </section>
  )
}
