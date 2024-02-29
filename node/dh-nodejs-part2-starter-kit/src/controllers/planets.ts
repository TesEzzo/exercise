import { Request, Response } from "express";
import Joi from "joi";

const planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
  });

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const getAll = (req:Request, res:Response) => {
    res.status(200).json(planets);
  }
const getOneById = (req:Request, res:Response) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
  
    res.status(200).json(planet);
  }
const create = (req:Request, res:Response) => {
    const { error } = planetSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    const { id, name } = req.body;
    const newPlanet: Planet = { id, name };
    planets = [...planets, newPlanet];
  
    res.status(201).json({ msg: "The planet was created." });
  }
const updateDyId = (req:Request, res:Response) => {
    const { id } = req.params;
  
    const { error } = planetSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    const { name } = req.body;
    planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  
    res.status(200).json({ msg: "The planet was updated." });
  }
const deleteById = (req:Request, res:Response) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
  
    res.status(200).json({ msg: "The planet was deleted." });
  }

  export {
    getAll,
    getOneById,
    create,
    updateDyId,
    deleteById
  }