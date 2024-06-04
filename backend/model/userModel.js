const mongoose = require("mongoose");
const Counter = require("../config/counter");

async function initializeCounter() {
  const counter = await Counter.findById("userID");
  if (!counter) {
    const newCounter = new Counter({ _id: "userID", seq: 0 });
    await newCounter.save();
  }
}

initializeCounter()
  .then(() => {
    console.log("Counter initialized");
  })
  .catch((err) => {
    console.error("Error initializing counter:", err);
  });

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      require: [true, "please enter name"],
    },
    email: {
      type: String,
      require: [true, "please enter email"],
    },
    type: Number,
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to increment the userID
userSchema.pre("save", async function (next) {
  const doc = this;
  if (doc.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "userID" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.userID = counter.seq;
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
