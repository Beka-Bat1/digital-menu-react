const register = () => {
  return (
    <section>
      <div class="container registerForm">
        <div class="container-fluid registerForm">
          <form action="/register" method="post">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="username"
                class="form-control"
                id="username"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="password"
              />
            </div>
            <div class="form-group">
              <label for="password2">Repeat Password</label>
              <input
                type="password"
                name="password2"
                class="form-control"
                id="password2"
              />
              <div
                class="row "
                style={{ "margin-top": "2em", "margin-left": "0%" }}
              >
                <div class="col-sm-3 col-2" style={{ "margin-left": "0px" }}>
                  <button
                    id="registerButton"
                    type="submit"
                    class="btn btn-primary"
                    style={{ "margin-left": "0%" }}
                  >
                    Register
                  </button>
                </div>
                <div class="row align-bottom">
                  <a href="\login">
                    <p style={{ "text-decoration": "underline" }}>
                      {" "}
                      Already a Member?{" "}
                    </p>{" "}
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default register;
