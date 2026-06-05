const priority = {
  Placement: 1,
  Result: 2,
  Event: 3
};

export const sortNotifications = (data) => {
  return data.sort((a, b) => {

    if (priority[a.type] !== priority[b.type]) {
      return priority[a.type] - priority[b.type];
    }

    return (
      new Date(b.timestamp) -
      new Date(a.timestamp)
    );
  });
};