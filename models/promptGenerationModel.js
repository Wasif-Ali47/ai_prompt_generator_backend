const mongoose = require("mongoose");

const promptGenerationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
      default: null,
    },
    input: { type: String, required: true, trim: true },
    generatedPrompt: { type: String, required: true, trim: true },
    model: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PromptGeneration", promptGenerationSchema);
