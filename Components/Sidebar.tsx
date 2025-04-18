"use client";

import ItemButton from './ItemButton'
import items from "@/DataStores/items";
import MoneyStore from '@/DataStores/MoneyStore';
import { useState } from "react";


function Sidebar() {
  const [money, updateMoney] = useState(0);
  const [income, updateIncome] = useState(0);

  document.addEventListener("moneyUpdated", () => {
    updateMoney(MoneyStore.GetMoney());
    updateIncome(MoneyStore.GetIncome());
  });


  
  let buttons = []

  for (let x = 0; x < items.items.items.length; x++) 
    {
      let name = items.items.items[x].name;

      buttons.push(
        <ItemButton key={x} text={name} onClick={() => BuyItem(x)} />
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
}

function BuyItem(itemBought) 
{
  items.BuyItemFromStore(itemBought);
  items.items.items[itemBought].purchase();
}

 export default Sidebar;