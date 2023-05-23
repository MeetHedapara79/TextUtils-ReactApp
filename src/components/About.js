import React from 'react'
import '../css/about.css'
import pic from "../images/our_mission.png"
import pic2 from "../images/our_vision.png"

export default function About(props) {
    return (
        <div className="container mt-5">
            <div className={`jumbotron text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='light'?'white':'#026f9e'}}>
                <h1 className="display-4">About Us</h1>
                <p className="lead">TextUtils is an ingenious and innovative tool designed to grant you complete control over your text manipulation endeavors. This remarkable utility boasts an extensive repertoire of functionalities that cater to all your textual needs, allowing you to effortlessly shape and refine your content with utmost precision.</p>
                <p className="lead">With the use of this TextUtils app, users can convert their text in UpperCase, LowerCase Sentence Case, Capitalize Case, Alternative capitalize Case and also perform some operations like, Removing extra space, word and character count, copy text,etc.</p>
                <p className='lead'>With its intuitive and user-friendly interface, TextUtils ensures a seamless and delightful user experience. Navigating through its comprehensive suite of features is a breeze, enabling you to swiftly execute operations and achieve the desired results in no time.</p>
            </div>

            <div className="row">
                <div className="col-md-6 abw1">
                    <div className="card mb-4 abw">
                        <img src={pic} className="card-img-top" alt="About Us Image 1" />
                            <div className={`card-body text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='light'?'white':'#026f9e'}}>
                                <p className="card-text">Our mission at TextUtils is to empower individuals and businesses with the transformative power of text manipulation. We are dedicated to providing a reliable and comprehensive utility that allows users to effortlessly mold and shape their text according to their unique needs and preferences.</p>
                            </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4 abw">
                        <img src={pic2} className="card-img-top" alt="About Us Image 2"  />
                            <div className={`card-body text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='light'?'white':'#026f9e'}}>
                                <p className="card-text">Our vision at TextUtils is to be the leading text manipulation tool that revolutionizes the way people interact with and transform their textual content. We envision a future where individuals and businesses can effortlessly harness the power of text manipulation to enhance their communication, productivity, and creative expression.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
