# Marvel App

## Run the app

### Frontend
For this one, you just have to go to frontend folder and run `yarn` to install the dependencies. Then you'll be able to run the project just running `yarn start`. It will run on port 3000

It's a basic project structure using ant design

### Backend
Same way, just need to run `yarn` to install dependencies and `yarn node server.js` to run it. It will run on port 3001 (you can change that in `server.js`.

I hosted the DB on https://cloud.mongodb.com/. You'll be able to see connection credentials in server.js. Also, stuffs like API keys can be found in the `.env` file

As this is a bigger folder structure, I'll let a description for each one of the folders

- Constants: every constant for this project can be placed here
- Controllers: They handle the logic in case is needed. They also depend use services
- Services: Services handle data. I.E. database calls
- Models: Schemas for Mongoose
- Utils: Multiple functions that can be used across the whole app
- Routes: They make routes available and are the ones that tells which controller is going to be used
- DB: Usually called by services. In here we make queries to the db to fetch the data we need from there
- Jobs: Cronjobs run in here. I needed to make a cronjob that runs every 24 hours and fetches data from Marvel's API



Hope you enjoy :) 
