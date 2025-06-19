import profile from './assets/profile.jpg'
function Card(){
    return(
        <>
          <div className="whole-card">
              <h1 className="class">CARD</h1>
              <img className="picture" src={profile} alt="PROFILE_PIC" />
              <h2 className="name">LOGESWARAN B</h2>
              <p className="about-me">I am passionate to work in IT field as a WEB DEVELOPER</p>

          </div>
           
        </>
        
    );
}
export default Card