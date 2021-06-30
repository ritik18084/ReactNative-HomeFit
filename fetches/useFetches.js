import { useState, useEffect } from "react";

export const useFetchImages = (url) => {
  const [imageData, setImageData] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Auth-Token": "8be1b2190d742d5342710bc84fe1b5ac3b416aab" },
    });
    const data = await response.json();
    setImageData(data);
    setIsLoadingImages(false);
    //console.log(data);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return { isLoadingImages, imageData };
};

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Auth-Token": "8be1b2190d742d5342710bc84fe1b5ac3b416aab" },
    });
    const data = await response.json();
    setData(data);
    setIsLoading(false);
    //console.log(data);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [isLoading, data];
};

export const useFetch2 = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Auth-Token": "8be1b2190d742d5342710bc84fe1b5ac3b416aab" },
    });
    const data = await response.json();
    setData(data);
    setIsLoading(false);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [isLoading, data];
};
