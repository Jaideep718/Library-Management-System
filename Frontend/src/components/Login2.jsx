import React from 'react'

function Login() {
  return (
    <div>
        <div className="h-16 flex justify-between items-center text-center bg-[url(https://thevisualcommunicationguy.com/wp-content/uploads/2016/05/Header-Background.jpg)]">
            <p className="text-3xl text-lime-300 rounded-xl font-serif text-left">LIBRARY MANAGEMENT SYSTEM</p>
            <a href="/login" className="w-20 mr-10 text-center text-sm bg-black hover:bg-white text-slate-100 hover:text-black rounded-lg ">LOGIN</a> 
        </div>
        <div className="h-lvh flex justify-center bg-[url(https://www.checkatrade.com/blog/wp-content/uploads/2021/03/home-library-cost.jpg)] bg-cover">
          <div className="text-7xl text-white mt-28 font-serif">
            <p className="flex justify-center mb-8">Education is for improving the lives of others</p>
            <p className="flex justify-center mb-8">and for leaving your community and </p>
            <p className="flex justify-center mb-8">would better than you find it .</p>
            <p className="text-4xl flex justify-center items-center mt-9 ml-20">- Marian Wright Edelman</p>
          </div>
        </div>
        <div>
          <div className="bg-[url(https://tse2.mm.bing.net/th?id=OIP.iDN_Vgp7csLhucxdjs6C9wHaB2&pid=Api&P=0&h=180)] flex justify-center bg-cover text-white gap-96">
            <div className="mt-8 mb-8">
                <p className="flex justify-center underline">Contact Us</p>
                <p className="flex justify-center">Email : abcd@iitdh.ac.in</p>
                <p className="flex justify-center">Mobile : 9182736450</p>
            </div>
            <div className="mt-8 mb-8">
                <p className="flex justify-center underline text-2xl">TIMINGS</p>
                <p className="flex justify-center">   Sun    : 9:00 AM - 6:00 PM</p>
                <p className="flex justify-center">Mon - Fri : 8:00 AM - 7:00 PM</p>
                <p className="flex justify-center">   Sat    : 9:00 AM - 6:00 PM</p>
            </div>
            <div className="mt-8 mb-8">
                <p className="flex justify-center underline text-2xl">ADDRESS</p>
                <p className="flex justify-center">IIT DHARWAD Permanent Campus</p>
                <p className="flex justify-center">Dharwad , Belur Dist</p>
                <p className="flex justify-center">karnataka , INDIA .</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
