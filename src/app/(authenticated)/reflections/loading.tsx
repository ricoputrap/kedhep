import React from 'react'

export default function ReflectionsLoading() {
  return (
    <section id="reflections-page" className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="mt-4 text-base-content/70">Loading...</p>
      </div>
    </section>
  )
}
