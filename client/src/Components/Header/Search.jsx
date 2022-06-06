import React, { useState, useEffect } from "react";
import { InputBase, List, ListItem, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "35%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "55%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "55%",
  },
}));
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: black;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)(({ theme }) => ({
  position: "absolute",
  color: "#000",
  width: "407px",
  textOverflow: "ellipsis",
  background: "#FFFFFF",
  marginTop: "36px",
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    width: "357px",
    textOverflow: "ellipsis",
    background: "#FFFFFF",
    marginTop: "36px",
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    width: "347px",
    textOverflow: "ellipsis",
    background: "#FFFFFF",
    marginTop: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    width: "247px",
    textOverflow: "ellipsis",
    background: "#FFFFFF",
    marginTop: "36px",
  },
}));

const Search = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [text, setText] = useState();
  const [open, setOpen] = useState(false);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SearchContainer onClose={handleClose}>
      <InputSearchBase
        placeholder="Search for more Product,Brand and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setText("")}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
