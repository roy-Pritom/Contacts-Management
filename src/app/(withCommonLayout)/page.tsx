import Banner from "@/components/UI/Home/Banner";
import ContactsSection from "@/components/UI/Home/ContactsSection";
import ImageSlider from "@/components/UI/Home/ImageSlider";

export default function HomePage() {
  return (
  <div className="bg-gradient-to-b from-light-purple to-[#f8fafa]">
    <div className="md:mx-20 mx-3 lg:py-0 py-8">
    <Banner/>
    </div>
    <ImageSlider/>
    <ContactsSection/>
  </div>
  )
}
