// GENERATE NAVBAR EVERY HTML PAGE
function navigation () {
    const navigator = document.querySelector('.navbar');
    navigator.innerHTML = `
            <div class="logo">
                <a href="#"><img src="/src/img/Logo.png" width="190px" height="35px" alt="logo"></a>
            </div>
            <ul>
                <li><a  class="item-nav active"href="#">Home</a></li>
                <li><a  class="item-nav "href="#">New Arrivals</a></li>
                <li><a  class="item-nav "href="#">Gown</a></li>
                <li><a  class="item-nav "href="#">Skirt</a></li>
                <li><a  class="item-nav "href="#">Blouse</a></li>
                <li><a  class="item-nav "href="#">Trousers</a></li>
                <li class="item-cart">
                <a class="cart-icon" href="#">
                <img src="/src/icon/Vector.png" width="30px" height="30px" alt="cart">
                <span class="counter"></span>
                </a>
                </li>
            </ul>
            <div class="log"><a href="#">Login</a></div>
    `
}
navigation()


// GENERATE FOOTER EVERY HTML PAGE
function footer () {
    const foot = document.querySelector('.footer');
    foot.innerHTML = `
    <div class="foot-navigator">
            <div class="blog">
                <h3>FROM OUR BLOG</h3>
                <div class="blog-contain">
                    <img src="/src/img/atikh-bana-_KaMTEmJnxY-unsplash 1.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div class="link">
                    <img src="/src/icon/arrow.png" width="11px" alt="">
                    <a href="#">DISCOVER MORE</a>
                </div>
            </div>
            <div class="contact">
                <h3>CONTACT</h3>
                <ul>
                    <li><a href="#">LIVE CHAT</a></li>
                    <li><a href="#">Customer Care <br>Mon. - Fri. 9: 30 -15:30 +2349074748664</a></li>
                    <li><a href="#">Whatsapp</a></li>
                    <li><a href="#">Email us</a></li>
                </ul>
                <div class="link">
                    <img src="/src/icon/arrow.png" width="11px" alt="">
                    <a href="#">DISCOVER MORE</a>
                </div>
            </div>
            <div class="service">
                <h3>SERVICES</h3>
                <ul>
                    <li><a href="#">Free Delivery</a></li>
                    <li><a href="#">Packaging</a></li>
                    <li><a href="#">Store Package</a></li>
                    <li><a href="#">Free Shirts</a></li>
                    <li><a href="#">Tey Troursers</a></li>
                </ul>
                <div class="link">
                    <img src="/src/icon/arrow.png" width="11px" alt="">
                    <a href="#">DISCOVER MORE</a>
                </div>
            </div>
            <div class="company">
                <h3>OUR COMPANY</h3>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Investor Relations</a></li>
                </ul>
                <div class="link">
                    <img src="/src/icon/arrow.png" width="11px" alt="">
                    <a href="#">DISCOVER MORE</a>
                </div>
            </div>
        </div>
        <div class="social-media">
            <div class="social-contain">
                <span>FOLLOW US</span>
                <a href="#"><img src="/src/icon/facebook.png" alt=""></a>
                <a href="#"><img src="/src/icon/twitter.png" alt=""></a>
                <a href="#"><img src="/src/icon/instagram.png" alt=""></a>
                <a href="#"><img src="/src/icon/youtube.png" alt=""></a>
            </div>
            <div class="payment">
                <span>WE ACCEPT</span>
                <a href="#"><img src="/src/icon/ApplePay.png" alt=""></a>
                <a href="#"><img src="/src/icon/paypal.png" alt=""></a>
                <a href="#"><img src="/src/icon/paypal2.png" alt=""></a>
            </div>
            <div class="copyright">
                <small>COPYRIGHT 2022 - FASHIONER</small>
            </div>
        </div>
    `
}
footer()