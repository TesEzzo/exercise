// ------------ Add Controllers

// import { Request, Response } from "express";
// import Joi from "joi";

// const planetSchema = Joi.object({
//     id: Joi.number().integer().required(),
//     name: Joi.string().required(),
//   });

// type Planet = {
//   id: number;
//   name: string;
// };

// type Planets = Planet[];

// let planets: Planets = [
//   {
//     id: 1,
//     name: "Earth",
//   },
//   {
//     id: 2,
//     name: "Mars",
//   },
// ];

// const getAll = (req:Request, res:Response) => {
//     res.status(200).json(planets);
//   }
// const getOneById = (req:Request, res:Response) => {
//     const { id } = req.params;
//     const planet = planets.find((p) => p.id === Number(id));
  
//     res.status(200).json(planet);
//   }
// const create = (req:Request, res:Response) => {
//     const { error } = planetSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ error: error.details[0].message });
//     }
  
//     const { id, name } = req.body;
//     const newPlanet: Planet = { id, name };
//     planets = [...planets, newPlanet];
  
//     res.status(201).json({ msg: "The planet was created." });
//   }
// const updateDyId = (req:Request, res:Response) => {
//     const { id } = req.params;
  
//     const { error } = planetSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ error: error.details[0].message });
//     }
  
//     const { name } = req.body;
//     planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  
//     res.status(200).json({ msg: "The planet was updated." });
//   }
// const deleteById = (req:Request, res:Response) => {
//     const { id } = req.params;
//     planets = planets.filter((p) => p.id !== Number(id));
  
//     res.status(200).json({ msg: "The planet was deleted." });
//   }

//   export {
//     getAll,
//     getOneById,
//     create,
//     updateDyId,
//     deleteById
//   }

// ------------

// ------------ Add Postgres DB

import { Request, Response } from "express";
import Joi from "joi";
import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);

  
};
setupDb();

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets;`);
  res.status(200).json(planets);
};
const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1;`, Number(id));

  res.status(200).json(planet);
};

const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name)
    res.status(201).json({ msg: "The planet was created." });
  }

};
const updateDyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name])

  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  res.status(200).json({ msg: "The planet was updated." });
};
const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))
  res.status(200).json({ msg: "The planet was deleted." });
};

export { getAll, getOneById, create, updateDyId, deleteById };
