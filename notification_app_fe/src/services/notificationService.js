import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWEwNTYwQHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM2ODA2LCJpYXQiOjE3ODA2MzU5MDYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxNThkMThkYS1mZTY1LTRhODEtODg5ZC1jZDM5NTExODJjYzQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYW52aXRoIGt1bWFyIHJlZGR5Iiwic3ViIjoiNjUwNjgxZGUtMGJjZC00MzY1LTgxYWItZjY4NTY0OWNmOGRkIn0sImVtYWlsIjoiMjNicTFhMDU2MEB2dml0Lm5ldCIsIm5hbWUiOiJtYW52aXRoIGt1bWFyIHJlZGR5Iiwicm9sbE5vIjoiMjNicTFhMDU2MCIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjY1MDY4MWRlLTBiY2QtNDM2NS04MWFiLWY2ODU2NDljZjhkZCIsImNsaWVudFNlY3JldCI6InR2R25NRE1IQXBYSmtXQnYifQ.PIjYiJiMzysbfn9UkJL4RM6sfGGWaZsjTL-QkZ0G7kY";

export const getNotifications = async (
  page = 1,
  limit = 10,
  notificationType = ""
) => {

  try {

    let url =
      `http://4.224.186.213/evaluation-service/notifications?page=${page}&limit=${limit}`;

    if (
      notificationType &&
      notificationType !== "All"
    ) {
      url +=
        `&notification_type=${notificationType}`;
    }

    console.log("Calling URL:");
    console.log(url);

    const response =
      await axios.get(
        url,
        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`
          }
        }
      );

    console.log("SUCCESS");
    console.log(response.data);

    return (
      response.data.notifications || []
    );

  } catch (error) {

    console.log("API ERROR");

    if(error.response){
      console.log(error.response.status);
      console.log(error.response.data);
    }else{
      console.log(error.message);
    }

    return [];
  }
};