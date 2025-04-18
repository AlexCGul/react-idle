"use client"

import { useState } from "react";
import items from "./items";

type slot = {
    hasPlant: boolean,
    hasWorker: boolean,
    growthProgress: number,
}

//const slotCost = items.items["plot"].cost; // plot cost
let slots:slot[] = [];

const slotBought = new Event("slotBought")

function BuySlot () 
{
    slots = [...slots, { hasPlant: false, hasWorker: false, growthProgress: 0 }];
    console.log("Buying slot " + slots.length);
    document.dispatchEvent(slotBought);
}


function GetSlots ()
{
    return slots;
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
    slots = newSlots;
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
    slots = newSlots;
}


function GrowPlantAtIndex (index: number) 
{
    const newSlots = [...slots];
    if (newSlots[index].hasPlant) 
    {
        newSlots[index].growthProgress += 5;
    }
    slots = newSlots;
}


export default {
    BuySlot,
    PlantSeedInNextAvailableSlot,
    PlantWorkerInNextAvailableSlot,
    GrowPlantAtIndex,
    GetSlots,
    slotBought
}