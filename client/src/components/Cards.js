import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import cardData from '../dummy/fakedata';
import Container from 'react-bootstrap/Container';

function CardComponents() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '100px',
          zIndex: "1",
          flexWrap: 'wrap',
        }}
      >
        {cardData.map((card, index) => (
          <Card
            className='me-3 shadow p-3 mb-5 bg-white rounded'
            style={{ width: '15rem', top: '-50px', marginBottom: '20px' }}
            key={index}
          >
            <Image
              className='m-auto'
              style={{ width: '70px', height: '70px' }}
              variant='top'
              src={card.image}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default CardComponents;



// function CardComponents() {
//     return (
//         <>
//             <div style={{  display: 'flex', justifyContent: 'left'}}>
//                 <Card className='me-5' style={{ width: '15rem', left: '100px', marginLeft: '100px'}}>
//                     <Image className='m-auto' style={{ width: '5rem'}} variant="top" src={CardImg} />
//                     <Card.Body>
//                         <Card.Title>Best Price Guarantee</Card.Title>
//                         <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>

//                 <Card className='me-5' style={{ width: '15rem', left: '100px'}}>
//                     <Image className='m-auto' style={{ width: '5rem'}} variant="top" src={CardImg2} />
//                     <Card.Body>
//                         <Card.Title>Best Price Guarantee</Card.Title>
//                         <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>

//                 <Card className='me-5' style={{ width: '15rem', left: '100px'}}>
//                     <Image className='m-auto' style={{ width: '5rem'}} variant="top" src={CardImg3} />
//                     <Card.Body>
//                         <Card.Title>Best Price Guarantee</Card.Title>
//                         <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>

//                 <Card className='me-5' style={{ width: '15rem', left: '100px'}}>
//                     <Image className='m-auto' style={{ width: '5rem'}} variant="top" src={CardImg4} />
//                     <Card.Body>
//                         <Card.Title>Best Price Guarantee</Card.Title>
//                         <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>


//             </div>
//         </>
//     )
// }