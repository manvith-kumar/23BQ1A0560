import axios from "axios";

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWEwNTYwQHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM2ODA2LCJpYXQiOjE3ODA2MzU5MDYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxNThkMThkYS1mZTY1LTRhODEtODg5ZC1jZDM5NTExODJjYzQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYW52aXRoIGt1bWFyIHJlZGR5Iiwic3ViIjoiNjUwNjgxZGUtMGJjZC00MzY1LTgxYWItZjY4NTY0OWNmOGRkIn0sImVtYWlsIjoiMjNicTFhMDU2MEB2dml0Lm5ldCIsIm5hbWUiOiJtYW52aXRoIGt1bWFyIHJlZGR5Iiwicm9sbE5vIjoiMjNicTFhMDU2MCIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjY1MDY4MWRlLTBiY2QtNDM2NS04MWFiLWY2ODU2NDljZjhkZCIsImNsaWVudFNlY3JldCI6InR2R25NRE1IQXBYSmtXQnYifQ.PIjYiJiMzysbfn9UkJL4RM6sfGGWaZsjTL-QkZ0G7kY";

const LOG_URL =
"http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message
) {

  try {

    const response =
      await axios.post(
        LOG_URL,
        {
          stack,
          level,
          package: packageName,
          message
        },
        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`,
            "Content-Type":
              "application/json"
          }
        }
      );

    return response.data;

  } catch (error) {

    console.log(
      "Logging Failed",
      error.response?.data ||
      error.message
    );

  }

}