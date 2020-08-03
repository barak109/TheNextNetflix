import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {getShowes} from "./api/tvmaze";

const app = express();
const port = 3001;
app.use(cors());

app.use(bodyParser.json());

app.get("/getShowes", async (req: any, res: any) => {
  const query = req.query.query;
  try {
    let data = await getShowes(query);
    data = data.map((show: any) => {
      const {id, name, image} = show.show;
      return {
        id,
        name,
        image: image ? image.medium : null
      };
    });
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("problem with getShowes");
  }
});

app.get("/getTopShowesName", async (req: any, res: any) => {
  const query = req.query.query;
  try {
    const data = await getShowes(query);
    let names = [];
    for (let index = 0; index < 5; index++) {
      if (!data[index]) break;
      const {id, name} = data[index].show;
      names[index] = {id, name: name.toLowerCase()};
    }
    res.json(names);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("problem with getTopShowesName");
  }
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
