import React from 'react'
import ProgressBar from '../components/DashBoard/ProgressBar'
import Leaderboard from '../components/DashBoard/LeaderBoard'
import Card from '../components/DashBoard/Card'
import StatusCompleted from '../components/DashBoard/StatusCompleted'
import StatusOngoing from '../components/DashBoard/StatusOngoing'
import StatusPending from '../components/DashBoard/StatusPending'
import Achivements from '../components/DashBoard/Achivements'

function Dashboard() {
  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100">

      <div className="flex flex-row h-64 w-full bg-white shadow-lg rounded-xl p-6 justify-center items-center gap-6">

        <div className="flex flex-col basis-2/5 items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Progress Overview</h2>
          <ProgressBar />
        </div>

        <div className="flex flex-row basis-3/5 gap-4">
          <div className="basis-1/3 h-60">
            <Card className="border border-green-400 ">
              <StatusCompleted />
            </Card>
          </div>
          <div className="basis-1/3 h-60">
            <Card className="border border-blue-400 ">
              <StatusOngoing />
            </Card>
          </div>
          <div className="basis-1/3 h-60">
            <Card className="border border-yellow-400 ">
              <StatusPending />
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-row  w-full h-fit bg-white shadow-lg rounded-xl p-6 mt-8">
        <Leaderboard />
      </div>

      <div className='flex flex-row w-full h-fit bg-white shadow-lg rounded-xl p-6 mt-8'>
        <Achivements/>
      </div>

    </div>
  )
}

export default Dashboard
