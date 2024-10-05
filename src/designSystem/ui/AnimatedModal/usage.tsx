import { useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from '.'
import { motion } from 'framer-motion'

interface Language {
  name: string
  code: string
  flag: string
}

export function LanguageSelectionModal() {
  const languages = [
    {
      name: 'English (US)',
      code: 'en-US',
      flag: 'https://flagcdn.com/w320/us.png',
    },
    {
      name: 'French',
      code: 'fr',
      flag: 'https://flagcdn.com/w320/fr.png',
    },
    {
      name: 'English (UK)',
      code: 'es-UK',
      flag: 'https://flagcdn.com/w320/gb.png',
    },
  ]

  // State to keep track of selected language
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  // Function to handle language selection
  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang)
  }

  return (
    <div className='flex items-center justify-center'>
      <Modal>
        <ModalTrigger className='text-gray-700 flex justify-center items-center group/modal-btn'>
          {/* Display selected language flag and name as modal trigger content */}
          <img
            src={selectedLanguage.flag}
            alt={`${selectedLanguage.name} flag`}
            width='30'
            height='30'
            className='rounded-full w-8 h-8 object-cover mr-2'
          />
          <span className='text-center'>{selectedLanguage.name}</span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className='text-lg md:text-2xl text-neutral-600 font-bold text-center mb-8'>
              Choose Your Preferred Language 🌍
            </h4>
            <div className='flex justify-center items-center'>
              {languages.map((lang, idx) => (
                <motion.div
                  key={'lang' + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className='rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 flex-shrink-0 overflow-hidden cursor-pointer'
                  onClick={() => handleLanguageSelect(lang)} // Update selected language when clicked
                >
                  <img
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    width='100'
                    height='100'
                    className='rounded-lg h-20 w-20 md:h-24 md:w-24 object-cover flex-shrink-0'
                  />
                  <p className='text-center text-sm mt-2'>{lang.name}</p>
                </motion.div>
              ))}
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  )
}
