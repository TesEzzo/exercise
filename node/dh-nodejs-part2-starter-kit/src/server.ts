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
import Joi from "joi";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (_, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  res.status(200).json(planet);
});

app.post("/api/planets", (req, res) => {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  res.status(201).json({ msg: "The planet was created." });
});

app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;

  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  res.status(200).json({ msg: "The planet was updated." });
});

app.delete("/api/planets/:id", (req, res) => {
  const { id } = req.params
  planets = planets.filter((p) => p.id !== Number(id))

  res.status(200).json({ msg: "The planet was deleted." });
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Example app listening on port http://localhost:${process.env.SERVER_PORT}`
  );
});


//---------------