import './App.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap.css.map';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import AboutUsSection from './componenet/AboutUsSection';
import ContactUsSection from './componenet/ContactUsSection';
import ExperienceSection from './componenet/ExperienceSection';
import FooterSection from './componenet/FooterSection';
import FreelancerSection from './componenet/FreelancerSection';
import HeroHeaderSection from './componenet/HeroHeaderSection';
import HowtoworkSection from './componenet/HowtoworkSection';
import MenusSection from './componenet/MenusSection';
import MyworkSection from './componenet/MyworkSection';
import SkillSection from './componenet/SkillSection';


function App() {
  return (
    <div className="App">
		{/* Main Navigation */}
		{/* <MenusSection></MenusSection> */}
		{/* Header Top Section */}
		<HeroHeaderSection></HeroHeaderSection>
		{/* About Me Section */}
		{/* <AboutUsSection></AboutUsSection> */}
		{/* My Skills Section */}
		{/* <SkillSection></SkillSection> */}
		{/* Work Exp Section */}
		{/* <ExperienceSection></ExperienceSection> */}
		{/* My work Section  */}
		{/* <MyworkSection></MyworkSection> */}
		{/* How to Work Section  */}
		{/* <HowtoworkSection></HowtoworkSection> */}
		{/* Freelancer Section */}
		{/* <FreelancerSection></FreelancerSection> */}

		{/* <ContactUsSection></ContactUsSection> */}

		<FooterSection></FooterSection>
    </div>
  );
}

export default App;
