import React from 'react';
import "../style/testimonial.css";
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Testimonials</h2>
        <div className="wrapper">
          <div className="testimonial-item">
            <Image src="/images/pic03.jpg" alt="Testimonial image for Marilyn" width={250} height={250} />
            <h2>Marilyn</h2>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet. consectetur adipisicing elit. Molestias modi quod perspiciatis odio dolores dolore praesentium libero voluptatibus. facilis est.</p>
          </div>

          <div className="testimonial-item">
            <Image src="/images/pic01.jpg" alt="Testimonial image for Julia" width={250} height={250} />
            <h2>Julia</h2>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet . consectetur adipisicing elit. Molestias modi quod perspiciatis odio dolores dolore praesentium libero voluptatibus . facilis est.</p>
          </div>

          <div className="testimonial-item">
            <Image src="/images/pic02.webp" alt="Testimonial image for Rebecca" width={250} height={250} />
            <h2>Rebecca</h2>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet. consectetur adipisicing elit. Molestias modi quod perspiciatis odio dolores dolore praesentium libero voluptatibus. facilis est.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
