import ItemButton from './ItemButton'

function Sidebar() {
  return (
    <div className = "top-0 left-0 h-screen flex flex-col bg-amber-950" >
      <h2>Sidebar</h2>
        <ItemButton text="WHYME"/>
        <ItemButton text="WHYME"/>
        <ItemButton text="WHYME"/>
    </div>
  );
}
 export default Sidebar;