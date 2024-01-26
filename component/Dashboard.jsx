import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <table class="table-auto border border-black">
        <thead className='border-black bg-slate-200'>
          <tr className='border-black'>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-black border-s-violet-50 outline-2 p-5'>
            <td className='border-spacing-2 border-black'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard