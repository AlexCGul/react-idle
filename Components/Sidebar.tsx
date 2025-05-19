"use client";
// @ts-nocheck

import {ItemButton} from "./ItemButton";
import items from "@/DataStores/items";
import MoneyStore from '@/DataStores/MoneyStore';
import { JSX, useEffect, useReducer, useState } from "react";

function SetOwned (state: any, action: any) 
{
  // ( the original array following by the desired mutation )
return { ...state, [action.payload]: (state[action.payload] || 0) + 1 };

}


function Sidebar() {
  
  const [money, updateMoney] = useState(0);
  const [income, updateIncome] = useState(0);
  const [ownedItems, setOwnedItems] = useReducer(SetOwned, items.ownedItems);

  if (typeof window !== 'undefined') {
    document?.addEventListener("moneyUpdated", () => {
      updateMoney(MoneyStore.GetMoney());

      // @ts-expect-error GetIncome exists but ts doesn't see it
      updateIncome(MoneyStore.GetIncome());
    });
    
  };


  let buttons = []
    for (let x = 0; x < items.items.items.length; x++) 
    {
      const name = items.items.items[x].name;
      const val = ownedItems[x];

      buttons.push(
        <ItemButton key={x} text={name} value={val == undefined ? 0 : val} onClick={() => BuyItem(x)} />
      );
    }

  return (
    <div className = "top-0 left-0 h-screen flex flex-col bg-amber-950" >
      <h2>Sidebar</h2>

      {
        buttons.map((button) => {
          return button;
        })
        
      }      
      <p className='align-bottom p-10'>{"$" + income + " /s"}</p>
      <p className='align-bottom p-10'>{"$" + money}</p>

    </div>
  );


  // Code to run when purchasing an item
  function BuyItem(itemBought: number) 
  {
    if ( items.BuyItemFromStore(itemBought))
    {
      items.items.items[itemBought].purchase();
      setOwnedItems({ type: "update", payload: itemBought });
    }
  }

}


 export default Sidebar;