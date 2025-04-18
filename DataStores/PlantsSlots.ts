import { useState } from "react";
import items from "./items";

type slot = {
    hasPlant: boolean,
    hasWorker: boolean,
    growthProgress: number,
}

const slotCost = items.items["plot"].cost; // plot cost
const [slots, setSlots] = useState<slot[]>([]);


function BuySlot () 
{
    const newSlots = [...slots, { hasPlant: false, hasWorker: false, growthProgress: 0 }];
    setSlots(newSlots);
}


function PlantSeedInNextAvailableSlot () 
{
    const newSlots = [...slots];
    for (let i = 0; i < newSlots.length; i++) 
    {
        if (!newSlots[i].hasPlant) 
        {
            newSlots[i].hasPlant = true;
            break;
        }
    }
    setSlots(newSlots);
}


function PlantWorkerInNextAvailableSlot ()
{
    const newSlots = [...slots];
    for (let i = 0; i < newSlots.length; i++) 
    {
        if (!newSlots[i].hasWorker) 
        {
            newSlots[i].hasWorker = true;
            break;
        }
    }
    setSlots(newSlots);
}


function GrowPlantAtIndex (index: number) 
{
    const newSlots = [...slots];
    if (newSlots[index].hasPlant) 
    {
        newSlots[index].growthProgress += 5;
    }
    setSlots(newSlots);
}


export default {
    BuySlot,
    PlantSeedInNextAvailableSlot,
    PlantWorkerInNextAvailableSlot,
    GrowPlantAtIndex,
}