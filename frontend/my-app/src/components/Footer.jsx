

function Footer(){
    return(
        <>

        
        
        {/* <!-- Footer --> */}
        
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
            <a href="" className="me-4 text-reset">
                <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="bi-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="bi-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="bi-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i className="bi-github"></i>
            </a>
            </div>
            {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
            <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="bi bi-gem me-3"></i>Casgo
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="bi bi-house me-3"></i> Jaffna, Sri Lanka</p>
                <p>
                    <i className="bi bi-envelope me-3"></i>
                    kajan@gmail.com
                </p>
                <p><i className="bi bi-phone me-3"></i> + 01 234 567 88</p>
                
                </div>
                {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
            </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4 foot">
            © 2024 Copyright:
            <a className="text-reset fw-bold" href="">casgo.com</a>
        </div>
        {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
        
        </>
    )
}

export default Footer;