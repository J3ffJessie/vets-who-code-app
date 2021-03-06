import React from 'react'
import FluidImage from '../components/FluidImage'
import PageHeader from '../components/PageHeader'

function Donate() {
  return (
    <>
      <PageHeader title="donate" />
      <section id="cause_single" className="cause_single section bg-default single pad-regular">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Help Us Continue To Train More Veterans</h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="iframe-container embed-responsive">
                <iframe
                  src="https://donorbox.org/embed/vetswhocode-donation?show_content=true"
                  seamless="seamless"
                  name="donorbox"
                  scrolling="yes"
                  allowpaymentrequest="true"
                  frameBorder={0}
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cause_single section bg-default single pad-regular"
        style={{ paddingTop: '0px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cause_section_content">
                <div className="testimonial-row">
                  <FluidImage
                    fileName="profile.png"
                    alt="John Garcia"
                    style={{ height: 200, width: 200 }}
                  />
                  <blockquote className="testimonial-text">
                    <p>
                      &quot;VWC helped me gain the technical knowledge I needed in order to get the
                      attention of employers. The guidance, support and experience I had going
                      through the program continues to help me in my role as a full time web
                      developer.&quot;
                      <br /> - John Garcia, USAF | Web Developer, Hearst Media
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
