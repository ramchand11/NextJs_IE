// import wrapWithHtmlTags from "@/app/wrapWithHtmlTags";
import { NextResponse } from "next/server";


// const PageWithSSR = ({ data }) => (
//   <div>
//     <h1>Server-Side Rendered Page</h1>
//     <p>Data fetched from server: {data}</p>
//   </div>
// );

export async function GET(req) {
  // const fullHtml = wrapWithHtmlTags(PageWithSSR, { data :"hello"});

  return NextResponse.json({
    msg: "I am from nextJs API",
  });
  }