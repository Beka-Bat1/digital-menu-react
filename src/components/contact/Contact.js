const contact = () => {
  return (
    <div class="container-fluid" style={{marginTop: "4em"}}>
      <div class="row">
        <div class="col-xl-6">
          <div class="form-group formGroup">
            <div class="row">
              <div class="col-3">
                <label>Name:</label>
              </div>
              <div class="col-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  id="usr"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <label>LastName:</label>
              </div>
              <div class="col-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Surname"
                  id="usr"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <label for="exampleFormControlInput1">E-mail:</label>
              </div>
              <div class="col-9">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="excisting@mail.com"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <label>Fill the blank:</label>
              </div>
              <div class="col-9">
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="i want to let you know ..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              id="button1"
              class="btn btn-primary btn-block "
              value="submit"
            >
              <h2>Send</h2>
            </button>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="map-responsive" id="contactMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.866028003787!2d44.79605417504843!3d41.70898085045588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd87a77885d%3A0x50c1fc9db0ce7b4!2s9%20Saint%20Petersburg%20Street%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1607112029026!5m2!1sen!2sge"
              width="600"
              height="450"
              frameborder="0"
              style={{border:0}}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
