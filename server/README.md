# Install

```
docker run -it --rm --name ggjserver -v "$PWD":/usr/src/app -w /usr/src/app node npm install 
```

# Run

```
docker run --init --rm -p9005:9000 -v "$PWD":/usr/src/app -w /usr/src/app node server.js
```