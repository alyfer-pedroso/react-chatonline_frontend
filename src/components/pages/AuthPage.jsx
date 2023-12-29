import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://react-chatonline-backend.onrender.com/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Bem-Vindo(a) 👋</div>

        <div className="form-subtitle">Insira seu usuário e comece a conversar</div>

        <div className="auth">
          <div className="auth-label">Usuário</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
