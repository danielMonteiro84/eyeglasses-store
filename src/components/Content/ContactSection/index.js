import './style.css'

export default function ContactSection(){
    return (
        <section id="contact" className='section-contact'>
            <div className='limit-section'>
                <h3>CONTACT US</h3>
                <p>Don't waste time, come and visit one of our stores or get in touch through our social networks or at the customer service center</p>

                <section className='container-contact'>
                    <article className='contact'>
                        <h4>Contact</h4>
                        <div>
                            <img src="assets/local.png" alt="Icon"/>
                            <span>Atlanta, Georgia</span>
                        </div>
                        <div>
                            <img src="assets/telefone.png" alt="Icon"/>
                            <span>(99) 9999-9999</span>
                        </div>
                        <div>
                            <img src="assets/email.png" alt="Icon"/>
                            <span>contact@clearvision.com.br</span>
                        </div>
                    </article>
                    <article className='contact'>
                        <h4>Our Social NetWorks</h4>
                    <div>
                            <img src="assets/fb.png" alt="Icon"/>
                            <span>/clearvision</span>
                        </div>
                        <div>
                            <img src="assets/ig.png" alt="Icon"/>
                            <span>@clearvision</span>
                        </div>
                        <div>
                            <img src="assets/tt.png" alt="Icon"/>
                            <span>@clearvision</span>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    );
}