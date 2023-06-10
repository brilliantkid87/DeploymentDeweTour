import leaf from './assets/leaf (1) 1.png'

function FooterComponents() {
    return (
      <div className="bg-warning mt-5 position-relative">
        <footer className="p-2 d-flex justify-content-center">
          Copyright @ 2020 Dewe Tour - "" - NIS. All Rights
          reserved
        </footer>
        <img
          src={leaf} // Replace "image-path" with the actual path of your image
          alt="Image"
          style={{
            position: "absolute",
            bottom: "1px",
            right: "1px",
            maxWidth: "200px",
            maxHeight: "12vh",
          }}
        />
      </div>
    );
  }
  
  export default FooterComponents;
  