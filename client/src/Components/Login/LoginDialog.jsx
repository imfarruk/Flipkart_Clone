import React, { useState, useContext } from "react";
import {
  Dialog,
  styled,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material/";

import CancelIcon from "@mui/icons-material/Cancel";
import { authenticateSignup, authenticateLogin } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider";
const Component = styled(Box)`
  height: 75vh;
  width: 95vh;
`;

const ImageBox = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 90% no-repeat;
  ${"" /* height: 100%; */}
  width: 40%;
  & > p,
  & > h5 {
    color: #fff;
    padding: 20px 15px;
  }
`;

const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 5px 25px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 7px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 28px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 12px;
  text-align: center;
  color: #656565;
  font-weight: 600;
  padding-top: 20px;
  cursor: pointer;
`;

const CancelIconModify = styled(CancelIcon)`
  position: absolute;
  right: 0;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Please login for order",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "SignUp with your Mobile number",
  },
};

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
`;

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, setToggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const { setAccount } = useContext(DataContext);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setToggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    setToggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    console.log(response);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setError(false); 
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <CancelIconModify onClick={handleClose} />
        <Box style={{ display: "flex", height: "100%" }}>
          <ImageBox>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </ImageBox>

          {account.view === "login" ? (
            <ContentBox>
              <TextField
                onChange={(e) => onValueChange(e)}
                variant="standard"
                name="username"
                label="Enter username"
              ></TextField>
              {error && <Error>Please enter valid data</Error>}
              <TextField
                onChange={(e) => onValueChange(e)}
                variant="standard"
                name="password"
                label="Enter password"
                type="password"
              ></TextField>
              <Text>
                By Cotinuing,You agree to Flipkart terms and condition
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>REQUEST OTP </RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create new account
              </CreateAccount>
            </ContentBox>
          ) : (
            <ContentBox>
              <TextField
                variant="standard"
                label="Enter FirstName "
                name="firstname"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter LastName"
                name="lastname"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Phone"
                name="phone"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onInputChange(e)}
              ></TextField>

              <LoginButton onClick={() => signupUser()}>SignUp</LoginButton>
            </ContentBox>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
