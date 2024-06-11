import { Outlet } from "react-router-dom"
import Sidebar from "../../components/ul/sidebar/sidebar"
import Header from "../../components/ul/header/header"
import ResponsiveDrawer from "../../components/layout"
import "./main.css"
const Main = () => {
  return (
    <div>
      <ResponsiveDrawer />
    </div>
  )
}

export default Main
