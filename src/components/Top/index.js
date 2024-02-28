import './style.css';

export default function Top(){
    return (
        <header>
            <section className="limit-section">
            <img src='assets/logo3.png' alt='imagem do logo da loja' />
                <nav>
                    <a href="#products">PRODUCT</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT</a>
                  </nav>
            </section>
          </header>
    )
}