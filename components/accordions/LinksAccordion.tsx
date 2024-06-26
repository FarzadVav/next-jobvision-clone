"use client"

import { IconChevronDown } from "@tabler/icons-react"

import AccordionTypes from "@/types/accordion.types"
import AccordionWithToggle from "@/hocs/AccordionWithToggle"

const LinksAccordion = ({
  toggle,
  accordionRef,
  toggleHandler,
  title,
  content,
}: AccordionTypes) => {
  return (
    <li className="bg-white/5 text-white w-full rounded-md pl-3 pr-6 py-1 mt-2 first:mt-0 cursor-pointer">
      <div className="h-12 flex justify-between items-center" onClick={() => toggleHandler()}>
        <span>{title}</span>
        <IconChevronDown className={`icon transition-transform ${toggle ? "-scale-y-100" : ""}`} />
      </div>
      <div
        className={`border-solid border-t border-transparent ${
          toggle ? "border-white/10" : ""
        } transition-all overflow-hidden`}
        ref={accordionRef}
      >
        {content}
      </div>
    </li>
  )
}

export default AccordionWithToggle(LinksAccordion)
