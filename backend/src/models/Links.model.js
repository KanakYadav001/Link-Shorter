import mongoose from "mongoose";

// Links Schema
const LinksSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      minlength: 6, // Minimum length of 6 characters
    },
    originalUrl: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    password: {
      isPasswordProtected: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: null,
      },
    },
    isOneTimeUse: {
      type: Boolean,
      default: false,
    },
    isUsed: {
      type: Boolean,
      default: false,
    }, // Field to track if the one-time use link has been used
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Pre-save middleware to hash the password if it is set
LinksSchema.pre("save", async function (next) {
  if (this.password.isPasswordProtected && this.isModified("password.value")) {
    const salt = await bcrypt.genSalt(10);
    this.password.value = await bcrypt.hash(this.password.value, salt);
  }
  next();
});

// Method to compare entered password with hashed password
LinksSchema.methods.comparePassword = async function (enteredPassword) {
  if (!this.password.isPasswordProtected) {
    return false; // No password protection, so comparison is not applicable
  }
  return await bcrypt.compare(enteredPassword, this.password.value);
};

// Method to check if the link is expired (for one-time use links)
LinksSchema.methods.isExpired = function () {
  if (this.isOneTimeUse && this.isUsed) {
    return true; // Link is expired if it is one-time use and has been used
  }
  return false; // Link is not expired
};

const Links = mongoose.model("Links", LinksSchema);

export default Links;
