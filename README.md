<br />
<p align="center">
  <img src="./client/src/assets/logofont.svg" width="20%" />
</p>

<p align="center">
  A straightforward framework built for automatic proctoring to create online tests, <i>effortlessly</i>.
  <br />
  <br />
  <a href=""><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#architecture-and-design">Architecture</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#demonstration">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#contributing">Local Setup</a>
  <br />
</p>

<br />
<br />
<p align="center">
<img src="./images/landing_page.gif" alt="landing-page-gif" width="70%" />
</p>
<br />

### Table Of Content

- Architecture
- Design
- Demonstration
- Technologies Used
- Local Setup
- Authors


### Problem we are trying to solve?

Due to Covid 19, remote learning has been a constant and so have been online examinations. 
<br />
But proctoring has always been a task and cheating and unfair practices have always been a problem.
<br />

**Problems with the exisiting sytem?**

The current solutions assumes to have 2 platforms 
- One for testing purposes like Google Form for writing exams 
- And another, video conferencing platforms like meet or zoom for manual proctoring.

Our PS poses to develop an application that can automatically proctor and monitor students, without the need of manual proctoring - ie without a teacher's aid.

### Market & User Research

- On market research, the products available found, are paid.
- On user research and feedback from students, UX of such platforms isn't upto the mark.
- UX from the client's end isn't frictionless, it was expected by the client to upload questions on their platforms. 
- The existing product doesn't seem to have an accessible Admin Dashboard.

That's where we come into picture.
<br />
<br />

## Architecture and Design

The tradeoffs in a Hackathon: `Speed over quality`

But something that we are proud of is, we tried to follow ideal software development practices.

- Architecture
- Design
- Code
<br />

### Architecture

The presentation for Aankh can be found [here](https://docs.google.com/presentation/d/1h3WqCwEhf5xG7TsZ-yNuDoE9ybbFiaAMEsltQ3KrLEc/edit?usp=sharing).

- The architecture and workflow was built using [excalidraw](https://excalidraw.com) and it is freaking [brilliant](https://github.com/excalidraw/excalidraw).
<br />
<img src="./images/architecture.svg" />
<br />

### Design

- The designs were built using [Figma](figma.com) and were brought to life with [React](https://beta.reactjs.org).
- [Design Link](https://www.figma.com/file/pbuXQGcgFpsi2lgEbtllXf/aankh)
<br />
<img src="./images/all_designs.svg" />
<br />

## Demonstration

<br />
- Landing Page


Admin Dashboard 
- Create a test, Dashboard, Status

Student Test Register, Login, Dashboard

**Checks for cheating**

- Face Verification
- Voice Detection
- Multiple People Detection
- Dev Tools Check
- Multiple Tabs Check
- Full Screen Check
<br />
<table>
    <tr>
        <td>
            <img src='./images/test_response_1.png' alt='Intro Screen'>
        </td>
        <td>
            <img src='./images/test_response_2.png' alt='Dev Tools'>
        </td>
    </tr>
    <tr>
        <td>
            <img src='./images/test_response_3.png' alt='Face Not Visible'>
        </td>
        <td>
            <img src='./images/test_response_4.png' alt='Multiple People'>
        </td>
    </tr>
</table>

<br />

Also, **ideas rejected**: These were rejcted due to false positives and unsurity of cheating.

- Eye Tracking
- Object detection
- Mouse Tracking

<br />

## Technologies Used

<br />

- Workflow and Architecture Design
  - Excalidraw
- Prototyping and Frontend Design
  - Figma
- Frontend
  - React.js
  - CSS
- Backend
  - Node.js (Express.js)
  - MongoDB
- Machine Learning
  - OpenCV
  - Tensorflow_hub
  - Flask

<br />

**Dependencies**

A freaking huge shoutout to:
- [react-webcam](https://www.npmjs.com/package/react-webcam)
- [devtools-detect](https://www.npmjs.com/package/devtools-detect)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [chartjs](https://www.npmjs.com/package/chartjs)

<br />
<br />

## Contributing

**Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
├───extension
├───model
└───server
```

- `client`: The frontend for the application.
- `extension`: Chrome/Edge extension to keep a track of browser tabs.
- `model`: Model APIs for Machine Learning.
- `server`: The backend for the application.

<br />

**Client**

For local setup of frontend:
- `cd client`
- `npm i`
- `npm start`
- Go to `localhost:3000`

Structure

```
src
├───assets
├───components
├───containers
└───index.js
```

Individual Component & Container Structure

```
component
├───component.jsx
└───component.css
```

<br />
<br />

**Extension**

Read [this](https://github.com/tusharnankani/LeadsTracker#using-this-extension) or [this](https://github.com/dheerajdlalwani/back-to-work/#how-to-install) for a brief description for installing extensions.
- Open new tab & type: `chrome://extensions` or `edge://extensions`.
- Look for the Developer mode toggle & turn it on if it's not already.
- After cloning the repository, click on `Load Unpacked` and select the `extension` directory.

<br />
<br />

**Model**

- Create virtual environment (add venv to gitignore) ``` virtualenv venv```
- Install required libraries ```py pip install -r requirements.txt```

NOTE:

- Apart from this `tensorflow` and `tensorflow_hub` should be installed .
- The face-pose-estimation model is not final it is just a placeholder for now(will improve it as we get time).
- How to convert javascript array for image into image tensor that part is remaining.

<br />
<br />

**Server**

For local setup of backend:
- `cd server`
- `npm i`
- `npm start`

```
server
├───controllers
├───middlewares
├───models
├───routes
└───package.json
```

<br />
<br />

### Authors

- Vivek Namaye 
  - [LinkedIn](https://www.linkedin.com/in/viveknamaye/)
- Akshay Kanade 
  - [LinkedIn](https://www.linkedin.com/in/akshaykanade/)
- Tushar Nankani
  - [Twitter](https://twitter.com/tusharnankanii) 

<sub>We are Team VAT, not Value Added Tax, but Vivek, Akshay and myself, Tushar.</sub>
