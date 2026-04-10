# AI Insurance Chatbot

This project is designed as an excercise in deploying a react app through docker and to create an AI chatbot for the purposes of customer use.

This in the context of the Turners Car Insurance Project, which is about providing car insurance to customers.

---
## Usage

This project is being deployed using **Docker**. As such the steps for usage are different and much simpler.

After pulling the project from the repository, do the following below.

In the Docker terminal (or the VS Code terminal), change the working directory to where the downloaded project is in. You can use the following commands to find and navigate to the path respectively
```bash
pwd                     (finding the path)
cd <your-path-here>     (changing the directory to that path)
```

Note: This also skips the typical `npm install` procedure for both the frontend and backend as that is handled through *Docker*.

Once that is done run `docker compose up --build` and the file will automatically compose into a container. The inital setup may take around 3-5 minutes. Once that is done, open a browser to the respective port on the front-end.

It should be http://localhost:3000.

---

## Contributors

This project was individually assigned and as such, I am the only contributor:

- pa-missionreadyhq (Paywand Amir)