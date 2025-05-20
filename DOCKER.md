# Docker Instructions for Jewelry App

## Building the Docker Image

To build the Docker image, run the following command in the root directory of the project:

```bash
docker build -t jewelry-app:latest .
```

## Running the Docker Container

To run the Docker container, use:

```bash
docker run -d -p 8080:80 --name jewelry-container jewelry-app:latest
```

This will:
- Run the container in detached mode (`-d`)
- Map port 8080 on your host to port 80 in the container (`-p 8080:80`)
- Name the container "jewelry-container" (`--name jewelry-container`)

Your application will be accessible at http://localhost:8080

## Stopping the Container

To stop the container:

```bash
docker stop jewelry-container
```

## Removing the Container

To remove the container:

```bash
docker rm jewelry-container
```

## Pushing to a Container Registry

If you need to push your image to a container registry like Docker Hub:

1. Tag your image (replace 'yourusername' with your Docker Hub username):
```bash
docker tag jewelry-app:latest yourusername/jewelry-app:latest
```

2. Push the image:
```bash
docker push yourusername/jewelry-app:latest
``` 