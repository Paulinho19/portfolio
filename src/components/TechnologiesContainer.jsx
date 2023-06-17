import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiMysql,
  DiPython,
  DiBootstrap,
  DiWordpress,
  DiPhp,
  DiNodejsSmall,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    text: "Linguagem de marcação essencial para estruturar aplicações web",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    text: "Responsável por definir a aparência visual de um site ou aplicativo",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    text: "Adiciona interatividade e funcionalidades aos sites",
    icon: <DiJsBadge />,
  },
  {
    id: "react",
    name: "ReactJS",
    text: "Biblioteca javascript que desenvolve interfaces de usuário",
    icon: <DiReact />,
  },
  {
    id: "nodejs",
    name: "NodeJS",
    text: "Cria aplicações de servidor utilizando javascript",
    icon: <DiNodejsSmall />,
  },
  {
    id: "mysql",
    name: "MySQL",
    text: "Armazena e organiza grandes quantidades de informações",
    icon: <DiMysql />,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    text: "Fornece uma coleção de estilos e componentes pré-construídos",
    icon: <DiBootstrap />,
  },
  {
    id: "wordpress",
    name: "WordPress",
    text: "Plataforma de criação de sites e blogs",
    icon: <DiWordpress />,
  },
  {
    id: "python",
    name: "Python",
    text: "Utilizada em análise de dados e automações",
    icon: <DiPython />,
  },
  {
    id: "php",
    name: "PhP",
    text: "Realiza interações com o servidor",
    icon: <DiPhp />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
