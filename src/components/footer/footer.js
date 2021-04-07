import logo from '../../assets/media/logo.svg';


const footer = () => {
    return (
        <>
        <footer>
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-md-6">
                    <img src={logo} alt="logo"/>
                       <h3>Fox Menu</h3>
                    <p><i className="fas fa-paper-plane"></i>   Email: foxmenu@gmail.com</p>
                    <p><i className="fas fa-map-marked"></i>  Address: Georgia, Tbilisi, Saburtalo, Aleksandre Kazgebi Av.34/34B</p>
                </div>
                <div className="map-column col-md-6">
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.866028003787!2d44.79605417504843!3d41.70898085045588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd87a77885d%3A0x50c1fc9db0ce7b4!2s9%20Saint%20Petersburg%20Street%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1607112029026!5m2!1sen!2sge" width="600" height="450" frameBorder="0" style={{border: "0px"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>
                </div>
            </div>
        </div>
    </footer>
    </>
    );
};

export default footer;