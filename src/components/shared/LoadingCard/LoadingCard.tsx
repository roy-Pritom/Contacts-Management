const LoadingCard = ({ cards }:{cards:number[]}) => {

    return (
        <>
            {
                cards.map((item:number) => (

                    <div key={item} className="flex flex-col justify-between bg-white shadow-2xl rounded-2xl overflow-hidden  w-[320px] md:w-96 mx-auto">
                        <div className=" w-[320px] md:w-96 h-64 bg-gradient-to-r from-gray-300 to-black overflow-hidden">
                            <div className="w-full h-full bg-white animate-pulse"></div>
                        </div>
                        <div className="p-12">
                            <div className="h-6 mb-6 bg-gradient-to-r from-gray-300 to-black rounded-md overflow-hidden">
                                <div className="w-full h-full bg-white animate-pulse"></div>
                            </div>
                            <div className="h-6 bg-gradient-to-r from-gray-300 to-black rounded-md overflow-hidden">
                                <div className="w-full h-full bg-white animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default LoadingCard
  