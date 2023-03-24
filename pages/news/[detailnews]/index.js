import React from "react";
import Newss from "@/components/News";
import style from "../../../styles/news.module.css";
import axios from "axios";
import { useRouter } from "next/router";

function News(props) {
  const router = useRouter();
  const { detailnews } = router.query;

  return (
    <div className={style.newsBoard}>
      <Newss data={props.news} pageQuery={detailnews} />
    </div>
  );
}

export default News;

export async function getServerSideProps() {
  // const newsData = axios
  //   .get(`${process.env.NEXT_PUBLIC_siteUrl}/api/news`)
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((e) => {
  //     console.log("뉴스데이터 못가져옴 에러 : ", e);
  //   });

  const testNews = async () => {
    console.log("테스트 뉴~스");
    retrun(
      await axios
        .get(`${process.env.NEXT_PUBLIC_siteUrl}/api/news`)
        .then((res) => {
          return res.data;
        })
    );
  };

  testNews();
  let result = testNews();

  return {
    props: {
      // news: await newsData,
      news: result,
    },
  };
}
