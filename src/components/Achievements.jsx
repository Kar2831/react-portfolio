import React, { useState } from 'react'
import { ACHIEVEMENTS } from '../constants/index.js'

function Achievements() {
const [visible, setVisible] = useState(false)
  const [isSelected, setIsSelected] = useState('')

  const handlePopup = (path) => {
    setIsSelected(path)
    setVisible(true)
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className='text-white text-center text-4xl'>Certifications</h1>
      <span className='relative bg-white w-60 h-1 mx-auto mt-3 block before:absolute before:w-4 before:h-4 before:bg-white before:-top-2 before:rounded-full before:bottom-[50%] after:absolute after:w-4 after:h-4 after:bg-white after:-top-2 after:right-0 after:rounded-full'></span>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {ACHIEVEMENTS.map((ach, index) => (
          <div
            data-aos="flip-left"
            data-aos-delay={(index % 3) * 400 + 100}
            key={index}
            className="bg-template-achievement p-6 rounded shadow text-white flex flex-col space-y-6"
          >
            <h1 className="text-2xl font-semibold">{ach.event}</h1>

            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-medium">Project</h2>
              <p>{ach.project}</p>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-medium">Description</h2>
              <p className="whitespace-pre-line">{ach.description}</p>
            </div>

            {ach.type === 'pdf' ? (
              <iframe
                src={ach.cert_path}
                frameBorder="0"
                title={`Certificate for ${ach.event}`}
                className="w-full h-60 rounded border border-white cursor-pointer"
                onClick={() => handlePopup(ach.cert_path)}
              />
            ) : (
              <img
                src={ach.cert_path}
                alt="Certification"
                className="w-full h-60 object-cover rounded cursor-pointer"
                onClick={() => handlePopup(ach.cert_path)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-[90%] relative">
            <button
              onClick={() => {
                setVisible(false)
                setIsSelected('')
              }}
              className="absolute top-2 right-2 text-black text-2xl"
            >
              ✕
            </button>

            {isSelected.endsWith('.pdf') ? (
              <iframe
                src={isSelected}
                frameBorder="0"
                className="w-full h-[80vh] rounded"
                title="Certificate PDF"
              />
            ) : (
              <img
                src={isSelected}
                alt="Enlarged Certificate"
                className="w-full h-auto rounded"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Achievements
