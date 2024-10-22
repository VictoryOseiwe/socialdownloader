import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import allDl from "rahad-media-downloader";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my all social media video downloader" });
});

app.get("/download", async (req, res) => {
  const { URL } = req.body;

  try {
    const video = await allDl.rahadtikdl(URL);
    const videoDetails = {
      title: video.data.title,
    };
    res.json(video);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to download video" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
