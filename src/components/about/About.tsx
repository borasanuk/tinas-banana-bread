import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="tinas-section bg-1">
        <div style={{ padding: 40 }}></div>
        <div className="tinas-section-title">inspired by tina</div>
        <div className="tinas-section-text">
          more affectionately known as tima, she inspired this mava207 project
          (wip).
        </div>
      </div>
      <div className="tinas-section bg-2">
      <div style={{ padding: 40 }}></div>
        <img
          className="tinas-section-img"
          src="https://i.ibb.co/TrWmNQK/IMG-0977.jpg"
        />
        <div className="tinas-section-text">a legemd.</div>
      </div>
      <div className="tinas-section bg-1">
      <div style={{ padding: 40 }}></div>
        <img
          className="tinas-section-img"
          src="https://i.ibb.co/YW3VTRy/IMG-1098.jpg"
        />
        <div className="tinas-section-text">a hapy doggo.</div>
      </div>
      <div className="tinas-section bg-2">
      <div style={{ padding: 40 }}></div>
        <img
          className="tinas-section-img"
          src="https://i.ibb.co/xqtn61P/IMG-0261.jpg"
        />
        <div className="tinas-section-text">a squimshy baby.</div>
      </div>
    </>
  );
};

export default AboutPage;