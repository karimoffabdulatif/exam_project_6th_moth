import { Rating, Typography } from "@mui/material";
import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SinglePage.css";


const SinglePage = () => {
  const { cardId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${cardId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [cardId]);


  return (
    <>
      {!loading ? (
        <div>
          <img src={product?.image} alt="image" width={250}/>
        <div className="desc_img">
          <img src={product?.image} alt="image" width={65} style={{marginRight: "15px", marginTop: "50px", boxShadow: "0.5px 0.5px 5px 0.5px black"}} />
          <img src={product?.image} alt="image" width={65} style={{marginRight: "15px", marginTop: "50px", boxShadow: "0.5px 0.5px 5px 0.5px black"}} />
          <img src={product?.image} alt="image" width={65} style={{marginRight: "15px", marginTop: "50px", boxShadow: "0.5px 0.5px 5px 0.5px black"}} />
          <img src={product?.image} alt="image" width={65} style={{marginRight: "15px", marginTop: "50px", boxShadow: "0.5px 0.5px 5px 0.5px black"}} />
        </div>
          <div>

            <Typography component={"h4"} sx={{marginTop: "-400px", marginLeft: "500px", fontWeight: "bold", fontSize: "20px"}}>{product?.title}</Typography>
            <Rating
              value={Math.round(product?.rating?.rate)}
              size="large"
              readOnly
              sx={{marginLeft: "500px", marginTop: "25px"}}
            />
            <p  style={{marginLeft: "500px", marginTop: "15px", fontSize: "20px", width: "600px"}}> <span style={{fontWeight: "bold"}}>Price: </span> {product?.price} $</p>
            <p style={{marginLeft: "500px", marginTop: "15px", fontSize: "20px"}}> <span style={{fontWeight: "bold"}}>Category: </span> {product?.category}</p>
            <p style={{marginLeft: "500px", marginTop: "15px", fontSize: "20px", width: "600px"}}> <span style={{fontWeight: "bold"}}>Description: </span> {product?.description}</p>
           
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default SinglePage;
