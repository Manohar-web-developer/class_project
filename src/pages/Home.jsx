import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import menimg1 from '../assets/Images/Card-images/Men/1.webp';
import menimg2 from '../assets/Images/Card-images/Men/2.jpg';
import menimg3 from '../assets/Images/Card-images/Men/3.jpg';
import menimg4 from '../assets/Images/Card-images/Men/4.webp';
import menimg5 from '../assets/Images/Card-images/Men/5.webp';
import womenimg1 from '../assets/Images/Card-images/Women/1.jpg'
import womenimg2 from '../assets/Images/Card-images/Women/2.webp'
import womenimg3 from '../assets/Images/Card-images/Women/3.webp'
import womenimg4 from '../assets/Images/Card-images/Women/4.webp'
import womenimg5 from '../assets/Images/Card-images/Women/5.webp'
import Testimonials from '../components/Common/Testimonials';
import Accordion from '../components/Common/Accordien';
function Home() {
  let MenData = [
    {
      id: 1,
      productImg: menimg1,
      title: "Modern Wooden Chair",
      price: 2499,
      mrp: 3499,
      review: 4.5,
    },
    {
      id: 2,
      productImg: menimg2,
      title: "Classic Lounge Chair",
      price: 2999,
      mrp: 3999,
      review: 4.2,
    },
    {
      id: 3,
      productImg: menimg3,
      title: "Premium Arm Chair",
      price: 3499,
      mrp: 4499,
      review: 4.8,
    },
    {
      id: 4,
      productImg: menimg4,
      title: "Luxury Accent Chair",
      price: 3999,
      mrp: 4999,
      review: 4.6,
    },
    {
      id: 5,
      productImg: menimg5,
      title: "Designer Wooden Chair",
      price: 4499,
      mrp: 5499,
      review: 4.7,
    },
  ];
  let WomenData = [
    {
      id: 1,
      productImg: womenimg1,
      title: "Elegant Chair",
      price: 2299,
      mrp: 3299,
      review: 4.4,
    },
    {
      id: 2,
      productImg: womenimg2,
      title: "Modern Sofa Chair",
      price: 2799,
      mrp: 3799,
      review: 4.6,
    },
    {
      id: 3,
      productImg: womenimg3,
      title: "Comfort Lounge Chair",
      price: 3199,
      mrp: 4199,
      review: 4.3,
    },
    {
      id: 4,
      productImg: womenimg4,
      title: "Premium Accent Chair",
      price: 3699,
      mrp: 4699,
      review: 4.7,
    },
    {
      id: 5,
      productImg: womenimg5,
      title: "Luxury Designer Chair",
      price: 4299,
      mrp: 5299,
      review: 4.9,
    },
  ];
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=1",
      review: "Amazing quality and perfect fit. StyleHub is now my go-to store!"
    },
    {
      name: "Rohan Verma",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=2",
      review: "Love the collection and fast delivery. Highly recommended!"
    },
    {
      name: "Ananya Iyer",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=3",
      review: "Stylish, comfortable and worth every penny."
    },
    {
      name: "Amit Singh",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=4",
      review: "Excellent experience from ordering to delivery."
    },
    {
      name: "Priya Sharma",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=1",
      review: "Amazing quality and perfect fit. StyleHub is now my go-to store!"
    },
    {
      name: "Rohan Verma",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=2",
      review: "Love the collection and fast delivery. Highly recommended!"
    },
    {
      name: "Ananya Iyer",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=3",
      review: "Stylish, comfortable and worth every penny."
    },
    {
      name: "Amit Singh",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=4",
      review: "Excellent experience from ordering to delivery."
    }
  ];
  const accordionData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "We offer 30-day returns on all items. Products must be unused and in original packaging.",
    },
    {
      id: 2,
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email.",
    },
    {
      id: 3,
      question: "How long does delivery take?",
      answer:
        "Standard delivery takes 5-7 business days. Express shipping is available.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, net banking, and wallets.",
    },
  ];
  return (
    <>
      <Banner />
      <div>
        {/* Women's Section */}
        <div className='pt-5 lg:pt-8'>
          <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 max-w-7xl'>
            <h3 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold'>
              Women's Picks
            </h3>
            <p className='text-center text-sm sm:text-base lg:text-xl pt-3 sm:pt-4 capitalize'>
              Handpicked styles for the modern women.
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 py-5'>
            <Card Data={WomenData} />
          </div>
        </div>

        <div className='pt-5 lg:pt-8 bg-gray-200'>
          <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 max-w-7xl'>
            <h3 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold'>
              Men's Picks
            </h3>
            <p className='text-center text-sm sm:text-base lg:text-xl pt-3 sm:pt-4 capitalize'>
              Effortless styles for every occasion.
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 py-5'>
            <Card Data={MenData} />
          </div>
        </div>
      </div>
      <Testimonials testimonials={testimonials}/>
      <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
          
          <Accordion accordionData={accordionData} />
        
      </div>
    </>
  )
}

export default Home