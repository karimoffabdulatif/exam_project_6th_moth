import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./clothes.css";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 0;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const currentPageData = products?.slice(startIndex, endIndex);
  return (
    <>
      {!loading ? (
        <div>
          <div className="box">
            {currentPageData.map((item, index) => (
              <Card sx={{ maxWidth: 345, boxShadow: "0.5px 0.5px 10px 0.5px #0288d1" }} key={index}>
                <Link
                  to={`/main/${item.id}`}
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  <img src={item.image} alt="" width={260} height={260}  className="clothes_img"/>
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold', marginBottom: "40px"}}>
                    {item?.title.length < 25
                      ? item.title
                      : `${item.title.slice(0, 25)}...`}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="text-dark my-4"
                  >
                    {item.price} $
                    
                 </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/main/${item.id}`}>
                    <Button
                      size="small"
                      variant="contained"
                      style={{ marginBottom: "10px" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
              variant="outlined"
              shape="circular"
            />
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
};

export default Clothes;
