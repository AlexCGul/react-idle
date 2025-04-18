import Plant from "@/Components/Plant"
import "@/Components/Sidebar"
import Sidebar from "../Components/Sidebar"

export default function Home() {
  return (
    <div className = "flex">
      <Sidebar />

      <Plant />
      <Plant />

      <Plant />

    </div>
  )
  
  }