//--------------- Set up a simple Express App

// import express from "express";
// import morgan from "morgan";
// import dotenv from "dotenv";

// dotenv.config()

// const app = express();

// app.use(express.json())
// app.use(morgan("dev"));

// type Planet = {
//   id: number,
//   name: string,
// };

// type Planets = Planet[];

// let  planets = [
//   {
//     id: 1,
//     name: "Earth",
//   },
//   {
//     id: 2,
//     name: "Mars",
//   },
// ];

// app.get("/api/planets", (_, res) => {
//   res.status(200).json(planets)
// });
// app.get("/api/planets:id", (req, res) => {
//   const { id } = req.params
//   const planet = planets.find(p => p.id === Number(id))

//   res.status(200).json(planet)
// });

// app.listen(process.env.SERVER_PORT_ONE, () => {
//   console.log(`Example app listening on port http://localhost:${process.env.SERVER_PORT}`);
// });

//---------------

//--------------- CRUD with dummy database
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { getAll, getOneById, create, updateDyId, deleteById } from "./controllers/planets.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));



app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateDyId);

app.delete("/api/planets/:id", deleteById);

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Example app listening on port http://localhost:${process.env.SERVER_PORT}`
  );
});

//---------------
