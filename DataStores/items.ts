"use client"

import MoneyStore from "./MoneyStore";
import PlantsSlots from "./PlantsSlots";

// item type schema
type item = {
    name: string,
    cost: number,
    description: string,
    dependancies?: string[],
    purchase: () => void,
}

// NOTE dependancy names need to match another item name exactly
// NOTE the order here will be the order they are displayed
const items = 
{
    "items": [
        {
            "name" : "plot",
            "cost" : 1000,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.BuySlot(),
        },
        {
            "name" : "worker",
            "cost" : 300,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.PlantWorkerInNextAvailableSlot(),
            "dependancies" : ["plot"]
        },
        /*
        {
            "name" : "clerk",
            "cost" : 400,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.BuySlot(),
        },        
        {
            "name" : "manager",
            "cost" : 800,
            "description" : "A worker that can be assigned to tasks.",
            "purchase" : () => PlantsSlots.BuySlot(),
        },*/
    ]
}


let ownedItems: { [key: string]: number } = 
{
    
}


function BuyItemFromStore (newItem:number) 
{
    const queriedItem = items.items[newItem];

    if (queriedItem == undefined)
    return false;

    // exit if the player cannot afford the item
    if ( MoneyStore.GetMoney() <  queriedItem.cost) 
    {
        return false;
    }    

    // Check for dependancies
    if (queriedItem.dependancies != undefined) 
    {
        // how many of the queried item exists
        const quiertedItemAmount = ownedItems[queriedItem.name];
        const processedAmount = ownedItems[queriedItem.name] == undefined ? 0 : quiertedItemAmount;

        // prevent the player from buying more items than they can support
        for (let i = 0; i < queriedItem.dependancies.length; i++) 
        {
            const dependancy = queriedItem.dependancies[i];
            if (ownedItems[dependancy] == undefined || ownedItems[dependancy] <= processedAmount) 
            {
                return false;
            }
        }
    }

    // If the player has yet to buy the item create an entry for it
    if (ownedItems[queriedItem.name] == undefined) 
    {
        ownedItems[queriedItem.name] = 0;
    }

    // Pay for item
    ownedItems[queriedItem.name] += 1;

    MoneyStore.RemoveMoney(queriedItem.cost);
    return true;

}


export default {
    BuyItemFromStore,
    items,
    ownedItems
}
