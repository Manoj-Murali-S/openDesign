import React, { useEffect } from 'react';
import $ from 'jquery';


const FAQ = () => {
  useEffect(() => {


    //BEGIN
    $(".accordion__title").on("click", function (e) {

      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
        $('.accordion__arrow').removeClass('accordion__rotate');
      }

      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $('.accordion__arrow', this).toggleClass('accordion__rotate');
    });
    //END


  },);

  const accordtion = [
    { title: 'accordtion 1', content: 'accordtion 1 contet' },
    { title: 'accordtion 2', content: 'accordtion 2 contet' },
    { title: 'accordtion 3', content: 'accordtion 3 contet' },
  ];
  return (
    <div className="faq container ">
      <div className="faqh faqgradient">Frequently Asked Question</div>
      <div className="faqp">
        Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.
      </div>
      <div className="flex w-full" style={{ justifyContent: 'space-between' }}>
        <div >
          <div className="faqh1 faqgradient">Sorem ipsum dolor sit amet</div>
          <div className="accordion">
            {accordtion.map((item) => (
              <div className="accordion__item">
                <div className="accordion__title">
                  <div className="accordion__arrow">
                    <span className="accordion__arrow-item ">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0">
                        </g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                        </g>
                        <g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path> </g>
                      </svg>
                    </span>
                  </div>
                  <span className="accordion__title-text">{item.title}</span>
                </div>
                <div className="accordion__content">
                  {item.content}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className='faqImg'>
          <img src="/assets/Frame1-1.png" className='w-full' alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
