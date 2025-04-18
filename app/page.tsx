"use client"

import Plant from "@/Components/Plant"
import "@/Components/Sidebar"
import Sidebar from "@/Components/Sidebar"
import PlantsSlots from "@/DataStores/PlantsSlots";
import plantsSlots from "@/DataStores/PlantsSlots";
import { useState } from "react";

type slot = {
  hasPlant: boolean,
  hasWorker: boolean,
  growthProgress: number,
}

export default function Home() {
  
  let uiSlots = [];
  const [slots, SetSlots] = useState<slot[]>( plantsSlots.GetSlots);

  document.addEventListener("slotBought", () => {
    SetSlots(plantsSlots.GetSlots());
  });

  return (
  
    <div className = "flex">
      <Sidebar />
      <div className="grid grid-cols-3 gap-4">
        {
          slots.map((slot, index) => {
            return (
              <Plant key={index} />
            )
          })
        }
      </div>

      <Plant />

    </div>
  )
  
  }