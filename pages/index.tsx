"use client"

import Plant from "@/Components/Plant"
import "@/Components/Sidebar"
import "./_app"
import Sidebar from "@/Components/Sidebar"
import MoneyStore from "@/DataStores/MoneyStore";
import plantsSlots from "@/DataStores/PlantsSlots";
import { useState } from "react";

type slot = {
  hasPlant: boolean,
  hasWorker: boolean,
  growthProgress: number,
}

export default function Home() {
  
  const [slots, SetSlots] = useState<slot[]>( plantsSlots.GetSlots);

  
  if (typeof window !== 'undefined') {
      document?.addEventListener("slotsUpdated", () => {

        // Duplicate the slots array to force a re-render
        const slots = [...plantsSlots.GetSlots()];
        SetSlots(slots);
      });
    }

  return (
  
    <div className = "flex bg-primary h-screen overflow-scroll w-full">
      <Sidebar />
      <div className="flex flex-wrap bg-primary ">
        {
          slots.map((slot, index) => {
            MoneyStore.MoneyProcess();
            let slotStyles:string = "";
            
            // TODO implement plants
            if (slot.hasPlant) 
            {
              slotStyles += " bg-green-400";
            }
            if (slot.hasWorker) 
            {
              console.log("Worker in slot " + index);
              slotStyles += " border-8 border-secondary";
            }
            return (
              <Plant key={index}  className={slotStyles}/>
            )
          })
        }
      </div>

    </div>
  )
  
  }