import lamacta from "../../../public/images/lamacta/lamacta.png";
import Avt from "../../../public/images/avt/avt1.png";
import Kagu from "../../../public/images/kagu/kagu.PNG";
import Avt_admin from "../../../public/images/avt_admin/avt_admin.png";
import HealthHub from "../../../public/images/healthhub/health_hub.png";

const projects_info = [
  {
    project_id: 1,
    project_name: "Lamacta",
    project_description:
      "Lamacta is a platform for property valuation and sales in Algeria.",
    main_picture: lamacta,
    project_type: "Company project",
    tools: [
      "Django",
      "Tailwind Css",
      "AlpineJs",
      "AWS",
      "Git",
      "GitHub",
      "Docker",
      "Gunicorn",
      "Nginix",
    ],
    project_link: "lamacta",
    live: true,
    images: [],
    project_url: "https://lamacta.com",
  },
  {
    project_id: 2,
    project_name: "HealthHub",
    project_description:
      "HealthHub is a platform where hospitals can participate in the federated learning process using their respective data to contribute to a CNN model for pulmonary disease detection.",
    main_picture: HealthHub,
    project_type: "Graduation project",
    tools: [
      "Django",
      "TailwindCss",
      "AlpineJs",
      "MySql",
      "Sockets",
      "TensorFlow",
      "Flwr",
    ],
    project_link: "HealthHub",
    live: false,
    images: ["/images/avt/avt8.png"],
    project_url: "https://github.com/Dakidhem/HealthHub",
  },
  {
    project_id: 3,
    project_name: "Algeria virtual tour",
    project_description:
      "Algeria Virtual Tour is the first virtual tourism platform in Algeria. Users can browse different wilayas and visit places virtually directly from the website.",
    main_picture: Avt,
    project_type: "Freelance project",
    tools: ["React", "Redux Toolkit", "Framer motion", "Styled components"],
    project_link: "avt",
    live: true,
    images: [
      "/images/avt/avt1.png",
      "/images/avt/avt2.png",
      "/images/avt/avt3.png",
      "/images/avt/avt4.png",
      "/images/avt/avt5.png",
      "/images/avt/avt6.png",
      "/images/avt/avt7.png",
      "/images/avt/avt9.png",
      "/images/avt/avt10.png",
      "/images/avt/avt11.png",
      "/images/avt/avt12.png",
      "/images/avt/avt13.png",
      "/images/avt/avt14.png",
      "/images/avt/avt15.png",
      "/images/avt/avt16.png",
      "/images/avt/avt17.png",
      "/images/avt/avt18.png",
      "/images/avt/avt19.png",
      "/images/avt/avt20.png",
      "/images/avt/avt21.png",
      "/images/avt/avt23.png",
      "/images/avt/avt24.png",
      "/images/avt/avt25.png",
      "/images/avt/avt26.png",
      "/images/avt/avt27.png",
    ],
    project_url: "https://algeriavirtualtravel.com",
  },
  {
    project_id: 4,
    project_name: "Algeria virtual tour admin",
    project_description:
      "The admin interface of Algeria Virtual Tour where the admin can manage the content of the website.",
    main_picture: Avt_admin,
    project_type: "Freelance project",
    tools: ["React", "Redux Toolkit", "Framer motion", "Styled components"],
    project_link: "avt-admin",
    live: true,
    images: ["/images/avt/avt8.png"],
    project_url: "https://algeriavirtualtravel.com",
  },
  {
    project_id: 5,
    project_name: "Kagu",
    project_description:
      "Kagu is an online furniture selling platform. Users can browse the catalogue, add items to their cart, and validate the cart.",
    main_picture: Kagu,
    project_type: "University project",
    tools: ["React", "Styled components"],
    project_link: "Kagu",
    live: false,
    images: ["/images/avt/avt8.png"],
    project_url: "https://github.com/Dakidhem/Kagu",
  },
];

export default projects_info;
