//frontend
import html from "../../../public/images/techs_icones/html.png";
import css from "../../../public/images/techs_icones/css.png";
import javascript from "../../../public/images/techs_icones/javascript.png";
import reactjs from "../../../public/images/techs_icones/react.png";
import nextjs from "../../../public/images/techs_icones/nextjs.png";
import redux from "../../../public/images/techs_icones/redux.png";
import bootstrap from "../../../public/images/techs_icones/bootstrap.png";
import tailwind from "../../../public/images/techs_icones/tailwind.png";
import alpinejs from "../../../public/images/techs_icones/alpinejs.png";

//devops cloud
import git from "../../../public/images/techs_icones/git.png";
import github from "../../../public/images/techs_icones/github.svg";
import docker from "../../../public/images/techs_icones/docker.png";
import aws from "../../../public/images/techs_icones/aws.png";
//backend
import django from "../../../public/images/techs_icones/django.png";
import nodejs from "../../../public/images/techs_icones/nodejs.png";
import mongodb from "../../../public/images/techs_icones/mongodb.png";
import sql from "../../../public/images/techs_icones/sql.png";
import mysql from "../../../public/images/techs_icones/mysql.png";
//aws services
import EC2 from "../../../public/images/techs_icones/EC2.png";
import ECS from "../../../public/images/techs_icones/ECS.png";
import Fargate from "../../../public/images/techs_icones/FARGATE.png";
import ECR from "../../../public/images/techs_icones/ECR.png";
import ELB from "../../../public/images/techs_icones/ELB.svg";
import S3 from "../../../public/images/techs_icones/S3.png";
import SES from "../../../public/images/techs_icones/SES.png";
import RDS from "../../../public/images/techs_icones/RDS.png";
//others
import vscode from "../../../public/images/techs_icones/vscode.png";
import selenium from "../../../public/images/techs_icones/selenium.png";

const technologies = {
  frontend: [
    { id: 1, name: "HTML 5", icone: html },
    { id: 2, name: "CSS 3", icone: css },
    { id: 3, name: "JavaScript", icone: javascript },
    { id: 4, name: "React JS", icone: reactjs },
    { id: 5, name: "Next JS", icone: nextjs },
    { id: 5, name: "Redux Toolkit", icone: redux },
    { id: 6, name: "Boostrap", icone: bootstrap },
    { id: 7, name: "Tailwind CSS", icone: tailwind },
    { id: 8, name: "Alpine JS", icone: alpinejs },
  ],
  backend: [
    { id: 1, name: "Django", icone: django },
    { id: 2, name: "Node JS", icone: nodejs },
    { id: 3, name: "Sql", icone: sql },
    { id: 4, name: "MySql", icone: mysql },
    { id: 5, name: "MongoDb", icone: mongodb },
  ],
  devops_cloud: [
    { id: 1, name: "Git", icone: git },
    { id: 2, name: "Github", icone: github },
    { id: 3, name: "Docker", icone: docker },
    { id: 4, name: "Aws", icone: aws },
  ],
  aws_services: [
    { id: 1, name: "EC2", icone: EC2 },
    { id: 2, name: "ECS", icone: ECS },
    { id: 3, name: "Fargate", icone: Fargate },
    { id: 4, name: "ECR", icone: ECR },
    { id: 5, name: "ELB", icone: ELB },
    { id: 6, name: "S3", icone: S3 },
    { id: 7, name: "SES", icone: SES },
    { id: 8, name: "RDS", icone: RDS },
  ],
  others: [
    { id: 1, name: "vscode", icone: vscode },
    { id: 2, name: "Selenium", icone: selenium },
  ],
};

export default technologies;
