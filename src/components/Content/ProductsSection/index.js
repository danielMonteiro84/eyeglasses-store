import './style.css';

export default function ProductSection() {
    return (
       <section id="product" className='product-section'>
        <div className='limit-section'>
            <h2>OUR PRODUCTS</h2>
            <p>We have prescription glasses, sunglasses, transition lenses, in men's, women's and children's models</p>
            <p>low price and the best quality on the market</p> 

           <section className='container-product'> 
                <article className='box-product'>
                    <h3>Eyeglasses</h3>
                    <img src='assets/oculos01.png' alt='eyeglasses' />
                    <p>$ 500,00</p>
                </article>
                <article className='box-product'>
                    <h3>Transition lenses</h3>
                    <img src='assets/oculos02.png' alt='transition lenses' />
                    <p>$ 750,00</p>
                </article>
                <article className='box-product'> 
                    <h3>Sunglasses</h3>
                    <img src='assets/oculos03.png' alt='sunglasses lenses' />
                    <p>$ 700,00</p>
                </article>
                <article className='box-product'>
                    <h3>Children´s models</h3>
                    <img src='assets/oculos04.png' alt='children´s models lenses' />
                    <p>$ 500,00</p>
                </article>
             </section>
                
        
        <p>All our products include:</p>
            <ul>
                <li>one year warranty</li>
                <li>preventive maintenance</li>
                <li>Special discounts on the purchase of the second unit</li>
                <li>payment flexibility </li>
            </ul>
        </div>
      </section>
    )
}