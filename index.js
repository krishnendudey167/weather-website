import express from "express"
import axios from "axios"
import bodyparser from "body-parser"
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = 3000;
const APIkey = process.env.APIKEY;
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        content: "Wanna know how's the weather ???",
    });
});

app.post("/search", async (req, res) => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather/?q=${req.body.city}&appid=${APIkey}&units=metric`;
        const response = await axios.get(url);
        const result = response.data;
        // console.log(result);
        res.render("index.ejs", {
            content: {
                city: result.name,
                weather: {
                    main: result.weather[0].main,
                    description: result.weather[0].description,
                },
                temp: result.main.temp,
                minimumTemp: result.main.temp_min,
                maximumTemp: result.main.temp_max,
            },
        });
    } catch (error) {
        console.log(error.message);
        res.render("index.ejs", {
            content: error.response.data.message,
        });
    }
    // console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
