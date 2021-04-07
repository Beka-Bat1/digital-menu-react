import team1 from '../../assets/media/team1.jpg'
import team2 from '../../assets/media/team2.jpg'
import team3 from '../../assets/media/team3.jpg'


const team = () => {
    return (
        <div className="container teamContainer" style={{ marginTop: "4em"}}>
            <div className="row text-center"> <div className="col-12" style={{"margin-bottom": "5em"}}> <h1 className="yellowText">  <b>Our Team</b> </h1> </div> </div>

            <div className="container">
                <div className="row">
                    <div className="column">
                      <div className="card">
                        <img src={team1} alt="Jane" style={{width:"100%"}} />
                        <div className="container">
                          <h2>Jane Doe</h2>
                          <p className="title">Backend Developer</p>
                          <p>Collaborate with Front-end developers to integrate user-facing elements with server side logic.</p>
                          <p>janeDoe@backendmaster.com</p>
                          <p><button className="button yellowButton">Contact</button></p>
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="card">
                        <img src={team2} alt="Mike" style={{width:"100%"}} />
                        <div className="container">
                          <h2>Mike Ross</h2>
                          <p className="title">Frontend Developer</p>
                          <p>Using markup languages like HTML & CSS to make our webpage user-friendly and flexible.</p>
                          <p>mikeross@frontendmaster.com</p>
                          <p><button className="button yellowButton">Contact</button></p>
                        </div>
                      </div>
                    </div>

                    <div className="column">
                      <div className="card">
                        <img src={team3} alt="John" style={{width:"100%"}} />
                        <div className="container">
                          <h2>John Davies</h2>
                          <p className="title">Designer</p>
                          <p>Visualizing and creating graphics including illustrations, logos and photos.gives our webpage cool and super awsome design.</p>
                          <p>daviesjones@notonefromcarebean.com</p>
                          <p><button className="button yellowButton">Contact</button></p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    );
}

export default team;