import './footer.css'

function Footer() {
    return ( 
        <>
            <div className="footer">
                <div className="container text-font">
                    <div>
                        <p>get in touch</p>
                        <a href=""><i class="fa-solid fa-envelope"></i> omarhamdy123987@gmial.com</a>
                        <a href=""><i class="fa-solid fa-square-phone"></i> +20 112 698 423</a>
                    </div>
                    <a href="">Contact Me</a>
                    <div>
                        <div>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-x-twitter"></i>
                        </div>
                        <p>Copyright &copy; 2019 KR</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;