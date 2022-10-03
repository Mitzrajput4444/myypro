import React from "react";
export default function Home() {
   
    function TopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log("hi");
    }
    
    return (
        <>
<div>
  <div className="w3l-banner py-2">
    <div className="container py-lg-3 py-md-3">
      <div className="ban-content-inf row py-lg-3">
        <div className="maghny-gd-1 col-lg-8">
          <div className="maghny-grid">
            <figure className="effect-lily border-radius">
              <img className="img-fluid radius-image" src="myassest/images/1.jpg" alt />
              <figcaption className="w3set-hny">
                <div className="info">
                  <a href="#reciepe" className="receipe">Reciepe</a>
                  <h4 className="top-text">Amazing Milk Chocolate Cupcakes with Buttercream</h4>
                  <p className="mt-2 d-sm-block d-none">Lorem ipsum dolor sit amet elit. Vitae nostrum ipsum vero
                    tempore esse, eaque omnis culpa quo placeat?</p>
                  <div className="p-footer">
                    <aside className="p-meta-info">
                      <a href="#img" className="post-img-anchor">
                        <img src="myassest/images/a1.jpg" alt className="post-img" />
                      </a>
                      <a href="#url">Elizabeth</a>
                      <span className="meta-info-date">
                        <span className="fa fa-clock-o" /> Oct 3, 2020
                      </span>
                    </aside>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="maghny-gd-1 col-lg-4 mt-lg-0 mt-4 mobile-grid">
          <div className="maghny-gd-1">
            <div className="maghny-grid">
              <figure className="effect-lily border-radius">
                <img className="img-fluid radius-image" src="myassest/images/2.jpg" alt />
                <figcaption>
                  <div>
                    <h4 className="top-text1">Amazing Milk Chocolate Cupcake with cream</h4>
                    <aside className="p-meta-info">
                      <span className="meta-info-el meta-info-custom">
                        <span className="fa fa-clock-o mr-2" />10 Min Cook
                      </span>
                    </aside>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="maghny-gd-1 mt-lg-4">
            <div className="maghny-grid">
              <figure className="effect-lily border-radius">
                <img className="img-fluid radius-image" src="myassest/images/3.jpg" alt />
                <figcaption>
                  <div>
                    <h4 className="top-text1">The Best Chewy Chocolate Chip Cookies Recipe</h4>
                    <aside className="p-meta-info">
                      <span className="meta-info-el meta-info-custom">
                        <span className="fa fa-bell-o mr-2" />Sponsered by
                        <strong>Johnson</strong>
                      </span>
                    </aside>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ad-image text-center pb-lg-5">
    <div className="container">
      <h6 className="advert-decs">- Advertisement -</h6>
      <a className="widget-ad-link" target="_blank" href="#url">
        <img src="myassest/images/ad.jpg" alt="- Advertisement -" className="radius-image img-fluid" /></a>
    </div>
  </div>

 
  <button onClick={TopFunction} id="movetop" title="Go to top">
    ⤴
  </button>
</div>

        </>
    )
}