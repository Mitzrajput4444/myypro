import React from "react";
export default function Categ(){
    return(
        <>
         <section className="grids-1 py-5" id="trip">
    <div className="grids py-lg-5 py-md-4">
      <div className="container">
        <div className="row grids-gap">
          <div className="col-lg-4 align-self">
            <div className="text-left">
              <h3 className="title-left mb-3">Categories</h3>
              <p className="text-para">Curabitur id gravida risus. Fusce eget ex, nisi ac sed,
                lacinia est. Quisque ut lectus, eros et, commodo risus.
                Nullam sit amet laoreet elit. non magna a velit. </p>
            </div>
          </div>
          <div className="col-lg-8 mt-lg-0 mt-md-5 mt-sm-4 mt-2">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 mt-sm-0 mt-4">
                <div className="column">
                  <a href="#single"><img src="myassest/images/recipe.jpg" alt className="img-fluid" /></a>
                  <div className="info">
                    <h4><a href="#single">Recipes</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 mt-sm-0 mt-4">
                <div className="column">
                  <a href="#single"><img src="myassest/images/drinks.jpg" alt className="img-fluid" /></a>
                  <div className="info">
                    <h4><a href="#single">Cooldrinks</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 mt-md-0 mt-4">
                <div className="column">
                  <a href="#single"><img src="myassest/images/video.jpg" alt className="img-fluid" /></a>
                  <div className="info">
                    <h4><a href="#single">How to make</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="w3l-searchblock w3l-homeblock1 py-5">
    <div className="container py-lg-4 py-md-3">
      <div className="most-recent">
        <div className="title-align mb-4">
          <h3 className="title-left">20-Minutes Meals</h3>
          <a href="#blog" className="more-posts"> View more posts <span className="fas fa-arrow-right" /></a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/meal1.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe blue">How to</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">The only 12 curry recipes you’ll Ever Need
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 4, 2020</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item mt-md-0 mt-5">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/meal2.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe orange">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">How to cook French Fries like in a Restaurant
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 3, 2020</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item mt-lg-0 mt-5">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/meal3.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe blue">How to</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Spicy noodles with north indian style
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 3, 2020</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item mt-lg-0 mt-5">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/meal4.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe recipe">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Eat Healthy, Delicious and Perfect Burgers
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 7, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="w3l-bottom" id="newsletter">
    <div className="container">
      <div className="subscribe p-sm-5 p-4">
        <div className="row px-lg-0 py-lg-4 p-2">
          <div className="col-lg-5 header-section mx-auto">
            <h3 className="title-left">Subscribe Newsletter </h3>
            <p className> Get our latest news straight into your inbox</p>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-4">
            <form action="#" method="post" className="subscribe-wthree">
              <div className="d-md-flex flex-wrap subscribe-wthree-field">
                <input className="form-control" type="email" placeholder="Enter your email..." name="email" required />
                <button className="btn btn-style btn-primary" type="submit">
                  <span className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w3l-homeblock1">
    <div className="midd-w3 py-5">
      <div className="container py-lg-5 py-md-3">
        <div className="title-align mb-4">
          <h3 className="title-left">How to make dessert</h3>
          <a href="#blog" className="more-posts"> View more Videos <span className="fas fa-arrow-right" /></a>
        </div>
        <div id="owl-demo1" className="owl-carousel owl-theme mt-4 py-2 mb-md-4 mb-5">
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake1.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe recipe">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">How to make Chocolate troffee crunch cake
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 4, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake2.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe recipe">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">How to make the Easiest pancakes ever
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake3.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe blue">How to</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">How to make the choco buttermilk cake
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 6, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake4.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe orange">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Chocolate truffle cake is you'll ever need
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 6, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake5.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe blue">How to</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">The only 12 curry recipes you’ll Ever Need
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake6.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe blue">How to</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">How to cook French Fries like in a Restaurant
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake7.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe recipe">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Fruit Salad with Honey and Orange Juice
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/cake8.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe orange">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Now, Make money from blogging in easy steps
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/1.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe blue">How to</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Fruit Salad with Honey and Orange Juice
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <div className="card-header p-0 position-relative">
                <a href="#blog-single">
                  <img className="card-img-bottom d-block radius-image" src="myassest/images/2.jpg" alt="Card image cap" />
                </a>
                <div className="post-pos">
                  <a href="#reciepe" className="receipe orange">Reciepe</a>
                </div>
              </div>
              <div className="card-body p-0 blog-details">
                <a href="#blog-single" className="blog-desc">Now, Make money from blogging in easy steps
                </a>
                <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}