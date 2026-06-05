import axios from "axios";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    console.log({
      stack,
      level,
      package: packageName,
      message
    });
  } catch (error) {
    console.log(error);
  }
};