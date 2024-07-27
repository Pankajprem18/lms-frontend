import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import { celebrities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";
function AboutUs() {


    return (
        <HomeLayout>
            <div className="pl-20 flex flex-col text-white">
                <div className="flex items-center gap-5 max-10">
                    <section className="w=1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the afoordable and quality ecucation to the world.
                            we are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower ans contribute
                            in the growth and wellness of mankind.
                        </p>

                    </section>

                    <div className="w-1/2">
                        <img className="drop-shadow-2xl"
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px rgb(0, 0, 0));"
                            }
                            }
                            alt="about main image"


                            src={aboutMainImage} />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto my-16 ">

                    {celebrities && celebrities.map(celebrity => (<CarouselSlide
                        {...celebrity}
                        key={celebrity.slideNumber}
                        totalSlides={celebrities.length}
                    />))}


                </div>
            </div>
        </HomeLayout>
    );
}
export default AboutUs;