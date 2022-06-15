export const errorHandler = (error) => {
  console.log("-e-> GraphQLErrors", error.graphQLErrors);
  console.log("-e-> NetworkError", error.networkError);
  console.log("-e-> ExtraInfo", error.extraInfo);
  console.log("-e-> Response", error.response);
  console.log("-e-> Message", error.message);

  if (error.graphQLErrors && error.graphQLErrors.length) {
    let [response] = error.graphQLErrors;
    return response.message;
  } else if (error.networkError) {
    return `${error.networkError}`;
  } else if (error.message) {
    return `${error.message}`;
  } else {
    return "Something went wrong";
  }
};
