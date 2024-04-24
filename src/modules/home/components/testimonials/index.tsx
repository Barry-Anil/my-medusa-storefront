import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import HeroImg from '../../../../../public/hero.jpg'

const Testimonials = () => {
  return (
<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 flex">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
  <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col items-center">
    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-8">Testimonials</h2>
    <div className="flex flex-row">
      <div className="flex-1 pr-8">
        <figure className="mt-10">
          <blockquote className="text-left text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          
              <div className="font-semibold text-gray-900 ">Customer Name</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="flex-1">
        <Image
          src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Your Image Description"
          className="max-w-full h-auto rounded-lg shadow-lg"
          height={400}
          width={600}
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials