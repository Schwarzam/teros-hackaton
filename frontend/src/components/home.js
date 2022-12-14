import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]
const logos = [
  { name: 'sklearn', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'django', url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
  { name: 'react', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
  { name: 'tensorflow', url: 'https://www.gstatic.com/devrel-devsite/prod/v24d520161c9661e427a3f6fa9973bfca56d0972dca82fa8ef65c709d915e80f3/tensorflow/images/lockup.svg' },
  { name: 'lightgbm', url: 'https://lightgbm.readthedocs.io/en/latest/_images/LightGBM_logo_black_text.svg' },

]


export default function Home(){

    return (
        <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div>
                
              </div>
              <div className="mt-20">
                <div>
                <a href="/predict" className="inline-flex space-x-4">
                    <span className="rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-500">
                    Access the dashboard here
                    </span>
                    <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    ML dashboard
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                      The purpose of this work is to create an interface and a Machine Learning model that can classify certain data and evaluate this model with multiple metrics showing all information on this frontend.
                  </p>
                  
                </div>
                
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
              </div>
              <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src={process.env.PUBLIC_URL + '/screens.png'}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        

        {/* Logo cloud section */}
        <div className="mt-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
              
              <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {logos.map((logo) => (
                  <div key={logo.name} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                    <img className="max-h-12" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
              <div className="pt-16 sm:pt-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Created entirely with state-of-the-art technologies.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                  This is a open source project with Apache 2.0 License, you may use it and modify it how you want it.
                </p>
                <div className="mt-6">
                  <a href="https://github.com/schwarzam/teros-hackaton" className="text-base font-medium text-rose-500">
                    Checkout GitHub repository.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </main>

      
    </div>
    )
}