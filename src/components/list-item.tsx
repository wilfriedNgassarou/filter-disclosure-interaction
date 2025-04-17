import { motion } from "motion/react";
import { FilterKey } from "../contants";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

export function ListItem({ index, item, activeItem, setIsOpened, setActiveItem }: {
  index: number
  item: FilterKey
  activeItem: FilterKey
  setActiveItem: Dispatch<SetStateAction<FilterKey>>
  setIsOpened: Dispatch<SetStateAction<boolean>>
}) {

  const delay = ((index + 10) * 0.035)
  
  return (
    <motion.div 
      key={item.name}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring', bounce: .1, duration: .65, delay
      }}
      onClick={() => {
        setActiveItem(item)

        setTimeout(() => {
          setIsOpened(false)
        }, 150);
      }}
      className="px-3 py-2 rounded-lg flex justify-between items-center cursor-default hover:bg-gray-400/10"
    >
      <div className="flex items-center gap-x-2">
        <span>
          <item.Icon size={24} />
        </span>
        <span className="capitalize">{item.name}</span>
      </div>
      <div 
        className={clsx(
          "relative border-gray-500 w-6 h-6 overflow-hidden rounded-full",
          activeItem.name == item.name ? "border-none" : "border-[2px]"
        )}
      >
        {activeItem.name == item.name && (
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