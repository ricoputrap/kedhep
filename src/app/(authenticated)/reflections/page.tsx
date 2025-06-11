import React from 'react'

export default async function ReflectionsPage() {
  // simulate loading for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <section id="reflections-page" className="flex flex-col items-center justify-center min-h-[80vh] p-8">
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
            />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Reflections Under Construction</h2>
          <p className="text-gray-600 mb-4">
            We&apos;re working on building a powerful reflections tool to help you 
            track your progress and learning. Stay tuned!
          </p>
          <div className="text-sm text-gray-500">Expected completion: September 2025</div>
        </div>
      </div>
    </section>
  )
}
