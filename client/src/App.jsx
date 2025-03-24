import React, { useState } from 'react';
import { Cog as Yoga, Search } from 'lucide-react';
import { yogaPoses } from './data/poses';
import { PoseCard } from './components/PoseCard';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [selectedDosha, setSelectedDosha] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const filteredPoses = yogaPoses.filter(pose => {
    if (selectedDosha && !pose.ayurvedaRecommendations.some(rec => rec.dosha.includes(selectedDosha))) {
      return false;
    }
    if (difficulty && pose.difficulty !== difficulty) {
      return false;
    }
    return true;
  });

  return (
    <>
     <div className="min-h-screen ">
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Yoga className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Yoga & Ayurveda Guide</h1>
            </div>
          </div>
        </div>
      </header> */}
      {/* <Navbar/> */}
      <Hero/>

      <main className="max-w-full bg-[#0a0a0a] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="border bg-blue-600/5 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-white mb-1">
                Select Dosha
              </label>
              <select
                value={selectedDosha}
                onChange={(e) => setSelectedDosha(e.target.value)}
                className="w-full text-white bg-black rounded-md border border-gray-600 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/50"
              >
                <option value="" className=''>All Doshas</option>
                <option value="vata">Vata</option>
                <option value="pitta">Pitta</option>
                <option value="kapha">Kapha</option>
              </select>
            </div>

            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-white mb-1">
                Difficulty Level
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full text-white bg-black rounded-md border border-gray-600 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/50"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {filteredPoses.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No poses found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPoses.map((pose, index) => (
              <PoseCard key={index} pose={pose} />
            ))}
          </div>
        )}
      </main>
    </div>
    </>
  )
}

export default App
