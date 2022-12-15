# code-challenge-mds-rfp
Project with a springboot based Restful API supporting comments and responses on mine applications on PostgreSQL

## Overview
This Github repository contains the source code and artefacts to deploy the MDS Review Code Challenge project to a local environment

## Quick Start

#### Pre-requisites

* Docker - [Docker installation Instructions](https://docs.docker.com/)
* Docker Compose - [Docker Compose Intructions](https://docs.docker.com/compose/install/)
* Git - [Git Installation Instructions](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)

#### Deployment
For local deployment, clone the github repository, and run start.sh to setup local environment.

```
git clone https://github.com/AOT-Technologies/spring-jpa-rest-react-template.git
cd deployment/

# To start the docker containers
sh ./start.sh

# browse to http://localhost:3000 to launch the application in browser

# To stop the docker containers
sh ./stop.sh

```

## Repo Structure

| Folder            | Description |
| ----------------  | ----------- |
| api/              | Application layer root folder |
| &ensp;&emsp;/src/          | Source code and configuration for api layer |
| &ensp;&emsp;/dist/         | Auto-built (by Github Actions) jar file |
| &ensp;&emsp;/target/       | Build staging area |
| web/              | Web layer root folder |
| &emsp;&emsp;/public/       | Public artifacts |
| &emsp;&emsp;/node_modules/ | Javascript libraries |
| &emsp;&emsp;/src/          | Source code for web layer |
| env/              | Environment variables for docker-compose deployment |
| deployment/       | Deployment scripts |
| &ensp;&emsp;&emsp;&emsp;&emsp;&emsp;/sql/   | SQL scripts to run upon initial deployment |

