function App() {
  const year = 2026;
  const title = "React JS";
  const isAvailable = true;

  const student = {
    name: "Anas Sheikh",
    age: 24,
    city: "Ahmedabad",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial",
  };

  const cardStyle = {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const statusStyle = {
    color: isAvailable ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>React Practice Demo</h1>

        <h2>Year: {year}</h2>
        <h2>Title: {title}</h2>

        <h3>
          Available: <span style={statusStyle}>{isAvailable ? "TRUE" : "FALSE"}</span>
        </h3>

        <hr />

        <h2>Student Info</h2>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>City: {student.city}</p>
      </div>
    </div>
  );
}

export default App;