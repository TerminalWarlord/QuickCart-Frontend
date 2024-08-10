import bannerImg from '../assets/banner.jpg';

export default function Banner() {
    return <section className="flex justify-center mx-8 my-4">
        <div className={`relative bg-cover bg-[20%_16%] rounded-md h-[35vw] w-full`} style={{ backgroundImage: `url('${bannerImg}')` }}>
            <div className="absolute bottom-[40%] left-[7%]">
                <h3 className="font-light my-1 text-xl">Classic Exclusive</h3>
                <h1 className="my-1 text-4xl">Women Collection</h1>
                <h4 className="mt-1 mb-8 font-normal text-lg">Upto 40% Off</h4>
                <a href="#" className="my-20 rounded-lg py-4 px-8 text-white bg-black">Shop Now</a>
            </div>

        </div>
    </section>
}

