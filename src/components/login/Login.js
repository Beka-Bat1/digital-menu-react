

const login = () => {
    return(
    <section>
        <div className="container registerForm">
            <div className="container-fluid registerForm">
                <form action="/login" method="post">
                    <div className="form-group">
                      <label htmlFor="username">Email address</label>
                      <input type="email" className="form-control" name="username" id="username" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" id="password" />
                    </div>

                    <div className="row " style={{ marginTop: "2em", marginLeft: ".1em" }} >
                        <button type="submit" className="btn btn-primary">Login</button>
                        <a href="login.html"><p style={{ textDecoration:"underline", marginLeft:"2em"}}> Forgot Password? </p> </a>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
}

export default login;