import { message, Row } from "antd";
import gsap from "gsap";
import React from "react";
import { PinkButton } from "../../components/buttons/pink-button/PinkButton";
import { LoadingIndicator } from "../../components/loading/LoadingIndicator";
import axios from "axios";
import "./home-page.scss";

export type IHomePageProps = {};

const HomePage: React.FC<IHomePageProps> = ({}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [logoLoaded, setLogoLoaded] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [fileUrl, setFileUrl] = React.useState(null);
  React.useEffect(() => {
    axios
      .get("/api/get-last-catalog")
      .then(function (response) {
        setFileUrl(process.env.MIX_STORAGE_URL + response.data.file);
      })
      .catch(function (error) {
        message.error("Error :(");
      })
      .then(function () {});
  }, [loaded]);
  React.useEffect(() => {
    if (imageLoaded && logoLoaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [imageLoaded, logoLoaded]);

  React.useEffect(() => {
    if (loaded) {
      gsap.fromTo(
        "#image-left-gsap",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          onComplete: () => {
            gsap.fromTo(
              "#logo-home-gsap",
              {
                y: -100,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                onComplete: () => {
                  gsap.fromTo(
                    "#text-h1-gsap",
                    {
                      y: -100,
                      opacity: 0,
                    },
                    {
                      y: 0,
                      opacity: 1,
                      onComplete: () => {
                        gsap.fromTo(
                          "#text-h2-gsap",
                          {
                            y: -100,
                            opacity: 0,
                          },
                          {
                            y: 0,
                            opacity: 1,
                          }
                        );
                      },
                    }
                  );
                },
              }
            );
          },
        }
      );
      gsap.fromTo(
        "#button-gsap",
        {
          scale: 0,
          opacity: 0,
        },
        { scale: 1, opacity: 1, ease: "elastic.out(.4, 0.3)" }
      );
    }
  }, [loaded]);

  return (
    <div className="home-page">
      <div className="max-width-container">
        <div className="row-home">
          <div className="col-left">
            <div className="img-container-home">
              <img
                id="image-left-gsap"
                onLoad={() => setImageLoaded(true)}
                className="fade-in-with-gsap"
                src={require("../../../img/car-gift.png")}
                alt="NAssim collector"
              />
            </div>
          </div>
          <div className="col-right">
            <Row justify="center">
              <img
                id="logo-home-gsap"
                onLoad={() => setLogoLoaded(true)}
                className="fade-in-with-gsap logo-nassim"
                src={require("../../../img/logo.png")}
                alt="Nassim power"
              />
            </Row>
            <Row justify="center">
              <h1 id="text-h1-gsap" className="fade-in-with-gsap">
                إجمع أغطية زبادي شذا و إربح سيارة و جوائز مالية ضخمة
              </h1>
            </Row>
            <Row justify="center">
              <h2 id="text-h2-gsap" className="fade-in-with-gsap">
                للمشاركة و الفوز نزل مجلة المسابقة قم بطباعتها أو تحصل عليها
                مجانا في نقاط التجميع الخاصة بالمسابقة. لمزيد من التفاصيل اطلع
                على قانون المسابقة
              </h2>
            </Row>
            <Row
              justify="center"
              id="button-gsap"
              className="fade-in-with-gsap"
              style={{ position: "relative" }}
            >
              <PinkButton title="نزّل المجلة" fileUrl={fileUrl} />
              <img
                className="gift-box"
                src={require("../../../img/gift.png")}
                alt="Nassim gift box"
              />
            </Row>
          </div>
        </div>
      </div>
      <a href="/game-rules.pdf" target="_blank" className="blue-btn">
        قانون المسابقة
      </a>
      {!loaded && (
        <div className="loading-container">
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
};

export { HomePage };
