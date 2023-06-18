# Dart Duels

In this repository you can find the code we used to setup a darts detection system using a raspberry pi and 2 USB-webcams. We used the calculated scores to make a turn based street fighter themed game. Enjoy :)

![](/public/Titlescreen@2x.png)
![](</public/Character%20selection%20screen%20(player%201)%402x.png>)
![](/public/battle%20screen%402x.png)

### Technologies used:

-   Client
    -   React
    -   Vite **(Build Tool)**
    -   Sass
    -   Axios **(API requests)**
-   Backend
    -   Express
    -   MongoDB **(Mongoose ORM)**
-   Raspberry pi
    -   Python
    -   OpenCV **(Computer Vision Library)**

### Setup Guide:

First install the nessecary dependencies:

`$ cd pi` then `$ pip install -r requirements.txt` <br/>
`$ cd server` then `$ npm i` <br/>
`$ cd client` then `$ npm i` <br/>

Then run the python script:

`$ python main.py`

Start the server:

`$ nodemon`

and finally start the frontend app:

`$ npm run dev`
