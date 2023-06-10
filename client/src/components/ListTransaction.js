// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import SearchIcon from "./assets/search 1.png";
// import Image from "react-bootstrap/Image";
// import PaymentCardWaitingApprove from "./Payment/PaymentApprove";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function ListTransactionAdmin() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <Container>
//       <div className="mt-5">
//         <h3>Incoming Transaction</h3>
//         <table className="table table-success table-striped">
//           <thead>
//             <tr>
//               <th scope="col">No</th>
//               <th scope="col">Users</th>
//               <th scope="col">Trip</th>
//               <th scope="col">Bukti Transfer</th>
//               <th scope="col">Status Payment</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Radif Ganteng</td>
//               <td>6D/4N Fun Tassie Vaca ...</td>
//               <td>bca.jpg</td>
//               <td>Pending</td>
//               <td>
//                 <button
//                   type="button"
//                   class="btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   <Button variant="primary" onClick={handleShow}>
//                     <Image src={SearchIcon} />
//                   </Button>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Radif Ganteng</td>
//               <td>6D/4N Fun Tassie Vaca ...</td>
//               <td>bca.jpg</td>
//               <td>Pending</td>
//               <td>
//                 <button
//                   type="button"
//                   class="btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   <Button variant="primary" onClick={handleShow}>
//                     <Image src={SearchIcon} />
//                   </Button>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Radif Ganteng</td>
//               <td>6D/4N Fun Tassie Vaca ...</td>
//               <td>bca.jpg</td>
//               <td>Pending</td>
//               <td>
//                 <button
//                   type="button"
//                   class="btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   <Button variant="primary" onClick={handleShow}>
//                     <Image src={SearchIcon} />
//                   </Button>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <Modal className="modal-xl" show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <PaymentCardWaitingApprove />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button className="bg-danger" variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button className="bg-success" variant="primary" onClick={handleClose}>
//             Approve
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }

// export default ListTransactionAdmin;

import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchIcon from "./assets/search 1.png";
import Image from "react-bootstrap/Image";
import PaymentCardWaitingApprove from "./Payment/PaymentApprove";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cardData3 from "../dummy/listtx";
import { useQuery } from "react-query";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import ProfilePages from "../pages/ProfilesPage";

function ListTransactionAdmin() {
  const [index, setIndex] = useState()

  // const [state] = useContext(UserContext)
  const { data: listTrans } = useQuery('listTransCache', async () => {
    const response = await API.get('/transactions')
    return response.data.data
  })
  console.log("yoman", listTrans);

  // const { data: transData, refetch } = useQuery("transIdCache", async () => {
  //   const response = await API.get("/transaction/" + index)
  //   return response.data.data
  // })
  // console.log(transData);
   
  // useEffect(() => {
  //   refetch()
  // }, [index])


  // console.log("yoman :", index);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div className="mt-5">
        <h3>Incoming Transaction</h3>


        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Trip</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {listTrans?.map((data, index) => (
            <tbody>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data?.User?.name}</td>
                <td>{data?.trips.title}</td>
                <td>{data?.status}</td>
                <td>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <Button 
                      variant="primary"
                      onClick={() => {
                        handleShow()
                        setIndex(data?.id)
                      }
                      }>
                      
                      <Image  />
                    </Button>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>


      </div>

      <Modal className="modal-xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="shadow p-3 mt-5 mb-5 bg-body-tertiary rounded border">
            <div className="d-flex justify-content-between ">
              <div>
                {/* <Image src={Logo} /> */}
              </div>

              <div>
                <p>Booking</p>
                <p>
                  Saturday, <span>27 agustus 2023</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-3 mb-sm-0">
                <div className="">
                  <div className="card-body">
                    {/* <h5 className="card-title">{transData?.trips?.title}</h5> */}
                    <p className="card-text">
                    {/* {data.trips.country.name} */}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="card-body ">
                    <p className="card-text text-success">
                      Approve
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <div className="card-body">
                    <h5 className="card-title">Date Trip</h5>
                    <p className="card-text">
                      {/* {data.trips.date_trip} */}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Accommodation</h5>
                    <p className="card-text">
                      {/* {data.trips.accommodation} */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <div className="card-body">
                    <h5 className="card-title">Duration</h5>
                    <p className="card-text">
                      {/* {data.trips.day} Day {data.trips.night} Night */}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Transporartion</h5>
                    <p className="card-text">
                      {/* {data.trips.transportation} */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 d-flex justify-content-end">
                <div className="">
                  <div className="card-body">
                    {/* <Image src={QRcode} /> */}
                  </div>
                </div>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Phone</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  {/* <td>{data?.User.name}</td> */}
                  <td>Male</td>
                  {/* <td>{data?.User.phone}</td> */}
                  <td>Qty</td>
                  <td>:</td>
                  {/* <td>{data?.counterqty}</td> */}
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>:</td>
                  {/* <td className="text-warning">IDR. {(selectorId?.price * quantity).toLocaleString()}</td> */}
                  {/* <td className="text-warning">IDR. {(data?.total).toLocaleString()}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-danger" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="bg-success" variant="primary" onClick={handleClose}>
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ListTransactionAdmin;

