import { useState } from "react"
import { motion, MotionConfig } from "motion/react"

import { filterKeys } from "./constants"
import { Credits, ListItem } from "./components"

function App() {
  const [selectedFilterKey, setSelectedFilterKey] = useState(filterKeys[0])
  const [isOpened, setIsOpened] = useState(false)

  return (
    <section className="w-full h-dvh flex justify-center items-center fill-gray-600/70">
      <Credits />
      <MotionConfig transition={{ type: 'spring', duration: .85, bounce: .35 }}>
        <div
          onClick={() => setIsOpened(true)} 
          className="relative left-2.5 w-20 h-20 flex justify-center items-center"
        >
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="relative z-10 fill-none stroke-black w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18M7 12h10M10 18h4"></path>
          </svg>
          <motion.div 
            layoutId="wrapper"
            className="absolute inset-0 z-[2] bg-white" 
            style={{ borderRadius: 40, borderWidth: 1 }}
          />
        </div>
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: isOpened ? -20 : 0,
            transition: { delay: isOpened ? 0 : .2 }
          }} 
          transition={{ type: 'spring', bounce: .3 , duration: 1.5 }}
          className="relative right-2.5 w-20 h-20 border-[1px] rounded-full flex justify-center items-center"
        >
          <selectedFilterKey.Icon size={36} />
        </motion.div>

        {isOpened && (
          <motion.section 
            layoutId="wrapper"
            className="absolute z-20 w-72 px-1 py-2 bg-white border-2 text-xl overflow-hidden"
            style={{ borderRadius: 20, borderWidth: 1 }}
          >
            {filterKeys.map((item, index) => (
              <ListItem
                key={item.name}
                index={index}
                filterKey={item}
                selectedFilterKey={selectedFilterKey}
                setSelectedFilterKey={setSelectedFilterKey}
                setIsOpened={setIsOpened}
              />
            ))}
          </motion.section>
        )}
      </MotionConfig>
    </section>
  )
}

export default App
