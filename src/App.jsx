import React from 'react'
import './App.css'
import Card from './components/card'
import image1 from './assets/Logo (5).png'
import image2 from './assets/Search.png'
import image3 from './assets/Login.png'
import image4 from './assets/Recently viewed.png'
import image5 from './assets/Wishlist.png'
import image6 from './assets/Cart.png'
import image7 from './assets/img.png'
import image8 from './assets/img (1).png'
import image9 from './assets/img (2).png'
import image10 from './assets/img (3).png'
import image11 from './assets/img (4).png'
import image12 from './assets/img (5).png'
import image13 from './assets/img (6).png'
import image14 from './assets/img (7).png'
import image15 from './assets/img (8).png'
import image16 from './assets/img (9).png'
import image17 from './assets/img (10).png'
import image18 from './assets/img (11).png'
import image19 from './assets/img (12).png'
import image20 from './assets/img (13).png'
import image21 from './assets/rate.png'
import image22 from './assets/text 1.png'
import image23 from './assets/text 1 (1).png'
import image24 from './assets/text 1 (2).png'
import image25 from './assets/cardd.png'
import image26 from './assets/cardd2.png'
import image27 from './assets/cardd3.png'
import image28 from './assets/cardd4.png'
import image29 from './assets/cardd5.png'
import image30 from './assets/bg (4).png'
import image31 from './assets/social.png'
import image32 from './assets/payment.png'
import image33 from './assets/button prev.png'
import image34 from './assets/button next.png'
import image35 from './assets/dot.png'

import Card2 from './components/card2'
import Card3 from './components/card3'

