import NavbarComponents from "../components/Navbar"
import CardsTour from "../components/CardsTour"
import CardComponents from "../components/Cards"
import FooterComponents from "../components/Footer"
import ListTransactionAdmins from "../components/Admin/ListTransactionAdmin"
import { Link } from "react-router-dom"
import CardsTours from "../components/CardsTour"


function Home() {
    return (
        
        <div>
           
            <div>
                <NavbarComponents />
                <CardComponents />
                {/* <CardsTours /> */}
                {/* <FooterComponents /> */}

            </div>
        
        </div>
    )
}

export default Home