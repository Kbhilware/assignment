import React from 'react'

const Banner = () => {
  return (
    <>
     <section className="position-relative overflow-hidden pt-5 pt-lg-3">
	<div className="container">
		
		<div className="row mb-4 bannerImg-top justify-content-center align-items-center font-dm">
			<div className="col-lg-6 display-6 m-center">
				<span className="d-block pb-3">Unlock <span className="bannerText">your</span></span>
				<span className="d-block pb-3">online growth</span>
				Potential <span className="buttonGapBorder-wrap"><button className="buttonGapBorder">Yes</button></span><br/>
				<div className="mt-5 pt-2 d-flex m-center align-items-center">
				<button className="btn btn-outline-primary">Our Product</button>
				<span className="play-wrap d-flex justify-content-center align-items-center"><span className="icons-property play-icon"></span></span>
			</div>
			</div>
			<div className="col-lg-6 text-end mb-5 d-flex m-center">
				<img className='img-fluid' src="images/header-right.svg" alt="/" />
			</div>
		</div>
		<div className="row mb-4 justify-content-center align-items-center">
			<div className="col-lg-6">
				<div className="bannerStrip">
					<div className="bannerStripContent">
						<ul className="d-flex align-items-center justify-content-between">
							<li>
								<img src="images/upgrade-arrow.svg" alt="/" />
							</li>
							<li>
								Drive your money to<br/>work smarter than others
							</li>
							<li>
								A safe and secure invesment nedd guided aproach with real time analytics and risk analysis , we can help you to catch all at once.
							</li>
						</ul>
						<div className='clr'></div>
					</div>
			</div>
			</div>

		</div>
	</div>
</section> 
<div className="signupStrip">
	<div className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-6">
					<h2 className="text-center">Signup Now & Get</h2>
					<ul className="row">
						<li className="col-lg-4">
							<h4>Early Access</h4>
							<p>You'll be priorities from<br/>the pool of millioins</p>
						</li>
						<li className="col-lg-4">
							<h4>Zero Brokerage</h4>
							<p>You'll be priorities from<br/> the  pool of millioins</p>
						</li>
						<li className="col-lg-4">
							<h4>Zero Processing charges</h4>
							<p>You'll be priorities from<br/> the pool of millioins</p>
						</li>

					</ul>
				</div>

			</div>

	</div>
</div>
    </>
  )
}

export default Banner
