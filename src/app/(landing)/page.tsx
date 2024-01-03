import Image from 'next/image';

export default function LandingPage() {
  return (
    <div>
      <header className='bg-[#ffb700] font-roboto'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
          <nav className='flex items-center justify-between h-16'>
            <div className='flex-shrink-0'>
              <Image
                src='/logo.png'
                alt='logo'
                width={50}
                height={100}
                className='w-52 h-auto'
              />
            </div>
            <div className=''>
              <div className='cursor-pointer flex items-center gap-1 lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-7 w-7 stroke-white'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </div>

              <div className='hidden gap-5 text-white lg:flex'>
                <a
                  href='/login'
                  className='duration-750 cursor-pointer text-xl font-semibold capitalize transition-colors delay-150 hover:text-neutral-900'>
                  login
                </a>
                <a
                  href='/onboarding'
                  className='duration-750 cursor-pointer text-xl font-semibold capitalize transition-colors delay-150 hover:text-neutral-900'>
                  register
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center ">
        <div className='backdrop-brightness-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
            <div className='h-[80vh] flex items-center justify-between text-white'>
              <div className='w-72 flex flex-col gap-8'>
                <Image
                  className='w-2/3 md:w-72'
                  src='/images/hero-logo.png'
                  width={150}
                  height={150}
                  alt='hero-img'
                />
                <h4 className='inline text-3xl'>
                  We put our investing ideas into action with pure simple mining
                  solutions and a full range of investment plans. Enjoy real
                  benefits and rewards on Algos Crypto&reg;.
                </h4>
                <div className='flex gap-5 pt-5'>
                  <a
                    href='/login'
                    className='cursor-pointer rounded-md bg-[#FF6600] px-5 py-2 text-base font-medium text-white md:text-xl'>
                    Login
                  </a>
                  <a
                    href='/onboarding'
                    className='cursor-pointer rounded-md bg-[#ffb700] px-5 py-2 text-base font-medium text-white md:text-xl'>
                    Register
                  </a>
                </div>
              </div>

              <div className='hidden animate-fadeInUp text-white md:flex'>
                <Image
                  src='/images/hero-btc.jpg'
                  className='h-60 rounded border-2'
                  alt=''
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section
          aria-describedby='why us section'
          className="bg-[#312E2E] bg-[url('/images/mining.jpg')] bg-cover bg-center text-center">
          <div className='backdrop-brightness-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
              <div className='py-10 flex flex-col items-center gap-4'>
                <h4 className='text-xl font-semibold text-white md:text-3xl'>
                  Why Choose AlgosCrypto&reg;
                </h4>
                <Image
                  className=''
                  src='/images/Web-capture_14-10-2021_12580_trenchcrypto.com_.jpeg'
                  alt='why-us'
                  width={50}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby='counter section'
          className='bg-[#ffb700]'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
            <div className='py-10 flex md:flex-row justify-between flex-col items-center gap-4'>
              <div className='flex flex-col text-center'>
                <h6 className='text-3xl font-normal text-white'>100+</h6>
                <span className='font font-semibold capitalize tracking-tight text-slate-950'>
                  Supported Countries
                </span>
              </div>
              <div className='flex flex-col text-center text-white'>
                <h6 className='text-3xl font-normal'>1,378K+</h6>
                <span className='font font-semibold capitalize tracking-tight text-slate-950'>
                  Registered Users worldwide
                </span>
              </div>
              <div className='flex flex-col text-center text-white'>
                <h6 className='text-3xl font-normal'>10x</h6>
                <span className='font font-semibold capitalize tracking-tight text-slate-950'>
                  faster transtions, zero delays
                </span>
              </div>
            </div>
          </div>
        </section>
        <section
          aria-describedby='legal section'
          className="bg-[#312E2E] bg-[url('/images/background-2.jpg')] bg-cover bg-center text-center">
          <div className='backdrop-brightness-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
              <div className='py-10 grid grid-cols-2 gap-4 '>
                <div className='text-left'>
                  <div>
                    <h3 className='text-[#FFB700] text-2xl font-semibold pb-3'>
                      Legal Company
                    </h3>
                    <span className='inline text-white'>
                      Algos Crypto Mining system is based on native mining which
                      is affiliate with Blockchain Network, offering a great
                      investment opportunity to people all around the world.
                    </span>
                  </div>
                  <div className='mt-5'>
                    <h3 className='text-[#FFB700] text-2xl font-semibold pb-3'>
                      Security
                    </h3>
                    <span className='inline text-white'>
                      All data on financial operations as well as personal data
                      are effectively protected with EV SSL certificates and
                      additional services on encryption of data transfer.
                    </span>
                  </div>
                </div>

                <div className='text-right'>
                  <div>
                    <h3 className='text-[#FFB700] text-2xl font-semibold pb-3'>
                      Customer Support
                    </h3>
                    <span className='inline text-white'>
                      We understand how important having reliable support
                      service is to you. Please don&lsquo;t hesitate to contact
                      us should you have any questions or concerns and we will
                      get back to you in no time.
                    </span>
                  </div>
                  <div className='mt-5'>
                    <h3 className='text-[#FFB700] text-2xl font-semibold pb-3'>
                      Privacy
                    </h3>
                    <span className='inline text-white'>
                      Information about your activity on this website is
                      `private` and confidential and can$lqous; t be accessed by
                      hackers or third parties.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#312E2E] bg-[url('/images/mining.jpg')] bg-cover bg-center text-center">
          <div className='backdrop-brigthness-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
              <div className='py-10 grid grid-cols-1 md:grid-cols-4 gap-4'>
                <article className='rounded-lg bg-[#FF6600] pt-10  max-w-md text-center text-white '>
                  <div className='flex flex-col items-center text-white'>
                    <div className=''>
                      <h3 className='text-3xl font-bold uppercase'>
                        silver plan
                      </h3>
                      <p className='text-3xl font-bold text-center'>$1k-5k</p>
                      <p className='text-3xl font-bold mt-4'>25%</p>
                      <p className='uppercase text-xl font-bold '>
                        weekly returns
                      </p>
                    </div>
                    <div className='p-2 font-medium'>
                      <span>Min. Possible deposit: $1,000.00</span>
                      <span>Max. Possible deposit: $5,000.00</span>
                    </div>
                    <div className='p-2 font-medium'>
                      <span>MIN. Weekly return: $250.00</span>
                      <span>MAX. Weekly return: $1,250.00</span>
                    </div>
                  </div>
                  <div className='mt-5 bottom-0 flex w-full flex-col '>
                    <button className='w-full bg-pink-900 text-white py-2 px-2 font-lg font-medium uppercase'>
                      Check rate
                    </button>
                    <a
                      href='login'
                      className='bg-[#FFB700] rounded-b-lg  w-full text-white py-2 px-2 text-center font-lg font-medium uppercase'>
                      invest
                    </a>
                  </div>
                </article>

                <article className=' rounded-md bg-[#FF6600] text-white pt-10 max-w-md text-center'>
                  <div className=''>
                    <h3 className='text-3xl font-bold text-center uppercase'>
                      gold plan
                    </h3>
                    <p className='text-3xl font-bold text-center'>$5-10k</p>
                    <p className='text-3xl font-bold text-center mt-4'>40%</p>
                    <p className='text-xl font-bold uppercase'>
                      weekly returns
                    </p>
                    <div className='p-2 font-medium'>
                      <span>MIN. Possible deposit: $5,000.00</span>
                      <span>MAX. Possible deposit: $10,000.00</span>
                    </div>
                    <div className='p-2 font-medium'>
                      <span>Min. Weekly return $2,000.00</span>
                      <span>Max. Weekly Returns $4,000.00</span>
                    </div>
                  </div>
                  <div className='mt-5 bottom-0 flex w-full flex-col '>
                    <button className='w-full bg-pink-900 text-white py-2 px-2 font-lg font-medium uppercase'>
                      Check rate
                    </button>
                    <a
                      href='login'
                      className='bg-[#FFB700]  rounded-b-lg  w-full text-white py-2 px-2 text-center font-lg font-medium uppercase'>
                      invest
                    </a>
                  </div>
                </article>

                <article className='rounded-md bg-[#FF6600] pt-10 text-white max-w-md text-center'>
                  <div className=''>
                    <h3 className='text-2xl uppercase font-bold'>
                      diamond plan
                    </h3>
                    <p className='text-2xl uppercase font-bold'>$10k-50k</p>
                    <p className='text-3xl font-bold mt-4'>55%</p>
                    <p className='text-xl font-bold uppercase'>
                      weekly returns
                    </p>
                    <div className='p-2 font-medium'>
                      <span>Min. Possible deposit: $10,000.00</span>
                      <span>Max. Possible deposit: $50,000.00</span>
                    </div>
                    <div className='p-2 font-medium'>
                      <span>Min. Weekly return: $5,500.00</span>
                      <span>Max Weekly return: $27,500.00</span>
                    </div>
                  </div>
                  <div className='mt-5 bottom-0 flex w-full flex-col '>
                    <button className='w-full bg-pink-900 text-white py-2 px-2 font-lg font-medium uppercase'>
                      Check rate
                    </button>
                    <a
                      href='login'
                      className='bg-[#FFB700] rounded-b-lg   w-full text-white py-2 px-2 text-center font-lg font-medium uppercase'>
                      invest
                    </a>
                  </div>
                </article>

                <article className='rounded-md bg-[#FF6600] pt-10 max-w-md text-white text-center'>
                  <div className=''>
                    <h3 className='text-2xl uppercase font-bold'>
                      platinum plan
                    </h3>
                    <p className='text-2xl uppercase font-bold'>$50-$150k</p>
                    <p className='text-3xl font-bold mt-4'>70%</p>
                    <p className='text-lg uppercase font-medium '>
                      weekly returns
                    </p>
                    <div className='p-2 font-medium'>
                      <span className='inline'>
                        Min. Possible deposit: $50,000.00
                      </span>
                      <span>Max. Possible deposit: $150,000.00</span>
                    </div>
                    <div className='p-2 font-medium'>
                      <span>Min. Weekly return: $35,000.00</span>
                      <span>Max. Weekly return: $105,000.00</span>
                    </div>
                  </div>
                  <div className='mt-5 bottom-0 flex w-full flex-col '>
                    <button className='w-full bg-pink-900 text-white py-2 px-2 font-lg font-medium uppercase'>
                      Check rate
                    </button>
                    <a
                      href='login'
                      className='bg-[#FFB700] rounded-b-lg   w-full text-white py-2 px-2 text-center font-lg font-medium uppercase'>
                      invest
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#312E2E] bg-[url('/images/mining.jpg')]   bg-center text-center">
          <div className='backdrop-brightness-50 backdrop-blur-sm'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
              <div className='py-10'>
                <h5 className='text-3xl font-semibold text-[#ffb700]'>
                  AlgosCrypto&reg;
                </h5>

                <p className='pt-5 text-lg text-white'>
                  AlgosCrypto&reg; grants you a uniqe oppurtunity to discover a
                  brand new revenue stream to monitize the &lsquo;regular&lsquo;
                  mining through the rewarded Crypto Invesments.
                </p>
                <p className='pt-5 text-lg text-white'>
                  AlgosCrypto&reg; also features a stable cloud-mnining that run
                  on AES-256 Encryption Network for the highest security of data
                  to maximize profitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ffb700] bg-[url('/images/mining.jpg')] bg-blend-luminosity bg-center text-center">
          <div className=''>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
              <div className='transiton container flex transform flex-col items-center justify-center gap-10 px-10 py-14'>
                <h5 className='animate-fadeInDown text-3xl font-semibold text-white'>
                  What is CryptoCurrency Mining?
                </h5>

                <div className=''>
                  <iframe
                    className='w-72 md:w-[560px]'
                    height='315'
                    src='https://www.youtube.com/embed/2VtH-XAOjXw'
                    title='YouTube video player'
                    frameBorder='1'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen></iframe>
                </div>

                <p className='text-center text-lg text-white'>
                  Algos Crypto Mining is a leading cryptocurrency mining
                  investment company. Our core focus is to constantly generate
                  resources to increase the mining capacity of various mining
                  pools and get rewarded in return. Our team has experience in
                  both traditional financing and emerging Blockchain
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
