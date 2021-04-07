import pic2 from '../../assets/media/pic2.jpeg';
import review1 from '../../assets/media/review1.jfif';
import review2 from '../..//assets/media/review2.jfif';


const about = () => {
  return (
    <>
      <div
        class="container-fluid d-flex justify-content-between"
        id="aboutContainer"
      >
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-xs-12 col-sm-6 col-md-8">
            <h1 class="yellowText text-center">About Fox Menu</h1>
            <p class="justify-text">
              Fox Menu is a growing technology company that serves hospitality
              industry, offering a Software as a Service menu platform and a
              tablet application to help restaurants, cafes, bars and hotels
              increase sales and lower operational costs. We are operating
              worldwide and currently serving hundreds of restaurants in more
              than fifty countries.
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <img
              id="rightImage"
              src={pic2}
              alt="cafeimage"
            />
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="container">
          <div class="cotainer fh5co-reviews-outer" style={{height: "100px"}}>
            <h1>What people are saying</h1>
          </div>
          <div class="row text-center">
            <div class="review col-xs-8 col-sm-6 col-md-6 ">
              <div class="col-md-5 card mb-3" style={{ "max-width": "540px"}}>
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={review1}
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Kavita Walker</h5>
                      <p class="card-text">
                        Thank you very much, platform is great. flexible and
                        powerful tool to manage restaurant digital menu.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Posted 3 months ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="review col-xs-8 col-sm-6 col-md-6">
              <div
                class="col-md-5 col-xs-12 col-md-6 card mb-3"
                style={{"max-width": "540px"}}
              >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={review2}
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Ali Nabih</h5>
                      <p class="card-text">
                        The group is amazing, this platform helped my business
                        grow a lot. Especially during COIV-19 it's extremally
                        useful. Reccomend.{" "}
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Posted 1 week ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;