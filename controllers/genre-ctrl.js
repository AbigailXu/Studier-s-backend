const Genre = require("../models/genre-model");

createGenre = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a genre.",
    });
  }

  const genre = new Genre(body);

  if (!genre) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  genre
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: genre._id,
        message: "Genre created!",
      });
    })

    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Genre not created!",
      });
    });
};

updateGenre = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a genre to update.",
    });
  }

  Genre.findOne({ _id: req.params.id }, (err, genre) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Genre not found",
      });
    }
    genre.name = body.name;

    genre
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: genre._id,
          message: "Genre updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Genre not updated!",
        });
      });
  });
};

deleteGenre = async (req, res) => {
  await Genre.findOneAndDelete({ _id: req.params.id }, (err, genre) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!genre) {
      return res.status(404).json({ success: false, error: `Genre not found` });
    }

    return res
      .status(200)
      .json({
        success: true,
        data: genre,
      }) 
      .catch((err) => console.log(err));
  });
};

getGenreById = async (req, res) => {
    await Genre.findOne({ _id: req.params.id }, (err, genre) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!genre) {
            return res
                .status(404)
                .json({ success: false, error: `Genre not found` })
        }
        return res.status(200).json({ success: true, data: genre })
    }).catch(err => console.log(err))
}

getGenres = async (req, res) => {
    await Genre.find({}, (err, genres) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        // if (!genres.length) {
        //     return res
        //         .status(404)
        //         .json({ success: false, error: `Genre not found` })
        // }
        return res.status(200).json({ success: true, data: genres })
    }).catch(err => console.log(err))
}

module.exports = {
    createGenre,
    updateGenre,
    deleteGenre,
    getGenres,
    getGenreById,
}
