import React from 'react'

function App() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
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

        {/* Main content */}
        <div className="mx-auto max-w-4xl py-32 sm:py-32 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Learning Management System
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Meet the team */}
      <div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet the team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.
            </p>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <TeamMember
                  name="Name Surname"
                  designation="Some Weird Designation"
                  image="PFP.png"
                />
                <TeamMember
                  name="Name Surname"
                  designation="Some Weird Designation"
                  image="PFP.png"
                />
                <TeamMember
                  name="Name Surname"
                  designation="Some Weird Designation"
                  image="PFP.png"
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
