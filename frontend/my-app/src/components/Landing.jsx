


function Landing(){
    return (
        <>

    <div className="position-relative w-100 land">
        <div className="position-absolute text-white d-flex flex-column align-items-start justify-content-center" >
            <div className="container">
            <div className="col-md-6 doex">
                <span  className="text-uppercase"></span>
                {/* <!-- on small screens remove display-4 --> */}
                <h1 className="mb-4 mt-2 display-4 font-weight-bold">Do<span>Extra</span></h1>
                <h1 className="mb-4 mt-2 display-4 font-weight-bold">Earn<span>Extra</span></h1>
                <p>Are you looking for Part time jobs in your Weekends?
                <br/>You found the right place </p>
                <div className="mt-5">
                {/* <!-- hover background-color: white; color: black; --> */}
                <a href="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0">Go</a>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default Landing;