"use client";

import ItemButton from './ItemButton'
import items from "@/DataStores/items";

function Sidebar() {
  
  
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

    </div>
  );
}

function BuyItem(itemBought) 
{
  items.BuyItemFromStore(itemBought);
  items.items.items[itemBought].purchase();
}

 export default Sidebar;