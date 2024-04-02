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

app.post("/store_images", upload.array("images", 10), async (req, res) => {
  try {
    const imagesWithNames = req.body.images_with_names;

    for (const imgInfo of imagesWithNames) {
      const personName = imgInfo.person_name;
      const imageData = imgInfo.image_data;

      // Check if a collection for the person already exists
      const collectionExists = await mongoose.connection.db
        .listCollections({ name: personName })
        .hasNext();

      // If the collection exists, use the existing collection
      let collection;
      if (collectionExists) {
        collection = mongoose.connection.db.collection(personName);
      } else {
        // If the collection does not exist, create a new one
        collection = mongoose.connection.db.createCollection(personName);
      }

      // Insert the image document into the collection
      await collection.insertOne({ image_data: imageData });
    }

    res.status(200).json({ message: "Images stored successfully in MongoDB" });
  } catch (error) {
    console.error("Error while storing images in MongoDB:", error);
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
