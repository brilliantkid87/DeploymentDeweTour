import React, { useState } from "react";
import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import NavLogAfter from "./Navbar/NavlogAfter";
import { Link } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";
import FooterComponents from "./Footer";

function CardsTours(props) {

    const [trips, setTrip] = useState()

    const { data: trip } = useQuery('tripsCache', async () => {
        const response = await API.get('/trips');
        setTrip(response.data.data)
        return response.data.data;
    });

    console.log("Yoman", props.cari);

    // const truncateText = (text, maxLength) => {
    //     if (text.length > maxLength) {
    //       return text.slice(0, maxLength) + "...";
    //     }
    //     return text;
    //   };


    return (
        <>
            <Container>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "",
                        flexWrap: "wrap",
                        position: "relative",
                        border: "none",
                        marginTop: '600px'
                    }}
                >
                    {trips?.filter((data) => {
                        if (props.cari == "") {
                            return data
                        } else if (data?.country?.name?.toLowerCase().includes(props?.cari?.toLowerCase())) {
                            return data
                        } else if (data?.title?.toLowerCase().includes(props?.cari?.toLowerCase())) {
                            return data
                        }

                    }).map((card, index) => (
                        <Card
                            className="shadow p-1 mb-5 bg-white rounded"
                            style={{
                                maxWidth: "400px",
                                marginRight: "20px",
                                borderRadius: "5px",
                                marginTop: "20px",
                            }}
                            key={index}
                        >
                            <Image
                                style={{ Width: "100%", Height: "10vh" }}
                                variant="top"
                                src={card.image}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/DetailTourPage/${card.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        {(card?.title).substring(0, 35)}...
                                        {/* {truncateText(card.title, 100)} */}
                                    </Link>
                                </Card.Title>
                            </Card.Body>
                            <div
                                style={{ padding: "16px" }}
                                className="d-flex justify-content-between"
                            >
                                <p className="text-warning">IDR. {(card.price).toLocaleString()}</p>
                                <p>{card.country.name}</p>
                            </div>
                            <p
                                style={{
                                    position: "absolute",
                                    top: "10%",
                                    right: "0",
                                    borderRadius: "5px",
                                    backgroundColor: "white",
                                }}
                            >
                                {card.quota === 0 ? "Sold Out" : card.quota}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
            {/* <FooterComponents /> */}
        </>

    );
}

export default CardsTours;
