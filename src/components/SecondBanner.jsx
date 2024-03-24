import "../App.css";

const styleContainer = {
  height: "100vh", 
  width: "100vw",
  backgroundImage: "url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1200')",
  backgroundSize: '200px 200px',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const styleSecondBanner = {
  backgroundImage: "url('https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=1200')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "90%",
  maxWidth: '830px',
  width: '100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "4rem",
  padding: "0 16px"
}

const styleTitle = {
  fontSize: "2.125rem",
  fontWeight: "600",
  textAlign: "center",
  marginBottom: "40px",
  color: "rgb(26 46 5)"

}

const styleButton = {
  border: "solid white 3px",
  borderRadius: "8px",
  color: "white",
  padding: "8px 24px",
  fontSize: "1.25rem",
  fontWeight: "600",
  cursor: "pointer",
}



export default function SecondBanner() {
  return (
    <section  id="secondBannerContainer" style={styleContainer}>
    <div style={styleSecondBanner} id="secondBanner">
      <h2 style={styleTitle} id="titleBanner">Colecione memórias, não sonhos!</h2>
      <button style={styleButton} id="buttonBanner">ACESSAR GALERIA</button>
</div>
    </section>
  )
}