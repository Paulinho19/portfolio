import Avatar from "../img/ph.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Paulo Henrique" />
      <p className="title">desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">
        Dowload currículo
      </a>
    </aside>
  );
};

export default Sidebar;
