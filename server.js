const express = require('express');

const userRoutes = require('./users/userRoutes');

const server = express();

server.use(express.json());

let hobbits = [
    {
        "name": "Frodo",
        "id": 1
    },
    {
        "name": "Bilbo",
        "id": 2
    },
    {
        "name": "Smegal",
        "id": 3
    },
    {
        "name": "Samwise",
        "id": 4
    }
];

let ids = 4

server.get('/hobbits', (req, res) => {
    res.status(200).json(hobbits)
})

server.post('/hobbits', (req, res) => {
    const newHobbit = req.body;
    
    newHobbit.id = ++ids

    hobbits.push(newHobbit);

    res.status(201).json(newHobbit);
})

server.put('/hobbits/:id', (req, res) => {
    const hobbit = hobbits.find(element => element.id == req.params.id);

    if(!hobbit){
        res.status(404).json({message: 'Hobbit not found'});
    } else {
        Object.assign(hobbit, req.body);
        res.status(200).json(hobbit)
    }

    res.status(200).json({url: "hobbits", operation: "PUT"})
})

server.delete('/hobbits/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params)

    res.status(200).json({
        url: `/hobbits/${id}`,
        operation: `DELETE hobbit with id ${id}`
    })
})

server.use('/users', userRoutes)

server.listen(8000, () => console.log('\n\t\t\t\t\t\t\t\t** API running on port 8000 **\n'))





























// const port = 5000;

// const server = express();
// server.use(express.json())

// const hobbits = [
//     {
//       id: 1,
//       name: 'Samwise Gamgee',
//     },
//     {
//       id: 2,
//       name: 'Frodo Baggins',
//     },
//     {
//       id: 3,
//       name: 'Bilbo Baggins',
//     },
//     {
//       id: 4,
//       name: 'Gandalf The White',
//     },
//     {
//       id: 5,
//       name: 'Aragon Kingly',
//     },
//   ];
//   let nextId = 6

// //================================================================================================================  
// server.get('/hobbits', (req, res) => {
//     console.log(req.query)
//     // query string parameters get added to req.query
//     const sortField = req.query.sortby || 'id';
  
//     // apply the sorting
//     const response = hobbits.sort(
//       (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
//     );
  
//     res.status(200).json(response);
//   })
// //READ
// //================================================================================================================

// server.post('/hobbits', (req, res) => {
//     const hobbit = req.body;

//     hobbit.id = nextId++;

//     hobbits.push(hobbit)

//     res.status(201).json(hobbit)
// })
// //CREATE
// //================================================================================================================

// server.put('/hobbits/:id', (req, res) => {
//     const hobbit = hobbits.find(hobbit => hobbit.id == req.params.id);

//     if(!hobbit) {
//         res.status(404).json({"message": "hobbit does not exist"});
//     } else {
//         Object.assign(hobbit, req.body);

//         res.status(200).json(hobbit);
//     }
// })//UPDATE

// //================================================================================================================
// server.delete('/hobbits/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(req.params)
//     // or we could destructure it like so: const { id } = req.params;
//     res.status(200).json({
//       url: `/hobbits/${id}`,
//       operation: `DELETE for hobbit with id ${id}`,
//     });
//   });
// //DELETE
// //================================================================================================================

// server.listen(port, () => {
//     console.log(`\n** server listening on localhost:${port} **\n`)
// })