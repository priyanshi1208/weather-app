import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  weatherCard: {
    width: '350px',
    padding: '16px',
    margin: '56px auto',
    textAlign: 'center',
    backgroundColor: '#f0f4f8',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toggleBar: {
    backgroundColor :'white !important'
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "20px 0",
    // maxWidth: "800px", // Limit the width of the container
  },
  city: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important',
    fontFamily : 'Open Sans !important'
  },
  temp: {
    fontSize: '1rem !important',
    color: '#ff7f50 !important',
    fontWeight: 'bold !important',
    margin: '8px 0 !important',
    fontFamily : 'Open Sans !important'
  },
  conditionText: {
    fontSize: '2rem !important',
    color: '#6b6b6b !important',
    fontFamily : 'Open Sans !important'
  },
  weatherIcon: {
    width: '80px',
    height: '80px',
  },
  wrapper: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    padding: "20px",
    color: "#fff", // Ensure the text is readable against the background
  },
  forecastWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "20px",
  },
  cardWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background for better text contrast
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    color: "#fff",
  },
});

export const searchUsestyle = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "250px", // Limit the maximum width of the dropdown
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    boxSizing: "border-box", // Include padding and border in element's total width and height
    '&:focus': {
      outline: "none",
      borderColor: "#007bff", // Change border color on focus
    },
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 1000,
  },
  cityList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    color : 'black'
  },
  cityItem: {
    padding: "10px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "#f1f1f1", // Highlight on hover
    },
  },
  noResults: {
    padding: "10px",
    textAlign: "center",
    color: "#888",
  },
})
export const forecastStyles = makeStyles({
  forecastCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "250px", // Adjust the width of each card
    fontFamily : 'Open Sans !important'
  },
  date: {
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: "8px",
    fontFamily : 'Open Sans !important'
  },
  weatherIcon: {
    width: "50px",  // Adjust the size of the weather icon
    height: "50px",
    margin: "10px 0",
  },
  temp: {
    fontSize: "14px",
    color: "#333",
    fontFamily : 'Open Sans !important'
  },
  conditionText: {
    fontSize: '1.4rem !important',
    color: '#6b6b6b !important',
    fontFamily : 'Open Sans !important'
  },
})
