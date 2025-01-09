import Image from "next/image";
import Link from "next/link";
import Tutorials from "./tutorials/page";
import Blog from "./blog/page";
import Contact from "./contact/page";



export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              width={700} // Adjust width as needed
              height={400} // Adjust height as needed
              alt="hero"
              src="/electriccar.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Cars Hub
              <br className="hidden lg:inline-block" />
              Your Ultimate Automotive Destination!
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover the latest trends, in-depth reviews, and expert advice on
              everything cars. Whether you&apos;re a passionate car enthusiast or
              just starting your automotive journey, Cars Hub is here to fuel
              your passion with the best content in the world of automobiles.
              From electric innovations to timeless classics, explore a universe
              where every car tells a story.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/tutorials">Tutorials</Link>
                
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <Link href="/blog">Blog</Link>
                
              </button>
            </div>
          </div>
        </div>
      </section>

      <Tutorials/>
      <Blog/>
      <Contact/>
    </>
  );
}
