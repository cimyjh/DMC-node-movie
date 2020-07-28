const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    // RDB에서의 외래키 개념 같다.
    // User의 스키마가 자동 추가된 상태가 된다.
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: String,
    },
    movieTitle: {
      type: String,
    },
    moviePost: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
