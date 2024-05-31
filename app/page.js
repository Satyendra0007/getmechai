import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="add-background ">
      <div className="  py-10 md:py-16  info  mx-auto  space-y-5  bg-white/5 backdrop-blur-md">
        <div className="logo ">
          <div className="logo flex justify-center items-center gap- text-2xl md:text-3xl ">
            <span>&lt;</span>
            <span className=''>Get<span className='text-blue-600 font-bold'>Me</span>Chai</span>
            <Image className='' src={"/logo.gif"} width={50} height={50} alt='logo' ></Image>
            <span> /&gt;</span>
          </div>
        </div>
        <div className="disc  mx-auto text-center text-sm text-white p-2 md:text-base md:w-1/2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate impedit nemo autem, repellat qui cum optio dolore sapiente fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam repudiandae, vel odio dolorem sequi autem similique id quis, laborum quisquam consequuntur asperiores, inventore nisi dicta cum architecto officiis vero deleniti maxime! Molestiae, optio. </p>
        </div>

        <div className="button text-center">
          <Link href="/login">
            <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-rose-600 rounded-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out md:px-7 md:py-2.5'>Explore Now</button>
          </Link>
        </div>
      </div>

      <div className="line h-[1px] bg-white/20"></div>

      <div className="about container mx-auto py-6">
        <h1 className="text-2xl my-6 text-center font-semibold md:text-3xl">About us </h1>
        <div className=" my-6 flex flex-col gap-5 md:flex-row md:justify-evenly items-center">
          <div className="box flex flex-col justify-center items-center gap-y-2 p-6 bg-white/5 backdrop-blur-md rounded-2xl">
            <div className="img">
              <Image className="w-40 h-40" src={"/person.gif"} width={100} height={100} priority={true} alt="person"></Image>
            </div>
            <div className="cont text-center  text-white">
              <p className="font-semibold text-rose-600">Lorem ipsum dolor sit amet </p>
              <p className="text-gray-100 text-sm">Lorem ipsum dolor, sit amet consectetur</p>
            </div>
          </div>

          <div className="box  flex flex-col justify-center items-center gap-y-2 p-6 bg-white/5 backdrop-blur-md ">
            <div className="img">
              <Image className="w-40 h-40" src={"/person.gif"} width={100} height={100} priority={true} alt="person"></Image>
            </div>
            <div className="cont text-center  text-white">
              <p className="font-semibold text-rose-600">Lorem ipsum dolor sit amet </p>
              <p className="text-gray-100 text-sm">Lorem ipsum dolor, sit amet consectetur</p>
            </div>
          </div>
          <div className="box  flex flex-col justify-center items-center gap-y-2 p-6 bg-white/5 backdrop-blur-md rounded-2xl">
            <div className="img">
              <Image className="w-40 h-40" src={"/coin.gif"} width={100} height={100} priority={true} alt="person"></Image>
            </div>
            <div className="cont text-center  text-white">
              <p className="font-semibold text-rose-600">Lorem ipsum dolor sit amet </p>
              <p className="text-gray-100 text-sm">Lorem ipsum dolor, sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
