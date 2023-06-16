import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/ph.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Paulo Henrique" />
      <p className="title">Desenvolvedor 🚀</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Dowload currículo
      </a>
    </aside>
  );
};

export default Sidebar;
