import AuthProvider from "./context/auth/auth.provider";
import { AppRouter } from "./routes/AppRouter";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
