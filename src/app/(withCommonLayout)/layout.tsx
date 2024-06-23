import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import PortFolio from "@/components/shared/Portfolio/PortFolio";
import { partnerImages } from "@/constants";


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <PortFolio images={partnerImages}/>
            <Footer />
        </div>
    );
};

export default layout;