"use client";

import { Console, log } from 'console';
import ItemButton from './ItemButton'
import BuyItemFromStore from '../DataStores/items';

function Sidebar() {
  
  return (
    <div className = "top-0 left-0 h-screen flex flex-col bg-amber-950" >
      <h2>Sidebar</h2>
        <ItemButton text="WHYME" onClick={() => BuyItem(0)} />
        <ItemButton text="WHYME" onClick={() => BuyItem(1)}/>
        <ItemButton text="WHYME" onClick={() => BuyItem(2)}/>
    </div>
  );
}

function BuyItem(itemBought) 
{
  console.log("layert 1")
  BuyItemFromStore(itemBought);
}

 export default Sidebar;