import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';
import BlobBackground from './BlobBackground';

const Home: React.FC = () => {
  return (
    <div className="home">
      <BlobBackground />
      <div className="carousel-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-content">
              <h2>Welcome to the Maintenance App</h2>
              <p>Your one-stop solution for all student maintenance needs.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Report Issues Easily</h2>
              <p>Quickly report and track maintenance issues in your dorm or campus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Stay Updated</h2>
              <p>Get real-time updates on your maintenance requests.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Quick Reporting</h3>
            <p>Report maintenance issues in just a few clicks.</p>
          </div>
          <div className="card">
            <h3>Real-Time Tracking</h3>
            <p>Track the status of your requests in real-time.</p>
          </div>
          <div className="card">
            <h3>Notifications</h3>
            <p>Get notified when your issue is resolved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;