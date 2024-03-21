const Apartment = () => {
  return (
    <div className="apartmentB"  data-aos="fade-up"
   >
      <div className="container" >
        <div className="appH faqgradient">Why invest in Apartments ?</div>
        <div className="appP faqgradient">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.  </div>
        {/* box 1 */}
        <div  data-aos="fade-right"  data-aos-anchor-placement="center-bottom" className="appBox flex">
          <div className="boxImg">
            <img src="/assets/Frame9.png" className="boxImgAbs" alt="" srcSet="" />
          </div>
          <div className="boxTextBox">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

         {/* box 2 */}
        <div  data-aos="fade-left" className="appBoxR flex">

          <div className="boxTextBoxR">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
          <div className="boxImg">
            <img src="/assets/Frame9-1.png" className="boxImgAbsR" alt="" srcSet="" />
          </div>
        </div>

         {/* box 3 */}
        <div  data-aos="fade-right" className="appBox flex">
          <div className="boxImg">
            <img src="/assets/Frame9-2.png" className="boxImgAbs" alt="" srcSet="" />
          </div>
          <div className="boxTextBox">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Apartment;