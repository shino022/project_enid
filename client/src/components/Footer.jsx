import '../styles/Footer.css'
function Footer() {
  return (
    <footer className="footer" id="footer_target">
      <p className="shopping-center"> SCARSDALE GOLDEN HORSESHOE SHOPPING CENTER</p>  {/* Update restaurant name if different */}
      <address className='address'>
        1122 Wilmot Road<br />
        Scarsdale, NY 10583
      </address>
      <a href="tel:914-472-4774">(914) 472-4774</a> {/* Update phone number */}
      <a href="tel:914-472-4774">(914) 472-4775</a> {/* Update phone number */}
    </footer>
  );
}

export default Footer;
