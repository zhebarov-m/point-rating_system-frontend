import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";
import studentIconLogin from "../../assets/img/student-icon.png";
import { Checkbox, Container, FormControlLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { fetchAuth, iFormValues } from "../../redux/slice/auth";
import { selectIsAuth } from "../../redux/slice/authMe";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";

export const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormValues>({
    defaultValues: { email: "admin@gmail.com", password: "11" },
    mode: "onChange",
  });

  const onSubmit = async (values: iFormValues) => {
    const data = await dispatch(fetchAuth(values));

    if (data.payload && "token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    } else {
      alert("Возника ошибка!");
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper className={styles.paperStyle} classes={{ root: styles.root }}>
      <div className={styles.studentIconStyle}>
        <img width={90} src={studentIconLogin} alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Typography
            sx={{ color: "#444444" }}
            classes={{ root: styles.title }}
            variant="h4"
          >
            Вход в аккаунт
          </Typography>
          <TextField
            className={styles.field}
            label="Почта"
            // value={email}
            // onChange={handleEmailChange}
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register("email", { required: "Укажите почту" })}
            type="email"
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Пароль"
            // value={password}
            // onChange={handlePasswordChange}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register("password", { required: "Укажите пароль" })}
            fullWidth
            type="password"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Запомнить меня"
          />
        </Container>
        <Button
          sx={{ width: 100, height: 45, fontSize: 17 }}
          size="large"
          variant="contained"
          fullWidth
          type="submit"
        >
          Войти
        </Button>
      </form>
    </Paper>
  );
};
