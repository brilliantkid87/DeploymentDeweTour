import FooterComponents from "../components/Footer";
import PaymentCard from "../components/Payment/Payment";
import NavLogAfter from "../components/Navbar/NavlogAfter";


function WaitingPayment() {
    return (

        <div>
            <NavLogAfter />
            <PaymentCard />
            <FooterComponents />
        </div>
    )
}

export default WaitingPayment