import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        {/* Top gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className='w-full h-14 flex justify-between'>
            <img src='gsfcu.png' />
            <div className='flex justify-center items-center gap-4'>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900  sm:text-4xl">
              GUIDE LMS
              </h1>
              {/* <p className="text-lg leading-8 text-gray-800">
              GSFCU's / GIDM's Unified Internet based eDucational Eco-System
              </p> */}
            </div>
            <img src='gidm.png' />
        </div>

        {/* Why LMS */}
        <div className="mx-auto max-w-4xl py-32 sm:py-32 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Why LMS?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
            This is a learning management system developed to create efficient and skill enriched courses.The Learning Management System(LMS) GUIDE(GSFCU/GIDM's Unified Internet based eDucational Ecosystem) developed by the team of students of GSFC University in collabration with Gujarat Institute of Disaster Management(GIDM), Gandhinagar using Open edX Platform. Here we have studio for the faculties wherein they can effortlessly create knowledge, skill enriched content. And then we have the learner’s view wherein one can gain amazing amount of knowledge and skills through the medium of the LMS.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://mobile.gsfcuniversity.in/app.apk"
                className="rounded-md flex items-center bg-primary pl-5 pr-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                target='_blank'
              >
                <img className='w-6' src='android.svg' /> &nbsp;
                GSFCU App
              </a>

              <a
                href="https://mobile.guidelms.in/app.apk"
                className="rounded-md flex items-center bg-primary pl-5 pr-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                target='_blank'
              >
                <img className='w-6' src='android.svg' /> &nbsp;
                GIDM App
              </a> 
            </div>
          </div>
        </div>

        <hr/>

        {/* Main content */}
        <div className="mx-auto max-w-4xl py-32 sm:py-32 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            GUIDE
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
            <span className='text-primary font-bold'>G</span>
            SFCU's / 
            <span className='text-primary font-bold'>G</span>
            IDM's &nbsp;
            <span className='text-primary font-bold'>U</span>nified&nbsp;
            <span className='text-primary font-bold'>I</span>nternet based e
            <span className='text-primary font-bold'>D</span>ucational &nbsp;
            <span className='text-primary font-bold'>E</span>co-System
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-6">
            <a
                href="https://mobile.gsfcuniversity.in/app.apk"
                className="rounded-md flex items-center bg-primary pl-6 pr-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                target='_blank'
              >
                <img className='w-6' src='web.svg' /> &nbsp;
                GSFCU
              </a>

              <a
                href="https://mobile.gsfcuniversity.in/app.apk"
                className="rounded-md flex items-center bg-primary pl-6 pr-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                target='_blank'
              >
                <img className='w-6' src='web.svg' /> &nbsp;
                GIDM
              </a> 
            </div>
          </div>
        </div>
        
        <hr/>
        

      </div>

      <hr />

      {/* Meet the team */}
      <div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-primary">Meet the team</h2>
            <p className="mt-4 text-lg text-gray-500">
              The hardworking team behind LMS.
            </p>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <TeamMember
                  name="Tirth Jadvani"
                  designation="4th Year - CSE"
                  image="tirth.jpeg"
                />
                <TeamMember
                  name="Veera Patel"
                  designation="4th Year - CE"
                  image="veera.jpeg"
                />
              </dl>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                <TeamMember
                  name="Nayan Radadiya"
                  designation="2nd Year - CSE"
                  image="PFP.png"
                />
                <TeamMember
                  name="Aditya Patel"
                  designation="2nd Year - CSE"
                  image="aditya.jpeg"
                />
                <TeamMember
                  name="Shubham Kumar Roy"
                  designation="2nd Year - CSE"
                  image="shubham.jpeg"
                />
                <TeamMember
                  name="Dhruvin Purohit"
                  designation="2nd Year - CSE"
                  image="dhruvin.png"
                />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

function TeamMember({ name, designation, image }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex-shrink-0">
        <img className="h-32 w-32 rounded-full outline outline-primary" src={image} alt="" />
      </div>
      <div className="mt-4">
        <dt className="text-lg leading-6 font-bold text-gray-900">{name}</dt>
        <dd className="mt-2 text-base text-gray-500">{designation}</dd>
      </div>
    </div>
  )
}

export default App
