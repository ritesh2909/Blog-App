import React from 'react'

function Carousel() {
    return (
        <div style={{"height": "70vh"}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{"height": "70vh"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{"height": "70vh"}}>
                    <div className="carousel-item active">
                        <img src="https://miro.medium.com/max/1400/0*rRQsOzEYydH7-NOh" className="d-block w-100" alt="..." />
                           
                    </div>
                    <div className="carousel-item" style={{"height": "70vh"}}>
                        <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..." />
                            
                    </div>
                    <div className="carousel-item" style={{"height": "70vh"}}>
                        <img src="https://media.istockphoto.com/photos/the-perfect-setting-to-complete-work-picture-id1251629816?k=20&m=1251629816&s=170667a&w=0&h=XltqyIesyKkOjYSBb7JrR_14YXcSC1nkOa_nT_T2YDw=" className="d-block w-100" alt="..." />
                            
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel