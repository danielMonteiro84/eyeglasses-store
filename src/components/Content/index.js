import CoverSection from "./CoverSection"
import ProductSection from "./ProductsSection"
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"


export default function Content(){
    return (
        <main>
            <CoverSection />
            <ProductSection />
            <AboutSection />
            <ContactSection />
        </main>
       
    )
}