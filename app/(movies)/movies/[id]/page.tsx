import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail",
};

export default function MovieDetail({ params }) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
