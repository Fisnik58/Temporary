import "@/styles/globals.css";
import react from "react";
import React, { useState } from "react";
import { Color } from "three";
import Nav from "./nav";
import SmoothScroll from "./smoothScroll";
import ElusionOp from "./ElusionOp.";
import { useEffect } from 'react';
import { useRouter } from 'next/router';




export default function App({ Component, pageProps }) {
  const [showElusionOp, setShowElusionOp] = useState(false);
  const handleElusionOpClick = () => {
    setShowElusionOp(true);
  };

  const CharacterSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  
    const showSlide = (n) => {
      const slides = document.getElementsByClassName('slide');
      let newIndex = slideIndex + n;
  
      if (newIndex >= slides.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
  
      setSlideIndex(newIndex);
    };
  }


  return (
    <>
      {/* navbar */}
     
        {showElusionOp ? (
        <ElusionOp />
      ) : (
        <div>
          {
            <div className="whole-container" style={{ backgroundColor: "" }}>
           <nav className="navbar navbar-expand-xl navbar-light" style={{ backgroundColor: "#cb20ff" }}>
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/newlogo (2) (1).png" width={200} className="img2" alt="Logo" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item li">
          <a className="nav-link Bozo scroll-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo Bozo-change scroll-link" href="#aboutus" >
            AboutUs
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo scroll-link" href="#">
            Roadmap
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo" href="#" onClick={handleElusionOpClick}>
            ElusionOP
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo" href="#">
            Stake
          </a>
        </li>
        <li className="nav-item li">
          <a className="nav-link Bozo" href="#">
            Whitepaper
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link Bozo"
            href="https://pancakeswap.finance/swap?outputCurrency=0x7704d0EaD6F74E625d7371b079D8b2475bc852d4&inputCurrency=BNB"
            target={"_blank"}
          >
            <button className="btn btn-info">Buy on Pancakeswap</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            <div className="container">
              <div className="row row-of-elusion">
                <div className="col-md-12 col-lg-12 col-xl-6">
                  <h1 className="Elusion-Header text-center">
                    Welcome to the Blockchain of{" "}
                    <span className="els">Elusion</span>
                  </h1>
                  <h4 className="Elusion-Text text-center ">
                    Unleashing the Power of AI: Envisioning a New Era with Elusion
                    Where Artificial Intelligence Meets Crypto Brilliance!
                  </h4>
                </div>
                <div class="mx-auto">
  <div class="col-12 col-md-12 col-lg-12 col-xl-6 mdd">
    <img class="fade-in" src="/newlogo.png" />
  </div>
</div>
              </div>
            </div>
    

            <div className="container container-of-ElusionOp"style={{ backgroundColor:"purple"}}>
            <div style={{paddingLeft:"3%"}}>
            <div className="row">
  <div className="col-3 col-lg-3 col-md-3 text-center col-sm-3" style={{ paddingTop: "2%", color: "white" }}>
    <h1 className="mx-auto elusion-op">ElusionOP</h1>
  </div>
  <div className="col-lg-5 col-5 offset-3 offset-lg-4 col-md-5 offset-md-4 col-sm-5 offset-sm-3 text-center">
    <img className="mx-auto pets" src="/pets.png" width={"80%"} style={{ paddingTop: "1%" }} />
  </div>
</div>

            </div>
            <div className="container container-of-play-to-earn" style={{ backgroundColor: "#cb20ff" }}>
  <div className="row" style={{ paddingTop: "1%" }}>
    <div className="col-xl-4 col-lg-12 mx-auto"> {/* Add mx-auto class here */}
      <h2 className="text-center  header-of-earn-1" style={{ color: "purple" }}>Play to earn</h2>
      <h5 className="text-center text-of-earn-1" style={{ color: "white" }}>Embark on an exhilarating journey with "Elusion," the ultimate play-to-earn game that combines thrills, challenges, and rewards like never before. In the fantastical realm of Elusion, you'll discover a world filled with untold riches and opportunities and opportunities</h5>
    </div>
    <div className="col-xl-4 col-lg-12 mx-auto"> {/* Add mx-auto class here */}
      <h2 className="text-center" style={{ color: "purple" }}>Characters</h2>
      <h5 style={{ color: "white" }} className="text-center text-of-earn-m text-of-earn-2">In "Elusion," a multitude of captivating characters awaits your discovery within the mystical realm. From seasoned warriors to enigmatic sorcerers, each character possesses unique abilities and backgrounds that add depth to the immersive gaming experience.</h5>
    </div>
    <div className="col-xl-4 col-lg-12 mx-auto"> {/* Add mx-auto class here */}
      <h2 className="text-center" style={{ color: "purple" }}>Rewards</h2>
      <h5 style={{ color: "white" }} className="text-center text-of-earn-3">Discover hidden caches of digital assets that hold immense value within the blockchain-based economy of Elusion. As you conquer formidable quests and rise through the ranks, you'll earn tokens that grant you access to exclusive features, rare cosmetic items, and coveted in-game.</h5>
    </div>
  </div>
</div>

             {/* <div className="container mx-auto" style={{padding:'0',paddingTop:"1.4%"}}>
  <div className="row mx-auto">
    <div className="col-xl-4" style={{backgroundColor:"#cb20ff",paddingRight:"1%",borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"}}>
      <img src="/character1.png" width={"60%"} className="d-block mx-auto" style={{ paddingLeft: "-3%" }} />
      <h2 className="text-center" style={{color:"white"}}>Reptile</h2>
    </div>
    <div className="col-xl-4" style={{backgroundColor:"#cb20ff"}}>
      <img src="/character2.png" width={"62.5%"} className="d-block mx-auto" />
      <h2 className="text-center" style={{color:"white"}}>Aquatic</h2>
    </div>
    <div className="col-xl-4" style={{backgroundColor:"#cb20ff",borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}>
      <img src="/character3.png" width={"58%"} className="d-block mx-auto" />
      <h2 className="text-center" style={{color:"white"}}>Beast</h2>
    </div>
  </div>
</div> */}


          </div>



            <div style={{ backgroundColor: "" }}>
              <div className="container container-of-exchanges">
                <div className="row text-center">
                  <div className="text-center mx-auto">
                    <h1
                      style={{
                        color: "white",
                        paddingTop: "20%",
                        paddingBottom: "20%",
                      }}
                      className="text-center"
                    >
                      Exchanges & Partnerships
                    </h1>
                  </div>
                </div>
               
    <div className="row mx-auto justify-content-center d-flex bbb">
          <div className="cmc">
            <img src="./cmc.png" />
          </div >
          
          <div className="cg">
            <img src="./cg.png" />
          </div>
          
          <div className="pc">
            <img src="./pancakeSwap.png" width={"90%"}/>
          </div>
          <div className="ct">
            <img src="./ct.png" />
          </div>
          <div className="mexc">
            <img src="./mexc.png" />
          </div>
         
          <div className="nuls">
            <img src="./nuls.png" />
          </div>
    
    </div> 
    
              </div>
            </div>
    
            {/* part2 meet our team */}
    
            <div className="container">
              <div className="">
                <h1
                  className="text-center header-of-tekonomics"
                  style={{ paddingTop: "15%", color: "whitesmoke" }}
                >
                  Tokenomics
                </h1>
              </div>
                <div className="row d-flex mx-auto" style={{height:"30%"}}>
                      <div className="col-lg-3 about-tokenomic about-tokenomic-1 mx-auto">
                        <h4 className="text-center" style={{ color: "yellow" }}>Public Sale</h4>
                        <p className="text-center ">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>
                      </div>
                      <div className="col-lg-3 about-tokenomic mx-auto">
                        <h4 className="text-center" style={{ color: "#ED5174" }}>Cex listings</h4>
                        <p className="text-center">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>

                      </div>
                      <div className="col-lg-3 about-tokenomic mx-auto">
                        <h4 className="text-center" style={{ color: "#FD8963" }}>Burned</h4>
                        <p className="text-center">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>

                      </div>
                      <div className="col-lg-3 about-tokenomic about-tokenomic-4 mx-auto">
                        <h4 className="text-center"  style={{ color: "#FA26CA" }}>Marketing</h4>
                        <p className="text-center">The allocation of 50% of tokens for a public sale implies that half of the total token supply is reserved for public investors. </p>

                      </div>
                </div>
              <div className="row mx-auto row-of-tekonomics">
                <div className="col-lg-6 background-image tokenomics-1 mx-auto">
                  <img src="./download.png" className="img-of-token" />
                </div>
                <div className="col-lg-6 tokenomics-2">
                  <div style={{ height: "25%" }}>
                    <ul className="d-flex justify-content-between ul-1 ul-2">
                      <li className="">
                        <h4>
                          50%<sub style={{ color: "yellow" }}>Public Sale</sub>
                        </h4>
                        <p></p>
                      </li>
                      <li className="text-end">
                        <h4 className="text-end">50,000,000,000,000,000</h4>
                        <p className="text-end">Tokens</p>
                      </li>
                    </ul>
                    <ul className="d-flex justify-content-between ul-1 ul-3">
                      <li>
                        <h4>
                          15%<sub style={{ color: "#ED5174" }}>Cex listings </sub>
                        </h4>
                        <p></p>
                      </li>
                      <li>
                        <h4>15,000,000,000,000,000</h4>
                        <p>Tokens</p>
                      </li>
                    </ul>
                    <ul className="d-flex justify-content-between ul-1 ul-4">
                      <li>
                        <h4>
                          30%<sub style={{ color: "#FD8963" }}>Burned</sub>
                        </h4>
                        <p></p>
                      </li>
                      <li>
                        <h4>15,000,000,000,000,000</h4>
                        <p>Tokens</p>
                      </li>
                    </ul>
                    <ul
                      className="d-flex justify-content-between ul-5 ul-1"
                      style={{ marginBottom: 0 }}
                    >
                      <li>
                        <h4>
                          5%<sub style={{ color: "#FA26CA" }}>Marketing</sub>
                        </h4>
                        <p></p>
                      </li>
                      <li>
                        <h4>5,000,000,000,000,000</h4>
                        <p>Tokens</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
            </div>
    
            <div className="container2">
              <div className="container contr">
                <div className="">
                  <div>
                    <h1
                      className="text-center  meetteamtext"
                      style={{ color: "white" }}
                    >
                      Meet our team
                    </h1>
                  </div>
                </div>
              
                <div className="row rowwww"style={{paddingTop:"5%"}}>
                  <div
                    className="col-sm-6 col-xl-3 col-lg-6  col-md-6 rowww1"
                    id="aboutus"
                  >
                    <div
                      className="card mx-auto bg-dark card-1 cardi"
                      style={{ width: "16rem" }}
                    >
                      <img
                        className="card-img-top"
                        src="1.png"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Sonic</h5>
                        <p className="card-text">Ceo</p>
               
                        
                      </div>
                    </div>
                  </div>
    
                  <div className=" col-sm-6 col-xl-3 col-lg-6 col-md-6 rowww2">
                    <div
                      className="card mx-auto bg-dark card-2 cardi"
                      style={{ width: "16rem" }}
                    >
                      <img
                        className="card-img-top"
                        src="2.png"
                        alt="Card image cap"
                        width={"100%"}
                      />
                      <div className="card-body">
                        <h5 className="card-title ">Nexus</h5>
                        <p className="card-text">Co-founder</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-sm-6 col-xl-3 col-lg-6  col-md-6 rowww3">
                    <div
                      className="card mx-auto bg-dark card-3 cardi"
                      style={{ width: "16rem" }}
                    >
                      <img
                        className="card-img-top"
                        src="3.png"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Ludwig</h5>
                        <p className="card-text">Web Developer</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-sm-6 col-xl-3 col-lg-6  col-md-6 rowww4">
                    <div
                      className="card mx-auto bg-dark card-4 cardi"
                      style={{ width: "16rem" }}
                    >
                      <img
                        className="card-img-top"
                        src="4.png"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Brooklyn</h5>
                        <p className="card-text">Marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              
              </div>
              <br />
              <br />
              <br />
            </div>
         
          <br/>
        </div>
          }
        </div>
      )}

        {/* part1 about the coin */}
        

      <script src="./"></script>
    </>
  );
}
