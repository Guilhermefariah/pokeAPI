import React from 'react'
import DescriptionCard from './DescriptionCard'
import AbilitiesCard from "./AbilitiesCard"

export default function index() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0 p-4">
      <DescriptionCard />
      <AbilitiesCard />
    </div>
  )
}
