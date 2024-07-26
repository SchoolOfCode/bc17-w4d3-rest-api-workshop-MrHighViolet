import express from 'express';

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from './models/astronauts.js';

const app = express();

app.use(express.json());

/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

app.get('/astronauts', async (req, res) => {
  const data = await getAstronauts();

  const astronauts = {
    success: true,
    payload: data,
  };
  res.json(astronauts);
});

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

app.post('/astronauts', async (req, res) => {
  const update = await createAstronaut(req.body);

  const newAstronauts = {
    success: true,
    payload: update,
  };
  res.json(newAstronauts);
});

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

app.get('/astronauts/:id', async (req, res) => {
  const { id } = req.params;

  const astroById = await getAstronautById(id);

  const boom = {
    success: true,
    payload: astroById,
  };
  res.json(boom);
});

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.put('/astronauts/:id', async (req, res) => {
  const { id } = req.params;

  const replace = await replaceAstronautById(id, req.body);

  const response = {
    success: true,
    payload: replace,
  };
  res.json(response);
});

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.delete('/astronauts/:id', async (req, res) => {
  const { id } = req.params;

  const astroById = await deleteAstronautById(id);

  const boom = {
    success: true,
    payload: astroById,
  };
  res.json(boom);
});

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

app.patch('/astronauts/:id', async (req, res) => {
  const { id } = req.params;

  const astroById = await updateAstronautById(id, req.body);

  const boom = {
    success: true,
    payload: astroById,
  };
  res.json(boom);
});

export default app;
