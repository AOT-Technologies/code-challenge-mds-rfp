#!/bin/bash
reinitialise=""
yes=0
while getopts ryh flag
do
	case "${flag}" in
		r) reinitialise="--volumes";;
		y) yes=1;;
		h) echo "Usage: start.sh [-h]"
		   echo "       start.sh [-r] [-y]"
		   echo "Where: -h prints usage"
		   echo "       -r reinitialises the database"
		   echo "       -y automatically assumes yes for all questions"
		   exit;;
		*) echo "Illegal option - try ./start.sh -h for options and usage"
		   exit;;
	esac
done
if [[ "XX${reinitialise}" != "XX" && ${yes} -eq 0 ]]
then
	printf "Initialise database - are you sure ? "
	read -r RPLY
	case "${RPLY}" in
		y|Y) ;;
		*) exit;;
	esac
fi
# Bring down any previously running containers
docker-compose --env-file ./../env/constants.env down ${reinitialise}

# Build images
echo 'Building images...'
docker-compose --env-file ./../env/constants.env build --no-cache 

# pause

echo 'Complete'

docker-compose --env-file ./../env/constants.env up -d postgres_db 

sleep 10

# Bring up new containers (silently)

docker-compose --env-file ./../env/constants.env up -d api

sleep 10

docker-compose --env-file ./../env/constants.env up -d react-web
