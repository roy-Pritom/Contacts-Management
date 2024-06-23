import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="">
        <div className=" flex justify-center items-center mt-12  ">
      <div className='text-5xl shadow-lg p-10 rounded-lg text-red-800 flex items-center justify-center  gap-5 md:gap-10 '>
      <div className="">
      <h2 className='font-bold mb-2'>404 Not Found</h2>
      <p>Something went <br /><span className='font-bold'>Wrong!!</span></p>
      </div>
      <div className="">
        <Image src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?w=740&t=st=1686082164~exp=1686082764~hmac=2eae86f3b51993c704881542a66a5e21e362284dd352f35672c7809c30ff63d1" className='w-72 h-72' alt=""
        width={288}
        height={288}
        />
      </div>
    </div>

  </div>
  <div className="flex justify-center mt-10">
 <Link href='/'>
 <button className="btn btn-active btn-ghost">Back to homepage</button>
 </Link>
  </div>
      </div>
    );
};

export default NotFoundPage;