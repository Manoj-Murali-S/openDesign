
import React, { useState } from 'react';
const Booming = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="overview">
        <div className="container">
          <div className="oop" data-aos="zoom-in-down">
            <h1 className="gradient h1">Booming areas</h1>
            <p className="gradient p">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
              himenaeos.</p>
          </div>

          <div>
            <hr class="thin-line" />
            <button className='tabBtn gradient' onClick={() => changeTab('Tab1')}>North Chennai</button>
            <button className='tabBtn gradient' onClick={() => changeTab('Tab2')}>South Chennai</button>
            <hr class="thin-line" />
            {activeTab === 'Tab1' && 
            <>
            <div className='flex gap-2'>
              <div className="boomP"> <div className="overviewPara grid" data-aos="fade-up">
                <h1 className=" gradient overviewParaH">Sorem ipsum dolor sit amet</h1>
                <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                  ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                  himenaeos.</p>
                <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                  ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                  himenaeos.</p>
                <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                  ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                  himenaeos.</p>
                <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                  ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                  himenaeos.</p>
              </div>
              </div>
              <div className="boomImg">
                <img src="/assets/Frame1.png" className='w-full' alt="" />
              </div>
            </div>
            </>}
            {activeTab === 'Tab2' && 
            <>
            <div className='flex gap-2'>
              <div className="boomImg">
                <img src="/assets/Frame1.png" className='w-full' alt="" />
              </div>
              <div className="boomP">
                <div className="overviewPara grid" data-aos="fade-up">
                  <h1 className=" gradient overviewParaH">Sorem ipsum dolor sit amet</h1>
                  <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                    himenaeos.</p>
                  <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                    himenaeos.</p>
                  <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                    himenaeos.</p>
                  <p className="overviewParaP">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                    himenaeos.</p>
                </div>
                </div>

            </div>
            </>}
          </div>





        </div>
      </div>
    </div>
  );
};

export default Booming;