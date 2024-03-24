const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;

// Body parser middleware

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// MongoDB connection
mongoose.connect(
  "mongodb+srv://pranraik123:pranav@cluster0.eea53ov.mongodb.net/ImagePro?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where the images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// // Route to store the image in MongoDB
// app.post("/store_image", upload.single("image_data"), async (req, res) => {
//     try {
//       // Extract person's name from the request
//       const personName = req.body.person_name;

//       // Check if a collection for the person already exists
//       const collectionExists = await mongoose.connection.db
//         .listCollections({ name: personName })
//         .hasNext();

//       // Convert the image data to base64 string
//       const imageData = req.file.buffer.toString("base64");

//       // If the collection exists, store the image in that collection
//       if (collectionExists) {
//         // Use the existing collection to store the image
//         const existingCollection = mongoose.connection.db.collection(personName);

//         // Insert the base64-encoded image data into the collection
//         await existingCollection.insertOne({ image_data: imageData });

//         res.status(200).json({
//           message: `Image stored successfully in collection ${personName}`,
//         });
//       } else {
//         // If the collection does not exist, create a new collection and store the image
//         const newCollection = mongoose.connection.db.collection(personName);

//         // Insert the base64-encoded image data into the new collection
//         await newCollection.insertOne({ image_data: imageData });

//         res.status(200).json({
//           message: `Image stored successfully in new collection ${personName}`,
//         });
//       }
//     } catch (error) {
//       console.error("Error while storing image in MongoDB:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });

// Route to store the image in MongoDB
app.post("/store_image", upload.single("image_data"), async (req, res) => {
  try {
    // Extract person's name from the request
    const personName = req.body.person_name;
    console.log(req.body);
    console.log("Image darta", req.body.image_data);

    // Check if a collection for the person already exists
    const collectionExists = await mongoose.connection.db
      .listCollections({ name: personName })
      .hasNext();

    // If the collection exists, store the image in that collection
    if (collectionExists) {
      // Use the existing collection to store the image
      const existingCollection = mongoose.connection.db.collection(personName);

      // Insert the image document into the collection
      await existingCollection.insertOne({ image_data: req.body.image_data });

      res.status(200).json({
        message: `Image stored successfully in collection ${personName}`,
      });
    } else {
      // If the collection does not exist, create a new collection and store the image
      const newCollection = mongoose.connection.db.createCollection(personName);

      // Insert the image document into the new collection
      await newCollection.insertOne({ image_data: req.body.image_data });

      res.status(200).json({
        message: `Image stored successfully in new collection ${personName}`,
      });
    }
  } catch (error) {
    console.error("Error while storing image in MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Route to retrieve data from all collections
app.get("/get_all_data", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.collections();
    const data = [];

    for (let i = 0; i < collections.length; i++) {
      const collectionName = collections[i].collectionName;
      const collectionData = await mongoose.connection.db
        .collection(collectionName)
        .find({})
        .toArray();
      data.push({ collectionName, collectionData });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error while retrieving data from MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
