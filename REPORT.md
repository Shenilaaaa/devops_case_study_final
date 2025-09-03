📄 DevOps Project Report
This project demonstrates the automation of application deployment using a complete DevOps toolchain.
The workflow integrates Terraform, Ansible, Jenkins, Git, GitHub, and Docker to provision cloud infrastructure, configure the environment, and deploy a containerized application through a CI/CD pipeline.
.

🏗️ System Architecture
Overview:
Source code is stored on GitHub, which triggers Jenkins through webhooks whenever changes are pushed.
Jenkins runs the CI/CD pipeline, orchestrating the automation process.
Terraform is responsible for provisioning AWS EC2 instances along with the required networking setup.
Ansible configures the EC2 instance (e.g., installs Docker, Jenkins, and other dependencies).
Docker builds the application image and runs it inside a container.

🌿 Branching Workflow
We adopted a lightweight Git branching model inspired by GitFlow:
main → contains production-ready code
dev → used for ongoing development
feature/* → short-lived branches created from dev for specific tasks or enhancements
All code is tested in the dev branch before merging into main via pull requests.

☁️ Terraform Infrastructure Summary
| Resource Type            | Count | Purpose                                               |
| ------------------------ | ----- | ----------------------------------------------------- |
| **aws\_instance**        | 1     | EC2 instance for application hosting                  |
| **aws\_security\_group** | 1     | Allows SSH (22), HTTP (80), and Jenkins (8080) access |
| **aws\_key\_pair**       | 1     | Key pair to enable SSH access to EC2                  |
| **provider**             | 1     | AWS provider (region: ap-south-1)                     |

terraform init  
terraform plan  
terraform apply  

🛠️ Toolchain
| Tool          | Role in Project                                              |
| ------------- | ------------------------------------------------------------ |
| **Terraform** | Defines and provisions cloud infrastructure as code          |
| **Ansible**   | Configures EC2 instance and installs required packages       |
| **Jenkins**   | Automates the pipeline and integrates all stages             |
| **Git**       | Manages version control of the source code                   |
| **GitHub**    | Hosts the repository and integrates with Jenkins via webhook |
| **Docker**    | Builds and runs the application as a container               |

🔁 Jenkins Pipeline Workflow
The CI/CD pipeline is described in the Jenkinsfile, and it executes the following stages:
Checkout Code – Fetches the latest code from GitHub
Terraform Init & Apply – Provisions AWS resources
Run Ansible Playbook – Configures the server and installs Docker/Jenkins
Build & Deploy Docker Image – Creates and runs the Dockerized application


