import React from 'react'

const Header = () => {

  return (
   <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs64ULrT-7WwA7zc-kDNWju7JbgnJkC6UQi1e9OYlk7g&s" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Hi There!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    </div>
   </div>
  )
}

export default Header

