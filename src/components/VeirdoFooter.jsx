import "../styles/veirdofooter.css";

const VeirdoFooter = () => {
  return (
    <>
      <div className="veirdo-footer">
        <div className="veirdo-footer-top">
          <div className="veirdo-footer-title">
            <h1>join our</h1>
            <h1>veirdo fam</h1>
          </div>
          <div className="veirdo-footer-search">
            <input type="search" placeholder="veirdo@yahoo.com" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="veirdo-footer-socials">
          <div className="veirdo-footer-socials-title">
            <p>spot us on</p>
          </div>
          <div className="veirdo-footer-socials-links">
            <div className="veirdo-footer-socials-link">
              <img
                src="https://cdn-icons-png.flaticon.com/128/739/739193.png"
                alt=""
              />
              <p>instagram</p>
            </div>
            <div className="veirdo-footer-socials-link">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
                alt=""
              />
              <p>linkedin</p>
            </div>
            <div className="veirdo-footer-socials-link">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
                alt=""
              />
              <p>twitter</p>
            </div>
            <div className="veirdo-footer-socials-link">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733641.png"
                alt=""
              />
              <p>whatsapp</p>
            </div>
          </div>
        </div>
        <div className="veirdo-footer-bottom">
          <div className="veirdo-footer-bottom-extras">
            <div className="category">
              <h4>Categories</h4>
              <p>oversized t-shirts</p>
              <p>new arrivals</p>
              <p>bestsellers</p>
              <p>t-shirts</p>
              <p>cargos</p>
              <p>winter-wear</p>
            </div>
            <div className="company">
              <h4>Company</h4>
              <p>about us</p>
              <p>blog</p>
              <p>privacy policy</p>
              <p>terms & condtitions</p>
              <p>work with us</p>
            </div>
            <div className="customers">
              <h4>customers</h4>
              <p>contact us</p>
              <p>faqs</p>
              <p>shipping policy</p>
              <p>refund policy</p>
            </div>
          </div>
        </div>

        <div className="veirdo-footer-animate">
          <span>find your flip side</span>
        </div>
        <div className="veirdo-footer-copyright">
          <p>Copyright &copy; VEIRDO 2024</p>
        </div>
      </div>
    </>
  );
};
export default VeirdoFooter;
