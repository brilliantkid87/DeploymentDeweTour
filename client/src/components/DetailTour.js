import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import DetailTour2 from "../components/assets/DetailTour2.png";
import DetailTour3 from "../components/assets/DetailTour3.png";
import Rectangle1 from "../components/assets/Rectangle 8 (1).png";
import Rectangle2 from "../components/assets/Rectangle 8 (2).png";
import Rectangle3 from "../components/assets/Rectangle 8 (3).png";
import { Button, Container, Modal } from "react-bootstrap";
import hotel from "../components/assets/hotel 1.png";
import { FormGroup } from "react-bootstrap";
import transaportation from './assets/plane 1.png'
import meal from './assets/meal 1.png'
import time from './assets/time 1.png'
import calender from './assets/calendar 1.png'
import Form from "react-bootstrap/Form";
import Minus from "./assets/Minus.png";
import Plus from "./assets/Plus.png";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cardData2 from "../dummy/FakeCardsTour";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

function CarouselImg() {
  let navigate = useNavigate()
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1);

  const [login] = useContext(UserContext)

  const { data: trip, refetch } = useQuery('tripDetailCache', async () => {
    const response = await API.get('/trip/' + id)
    return response.data.data
  }, { refetchIntervalInBackground: true })
  // console.log(trip);

  let priceTotal = trip?.price * quantity

  const handleIncrement = () => {
    if (quantity < trip?.quota) {
      setQuantity(quantity + 1);
    } else {
      alert("Sisa kuota tidak mencukupi!");
    }
  };


  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpenModal = (index) => {
    setShowModal(true);
    setActiveIndex(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCarouselSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const [state] = useContext(UserContext)
  console.log(state.user.id);

  const handleBuy = useMutation(async (e) => {
    try {
      e.preventDefault();
      refetch()

      const config = {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
      };

      const data = {
        counterqty: quantity,
        total: priceTotal,
        status: "waiting approve",
        attachment: trip.attachment,
        trip_id: trip.id,
        user_id: state.user.id,
      }

      const body = JSON.stringify(data);
      const response = await API.post('/transaction', body, config);
      console.log('add transaction success : ', response);

      const token = response.data.data.token;
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/ProfilePages");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/ProfilePages");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/ProfilePages");
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
      navigate('/ProfilePages');
    } catch (error) {
      console.log("transaction failed : ", error);
    }
  });


  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);


  console.log(trip)
  return (
    <Container>
      <div>
        <h3 className="mt-5">{trip?.title}</h3>

        <h3 className="text-danger">{trip?.country.name}</h3>
        <div className="">
          <div>
            <Image src={trip?.image} style={{ width: "100%" }} />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 overflow-x-hidden">
          <div
            className="mx-5"
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={() => handleOpenModal(0)}
          >
            <img
              src={DetailTour2}
              alt="Image 1"
              style={{ width: "100%", height: "15vh" }}
            />
          </div>
          <div
            className="mx-5"
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={() => handleOpenModal(1)}
          >
            <img
              src={DetailTour3}
              alt="Image 2"
              style={{ width: "100%", height: "15vh" }}
            />
          </div>
          <div
            className="mx-5"
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={() => handleOpenModal(2)}
          >
            <img
              src={Rectangle1}
              alt="Image 3"
              style={{ width: "100%", height: "15vh" }}
            />
          </div>
          <div
            className="mx-5"
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={() => handleOpenModal(3)}
          >
            <img
              src={Rectangle2}
              alt="Image 4"
              style={{ width: "100%", height: "15vh" }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image className="me-2" src={hotel} />
            <Form.Label>{trip?.accommodation}</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image className="me-2" src={transaportation} />
            <Form.Label>{trip?.transportation}</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image className="me-2" src={meal} />
            <Form.Label>{trip?.eat}</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image className="me-2" src={time} />
            <Form.Label>{trip?.day} day {trip?.night} night</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image className="me-2" src={calender} />
            <Form.Label>{trip?.date_trip}</Form.Label>
          </FormGroup>
        </div>
        <div className="mt-5">
          <h5>Description</h5>
          <p >
            {trip?.description}
          </p>
        </div>
        <div className="d-flex justify-content-between mt-5 border-bottom">
          <h5>
            <span className="text-warning">IDR. {(trip?.price)?.toLocaleString()}</span> / Person
          </h5>
          <h5>
            <Image
              src={Minus}
              className="me-3"
              style={{ cursor: "pointer", transition: "0,3 ease" }}
              onClick={handleDecrement}
            ></Image>
            <span className="me-3">{quantity}</span>
            <Image
              src={Plus}
              style={{ cursor: "pointer", transition: "0,3 ease" }}
              onClick={handleIncrement}
            ></Image>
          </h5>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <h5>Total : </h5>
          <h5>
            <span className="text-warning">
              IDR. {(trip?.price * quantity).toLocaleString()}
            </span>
          </h5>
        </div>
        <div className="d-flex justify-content-end mt-2">
          {login?.role === "admin" ? (
            <Button disabled>Kamu bukan user</Button>
          ) : (
            <Button disabled={trip?.quota === 0} onClick={(e) => handleBuy.mutate(e)}>
              Book Now
            </Button>
          )}
        </div>
        <div >
          <Button disabled>
            Available Ticket {trip?.quota}
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="modal-xl">
        <Modal.Body>
          <Carousel activeIndex={activeIndex} onSelect={handleCarouselSelect}>
            <Carousel.Item>
              <img
                src={DetailTour2}
                alt="Image 1"
                style={{ width: "100%", height: "75vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={DetailTour3}
                alt="Image 2"
                style={{ width: "100%", height: "75vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Rectangle1}
                alt="Image 3"
                style={{ width: "100%", height: "75vh" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Rectangle2}
                alt="Image 4"
                style={{ width: "100%", height: "75vh" }}
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CarouselImg;
