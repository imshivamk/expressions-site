import Hero from './Hero'
import About from './About'
import Stats from './Stats'
import Events from './Events'
import Footer from './Footer'
import Navbar from './Navbar'
import { FacebookIcon, Instagram, Linkedin, Twitter, YoutubeIcon } from 'lucide-react'
import Marquee from './Marquee'

const Home = () => {
  return (
    <div className='relative '>
      <Navbar/>  
      <Hero/>
      <About/>
      <Events/>
      <Footer/>
      <div className="socials z-50 right-0 top-[40%] fixed flex flex-col gap-4 bg-gray-300/40 py-4 px-2 rounded-2xl
      ">
              <a
                className="rounded-full p-2 text-pink-600 bg-white hover:bg-gray-500/40 "
                href="https://www.instagram.com/imed_pune_official?igsh=OXdlaHI5eTQwYmhi"
              >
                <Instagram size={22} />
              </a>
              <a
                className="rounded-full p-2 text-blue-700 bg-white hover:bg-gray-500/40 "
                href="https://www.linkedin.com/school/bharatividyapeeth"
              >
                <Linkedin size={22} />
              </a>
              <a
                className="rounded-full p-2 bg-white text-black hover:bg-gray-500/40 "
                href="https://twitter.com/bharati_vp?lang=en"
              >
                <Twitter size={22} />
              </a>
              <a
                className="rounded-full text-red-600 p-2 bg-white hover:bg-gray-500/40 "
                href="https://www.youtube.com/user/bharatividyapeethuni"
              >
                <YoutubeIcon size={22} />
              </a>
              <a
                className="rounded-full text-blue-500 p-2 bg-white hover:bg-gray-500/40 "
                href="https://www.facebook.com/bharati.vidyapeeth"
              >
                <FacebookIcon size={22} />
              </a>
            </div>

    </div>
  )
}

export default Home
