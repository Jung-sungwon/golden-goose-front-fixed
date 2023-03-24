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
  const newsData = axios
    .get(`${process.env.NEXT_PUBLIC_siteUrl}/api/news`)
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      news: await newsData,
    },
  };
}
