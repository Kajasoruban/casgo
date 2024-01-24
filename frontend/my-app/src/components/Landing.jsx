import { Link } from "react-router-dom";



function Landing(){
    return (
        <>

    
       
            
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            
            </div>

            <div class="carousel-inner">
            <div class="carousel-item active c-item">
                <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" class="d-block w-100 c-img" alt="Slide 1"/>
                <div class="carousel-caption top-0 mt-4">
                <p class="mt-5 fs-3 text-uppercase">Are you looking for a part time job in your weekends?</p>
                <h1 class="display-1 fw-bolder text-capitalize">Do Extra Earn Extra</h1>
                <Link to="/jobseeker">
                <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Go</button>
                </Link>
                </div>
            </div>
            <div class="carousel-item c-item">
                <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" class="d-block w-100 c-img" alt="Slide 2"/>
                <div class="carousel-caption top-0 mt-4">
                <p class="text-uppercase fs-3 mt-5">Are you looking for part time workers on your busy days?</p>
                <p class="display-1 fw-bolder text-capitalize">Your are at the right place</p>
                


                     <Link to="/jobgiver">
                     <button class="btn btn-primary px-4 py-2 fs-5 mt-5">Go</button>
                     </Link>
                            

                </div>
            </div>
            
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>

         
            



        
       
        

        </>
    )
}

export default Landing;