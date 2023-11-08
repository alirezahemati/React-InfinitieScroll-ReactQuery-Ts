import { useEffect } from "react";

import PhotosList from "../../components/PhotosList";
import axios from "axios";

import { useInfiniteQuery } from "react-query";

export const generateId = () => Math.floor(Math.random() * 10001);

const fetchData = async (pageParam: number) => {
  const response = await axios.get(
    `https://uniplato.staging.uniplato.us/api/v1/mock-data?limit=10&page=${pageParam}`
  );
  return response.data;
};

const Photos = () => {
  const { data, hasNextPage, fetchNextPage, error, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["feeds"],
      queryFn: ({ pageParam = 1 }) => {
        return fetchData(pageParam);
      },
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage?.data?.page + 1;
        const hasNextPage = lastPage.data.hasNextPage;
        return hasNextPage ? nextPage : false;
      },
    });

  useEffect(() => {
    const onScroll = async (event: Event) => {
      const { scrollHeight, scrollTop, clientHeight } = (
        event.target as Document
      ).scrollingElement as HTMLElement;
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (hasNextPage) await fetchNextPage();
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center capitalize">
        an error occurred
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center p-2 md:p-10 max-w-md mx-auto">
      <h1 className="text-3xl text-white transition duration-500 font-bold capitalize mb-5">
        photos
      </h1>
      {data &&
        data.pages.map((page) => {
          return <PhotosList key={generateId()} photos={page?.data?.data} />;
        })}
      {isFetchingNextPage && (
        <div className="text-white pb-8">
          LOADING...
          {/* <LoaderSpinner />
          <CardLoader /> */}
        </div>
      )}
    </div>
  );
};

export default Photos;
