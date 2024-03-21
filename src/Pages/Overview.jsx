const Overview = () => {
    return (
      <div>
        <div className="overview">
        <div className="container"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <div className="oop">
                <h1 className="gradient h1">Overview of Apartments</h1>
                <p className="gradient p">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos
                    himenaeos.</p>
            </div>
            <div className="overviewbody flex">
                <div className="grid1 ovBodyp1"  data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                <img src="/assets/FrameOv.png" className="w-full h-full" alt="" srcSet="" />
                </div>
                <div className="grid2 ovBodyp1">
                    <img src="/assets/Frame2.png" data-aos="flip-up" data-aos-anchor-placement="top-bottom" className="w-full" alt="" srcSet="" />
                    <img src="/assets/Frame5.png" data-aos="flip-down" data-aos-anchor-placement="top-bottom" className="w-full" alt="" srcSet="" />
                </div>
                <div className="overviewPara grid"  data-aos="fade-up">
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
    </div>
      </div>
    );
  };
  
  export default Overview;