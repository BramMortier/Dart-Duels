# PokeDartz

In this repository you can find the code we used to setup a darts detection system using a raspberry pi and 2 USB-webcams. We used the calculated scores to make a pokemon esque game and make the dartbattle you were dreaming about a reality :)

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
