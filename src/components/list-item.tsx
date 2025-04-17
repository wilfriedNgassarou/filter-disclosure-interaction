import { motion } from "motion/react";
import { FilterKey } from "../constants";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

export function ListItem(props: {
  index: number
  filterKey: FilterKey
  selectedFilterKey: FilterKey
  setSelectedFilterKey: Dispatch<SetStateAction<FilterKey>>
  setIsOpened: Dispatch<SetStateAction<boolean>>
}) {
  const { index, filterKey, selectedFilterKey, setSelectedFilterKey, setIsOpened } = props
  const delay = ((index + 10) * 0.035)
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', bounce: .1, duration: .65, delay }}
      onClick={() => {
        setSelectedFilterKey(filterKey)

        setTimeout(() => {
          setIsOpened(false)
        }, 150);
      }}
      className="px-3 py-2 rounded-lg flex justify-between items-center cursor-default hover:bg-gray-400/10"
    >
      <div className="flex items-center gap-x-3">
        <span>
          <filterKey.Icon size={24} />
        </span>
        <span className="capitalize">{filterKey.name}</span>
      </div>
      <div 
        className={clsx(
          "relative border-gray-500 w-6 h-6 overflow-hidden rounded-full",
          selectedFilterKey.name == filterKey.name ? "border-none" : "border-[2px]"
        )}
      >
        {selectedFilterKey.name == filterKey.name && (
          <div className="absolute inset-0 bg-green-500 flex justify-center items-center">
            <svg
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="fill-none stroke-white w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
        )}
      </div>
    </motion.div>
  )
}