const App = () => {
  let users = [
    {
      image : image7,
      des : 'Living Room',
      id : '1'
    },
    {
      image : image8,
      des : 'Special Bedroom',
      id : '2'
    },
    {
      image : image9,
      des : 'Dining & Kitchen',
      id : '3'
    },
    {
      image : image10,
      des : 'Home Accessories',
      id : '4'
    },
    {
      image : image11,
      des : 'Outdoor',
      id : '5'
    },
    {
      image : image12,
      des : 'Lighting & Decor',
      id : '6'
    }
  ]


  let products = [
    {
      image1 : image13,
      des : 'Form Chair Brass Base',
      image2 : image21,
      price : '$569.00',
      id : '1'
    },
    {
      image1 : image14,
      des : 'Vase Echasse Large',
      image2 : image21,
      price : '$569.00',
      id : '2'
    },
    {
      image1 : image15,
      des : 'Bottle Grinder Of Pepper',
      image2 : image21,
      price : '$569.00',
      id : '3'
    },
    {
      image1 : image16,
      des : 'Form Bar Stool Oak Base',
      image2 : image21,
      price : '$569.00',
      id : '4'
    },
    {
      image1 : image17,
      des : 'Table Lamp 15x29cm',
      image2 : image21,
      price : '$569.00',
      id : '5'
    },

    {
      image1 : image18,
      des : 'Carrie Table Lamp',
      image2 : image21,
      price : '$569.00',
      id : '6'
    },
    {
      image1 : image19,
      des : 'Form Armchair Black',
      image2 : image21,
      price : '$569.00',
      id : '7'
    },
    {
      image1 : image20,
      des : 'Form Chair Brass Base',
      image2 : image21,
      price : '$569.00',
      id : '8'
    }
  ]

  let shop = [
    {
      image : image22,
      des : 'Free returns within 10 days, please make sure the items are in undamaged condition.',
      id : '1'
    },
    {
      image : image23,
      des : 'We support customers 24/7, send questions we will solve for you immediately.',
      id : '2'
    },
    {
      image : image24,
      des : 'Get complimentary ground shipping on every order.Don t love it? Send it back, on us.',
      id : '3'
    }
  ]

  return (
    <div>


      <div className="hidden sm:flex justify-around alicen items-center p-[20px] gap-[25px] border">
        <div className="hidden sm:flex gap-[30px]">
          <p className='text-[#111111] text-[18px] font-bold'>+222-1800-2628</p>
          <p className='text-[#111111] text-[18px]'>blueskytechcompany@gmail.com</p>
        </div>
        <p className=' sm:text-[#555555] flex'> Sign up for 10% off your first order</p>
        <div className="hidden sm:flex gap-[35px]">
        <p className='text-[#111111] text-[18px]'>Our Stores</p>
        <p className='text-[#111111] text-[18px]'>English ▾ </p>
        <p className='text-[#111111] text-[18px]'>United States (USD $) ▾</p>
        </div>
      </div>

    <div className='mt-[30px] flex items-center justify-around border-b-1 pb-[25px]'>
      <img src={image1} alt="" />
      <div className='hidden sm:flex items-center gap-[25px] text-[#111111] font-bold'>
      <p>Home  ▾</p>
        <p>Shop  ▾</p>
        <p>Product  ▾</p>
        <p>Page  ▾</p>
        <p>Blog  ▾</p>
        <p>Buy Umino !</p>
      </div>
      <div className='flex items-center gap-[10px] sm:gap-[20px] '>
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>

    <div className="box">
      <div className='text-[white] flex flex-col items-center gap-[25px] text-center pt-[20%] sm:p-[10%]'>
        <h3 className='font-bold'>Beautiful & Elegant</h3>
        <h1 className='text-[60px] font-bold'>Premium Bedroom</h1>
        <h3 className='font-bold'>Discount 50% On Products & Free Shipping.</h3>
        <button className='text-[#111111] px-[33px] py-[10px] rounded-2xl font-bold bg-[white] hover:bg-[green] hover:text-[white] cursor-pointer'>Shop Now</button>
      </div>
    </div>

    <img className='hidden sm:block absolute top-[67%] left-[2%]' src={image33} alt="" />
    <img className='hidden sm:block absolute top-[67%] left-[93%]' src={image34} alt="" />
    <img className='hidden sm:block absolute top-[105%] left-[49%]' src={image35} alt="" />



    <div>
      <h1 className='text-center text-[#111111] text-4xl font-bold'>Top Categories</h1>
      <p className='text-[#555555] text-xl text-center my-[25px]'>Our products are designed for everyone, environmentally friendly.</p>
    </div>
    <div className='flex flex-wrap justify-around sm:mb-[200px]'>
      {users.map((e) => {
        return (
          <Card key={e.id} img={e.image} des={e.des} />
        )
      })}
      </div>

      <div>
      <h1 className='text-center text-[#111111] text-4xl font-bold mt-[80px]'>Top Trending</h1>
      <p className='text-[#555555] text-xl text-center my-[25px]'>Our products are designed for everyone, environmentally friendly.</p>
    </div>
    <div className='flex flex-col items-center gap-[50px] sm:w-[90%] sm:m-auto sm:flex-row flex-wrap sm:justify-around sm:mt-[100px]'>

      {products.map((e) => {
        return (
          <Card2 key={products.id} img={e.image1} image={e.image2} price={e.price} name={e.des}/>
        )
      })}

    </div>
    <button className='bg-[white] text-[#111111] font-bold px-[40px] py-[10px] rounded-[25px] border-1 my-[50px] ml-[28%] sm:ml-[45%] hover:bg-[green] hover:text-[white] cursor-pointer'>Load More</button>



      <div className="container">
        <div className='bg-[#FFFFFF] w-[320px] h-[350px] flex flex-col items-center p-[10px] rounded-xl gap-[15px] ml-[20px] relative top-[20%] sm:w-[540px] sm:gap-[25px] sm:left-[50%]'>
          <h3 className='text-[#999999] font-bold'>LIMITED EDITION</h3>
          <h1 className='text-[#111111] font-bold text-[40px]'>Unique Style</h1>
          <p className='text-[#555555] text-center text-[18px] sm:leading-[35px]'>The watch is carefully designed with quality materials, such as the domed sapphire crystal, and the meticulous level of detail - from the dial to the delicate gold hour markers.</p>
          <button className='bg-[#111111] text-[white] font-bold px-[40px] py-[10px] rounded-[25px] border-1 cursor-pointer '>Discover Now</button>
        </div>
      </div>


      <div className='flex flex-col items-center gap-[55px] sm:flex-row sm:justify-center sm:gap-[150px] sm:my-[150px]'>
        {shop.map((e) => {
          return (
            <Card3 key={shop.id} img={e.image} name={e.des}/>
          )
        })}
      </div>
      

      <div>
      <h1 className='text-center text-[#111111] text-4xl font-bold mt-[80px]'>Follow Us</h1>
      <p className='text-[#555555] text-xl text-center my-[25px]'>Inspire and let yourself be inspired, from one unique fashion to another.</p>
    </div>

    <div className='flex flex-wrap justify-center gap-[25px] sm:my-[80px]'>
      <img className='w-[160px] sm:w-[210px]' src={image25} alt="" />
      <img className='w-[160px] sm:w-[210px]' src={image26} alt="" />
      <img className='w-[160px] sm:w-[210px]' src={image27} alt="" />
      <img className='w-[160px] sm:w-[210px]' src={image28} alt="" />
      <img className='w-[160px] sm:w-[210px]' src={image29} alt="" />
      <img className='w-[160px] sm:w-[210px]' src={image30} alt="" />
    </div>
    

    <div className='mt-[130px] bg-[#F5F5F5] p-[15px] flex flex-wrap sm:flex-row sm:flex-nowrap sm:py-[100px]'>
      <div className='w-[95%] m-auto flex flex-col gap-[15px] items-start mb-[60px] sm:w-[400px] sm:m-0'>
        <img src={image1} alt="" />
        <p className='text-[#555555] font-bold text-[14px]'>268 St, South New York/NY 98944, United States</p>
        <p className='text-[#555555] font-bold text-[14px]'>+222-1800-2628</p>
        <p className='text-[#555555] font-bold text-[14px]'>blueskytechcompany@gmail.com</p>
        <img src={image31} alt="" />
      </div>
        
        
      <div className='flex flex-col gap-[15px]  mb-[50px] mr-[40px] sm:w-[320px] sm:mr-0'>
        <h2 className='text-[#111111] font-bold text-[18px] '>Customer Service</h2>
        <p className='text-[#555555] text-[16px] font-bold'>Privacy Policy</p>
        <p className='text-[#555555] text-[16px] font-bold'>Refund Policy</p>
        <p className='text-[#555555] text-[16px] font-bold'>Shipping & Return</p>
        <p className='text-[#555555] text-[16px] font-bold'>Term & Conditions</p>
        <p className='text-[#555555] text-[16px] font-bold'>Advanced Search</p>
        <p className='text-[#555555] text-[16px] font-bold'>Store Locations</p>
      </div>

      <div className=' flex flex-col gap-[15px] sm:w-[340px]'>
        <h2 className='text-[#111111] font-bold text-[18px]'>Shop By Categories</h2>
        <p className='text-[#555555] text-[16px] font-bold'>Smartphoney</p>
        <p className='text-[#555555] text-[16px] font-bold'>Headphones </p>
        <p className='text-[#555555] text-[16px] font-bold'>Computer & Desktop</p>
        <p className='text-[#555555] text-[16px] font-bold'>Cameras & Photos</p>
        <p className='text-[#555555] text-[16px] font-bold'>Laptop & Ipad</p>
      </div>

      <div className='sm:w-[420px] flex flex-col items-start'>
        <h2 className='text-[#111111] my-[25px] font-bold text-[18px] sm:m-0'>Sign Up to Newsletter</h2>
        <p className='text-[#555555] my-[10px] w-[95%] text-[16px] font-bold leading-[30px] sm:my-[20px] sm:w-[100%]'>Enter your Email to get $10 off your first order and free shipping Updates information on Sales and Offers</p>
        <div className=' mt-[50px] flex justify-center gap-[10px]'>
          <input className='bg-[#FFFFFF] px-[10px] py-[12px] rounded-[25px]' placeholder='Enter your email...' type="text" />
          <button className='bg-[#111111] text-[white] px-[30px] py-[10px] rounded-[30px] font-bold'>Subscribe</button>
        </div>
      </div>
    </div>

    <div className='bg-[#F5F5F5] pt-[20px] text-[#555555] flex flex-col items-center py-[40px] sm:flex-row sm:justify-around sm:items-center sm:gap-[80px]'>
      <div className='flex gap-[50px] my-[25px] sm:gap-[15px]'>
        <p className='font-bold'>English ▾</p>
        <p className='font-bold'>United States (USD $) ▾</p>
      </div>
      <p className='font-bold pb-[25px]'>© 2022 Umino Store. All Rights Reserved.</p>
      <img src={image32} alt="" />
    </div>

    </div>
  )
}

export default App