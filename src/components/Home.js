import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home-container">
                <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home-banner" />
                <div className="home-row">
                    <Product
                        id="12321341"
                        title="VTech KidiZoom Smartwatch DX2, Stylish, kid-friendly design; secure, splash proof wristban Black (Amazon Exclusive)"
                        price={56.66}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71KYDouQCEL._AC_SX679_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Apple MacBook Pro 16' with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 64GB RAM, 1TB SSD, AMD Radeon Pro 5500M 8GB, Space Gray, Late 2019"
                        price={3699.95}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51W9-AqPq6L._AC_SX679_.jpg"
                    />
                </div>
                <div className="home-row">
                    <Product
                        id="4903850"
                        title="Botabee Swimming Pool Standard Size Water Volleyball | Pool Volleyball for Use with Dunnrite, Intex, Swimways or Other Pool Volleyball Sets"
                        price={12.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81AvGVd9a-L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Fashion Mens T Shirt Muscle Gym Workout Athletic Shirt Cotton Tee Shirt Top"
                        price={18.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61HF0fmRw5L._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="OtterBox Commuter Series Case for iPhone 12 & iPhone 12 Pro - Black"
                        price={29.88}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51sAvIwoIVL._AC_SX569_.jpg"
                    />  
                </div>
                <div className="home-row">
                    <Product
                        id="4903850"
                        title="joybest 3-Piece Classical 100% Cotton Bedspread Quilt Sets, Reversible Home Bedding Coverlet Bedding Sets for All Season - Twin Sizer"
                        price={49.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91j6WdrQTvS._AC_SX679_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title='Merax Sofa Bed Couch Sets for Living Room, Pull Out Sleeper and Storage, 82" W(Pillows not Included) Sectional, Grey'
                        price={7999.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/714i0U430-L._AC_SX679_.jpg"
                    />  
                </div>
                <div className="home-row">
                    <Product
                        id="90829332"
                        title="Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
                        price={279.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61lJa-K8CqL._AC_SX569_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home