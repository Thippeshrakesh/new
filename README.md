Build and start all containers

docker-compose up -d --build


Verify running containers

docker ps


Access the application

Frontend → http://localhost:3000

Backend → http://localhost:5000

MySQL DB → port 3306

Stop and remove containers

docker-compose down


Remove with volumes (to delete DB data)

docker-compose down -v
