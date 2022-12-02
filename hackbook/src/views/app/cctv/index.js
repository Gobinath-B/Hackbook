import {
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/index";
import Webcam from "react-webcam";
import Tesseract, { detect } from "tesseract.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { NavLink } from "react-router-dom";
import Header from "../../../components/common/Header";
import { drawRect } from "../../../utils/drawRect";

const WebcamComponent = () => <Webcam />;
function CCTVSurvilance() {
  const [carinfo, setcarinfo] = useState([
    {
      img: "https://cdni.autocarindia.com/ExtraImages/20180402113123_NumberPlate_Swift.jpg",
      name: "Balaji",
      createdAt: "12/12/22",
      carNumber: "HR26DK8337",
    },
    {
      img: "https://i.pinimg.com/originals/f5/2b/41/f52b412c788042ce34be9a2fdf59c9db.jpg",
      name: "Gobinath",
      createdAt: "12/12/22",
      carNumber: "TN69BB7",
    },
    {
      img: "https://c.ndtvimg.com/2018-10/a7sp8ji_high-security-number-plates_625x300_12_October_18.jpg",
      name: "Iwin",
      createdAt: "12/12/22",
      carNumber: "DLCQ1939",
    },
    {
      img: "https://cdni.autocarindia.com/ExtraImages/20210829035917_BH_Series_plate_wm.jpg",
      name: "Dinesh",
      createdAt: "12/12/22",
      carNumber: "21BH0001AA",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6YNtZjBUv-8LjsMj9JhLHvctWD2gPtNs5g&usqp=CAU",
      name: "Gowtham",
      createdAt: "12/12/22",
      carNumber: "KL51K4999",
    },
  ]);

  const [data, setdata] = useState();
  const videoConstraints = {
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  const runCoco = async () => {
    const net = await cocoSsd.load();
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState == 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.height = videoHeight;
      webcamRef.current.video.width = videoWidth;

      canvasRef.current.height = videoHeight;
      canvasRef.current.width = videoWidth;

      const obj = await net.detect(video);
      console.log("====================================");
      console.log(obj);
      console.log("====================================");

      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    Tesseract.recognize(imageSrc, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setdata(text);
    });
  }, [webcamRef]);

  useEffect(() => {
    runCoco();
  }, []);
  return (
    <Layout>
      <Card sx={{ height: "500px" }}>
        <CardMedia>
          <Header HeaderName={"CCTV Enhancer"} />
          <Grid container p={3} pb={5} md={12} sx={{ position: "relative" }}>
            <Grid item md={7}>
              <Webcam
                ref={webcamRef}
                muted={true}
                style={{
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />

              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",

                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 8,
                  width: 640,
                  height: 480,
                }}
              />
            </Grid>
            <Grid item md={5} justifyContent="center" alignItems={"center"}>
              <Swiper
                direction="vertical"
                height={150}
                mousewheel={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {carinfo?.length != 0 ? (
                  carinfo?.map((e) => (
                    <SwiperSlide>
                      <Card sx={{ width: "1", padding: "5px" }}>
                        <Stack direction={"row"}>
                          <img width={200} height={100} src={e.img}></img>
                          <Stack direction={"column"} p={2}>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Name:{e?.name}
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Number: {e?.carNumber}
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Date: {e?.createdAt}
                            </Typography>
                            <NavLink to={`/cctv/${e.carNumber}`}>
                              View Info
                            </NavLink>
                          </Stack>
                        </Stack>
                      </Card>
                    </SwiperSlide>
                  ))
                ) : (
                  <div>No Data Found</div>
                )}
              </Swiper>
            </Grid>
          </Grid>
        </CardMedia>
      </Card>
    </Layout>
  );
}

export default CCTVSurvilance;
