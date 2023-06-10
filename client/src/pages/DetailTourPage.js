import FooterComponents from "../components/Footer"
import DetailTours from "../components/DetailTour"
import NavLogAfter from "../components/Navbar/NavlogAfter"
import NavbarComponents from "../components/Navbar"


function DetailTourPage() {
    return (
        <div>
            <NavLogAfter />
            <DetailTours />
            <FooterComponents />
        </div>
    )
}

export default DetailTourPage