const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  } as React.CSSProperties,
  card: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  } as React.CSSProperties,
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  } as React.CSSProperties,
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  } as React.CSSProperties,
  inputGroup: {
    textAlign: "left",
  } as React.CSSProperties,
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  } as React.CSSProperties,
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  } as React.CSSProperties,
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties,
  footer: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  } as React.CSSProperties,
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  } as React.CSSProperties,
};

export default styles;
