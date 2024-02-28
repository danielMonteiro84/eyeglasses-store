import './style.css'

export default function AboutSection(){
    return (
        <section id="about" className='about-section'>
            <section className='limit-section container-about' >
                 <h2>Who are we?</h2>
                 <p>Founded in 2001, in Atlanta, Georgia, ClearVision began operations with a commitment to meeting the needs of the entire community. The main objective has always been to offer customers first-class services, high quality and competitive prices.</p>
                     <image className='box-cards'>
                         <img src="assets/store01.png" alt="store"/>
                            <article className='card'>
                                <h3>Our Branches</h3>
                                <p>Today we have more than 20 branches throughout EUA and America</p>
                            </article>
            
                            <article className='card'>
                                <h3>Qualified service</h3>
                                <p>Highly qualified team to serve you</p>
                             </article>

                         <img src="assets/store.png" alt="store"/>   
                     </image>
               </section>
         </section>
    )
}