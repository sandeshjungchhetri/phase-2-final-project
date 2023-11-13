import { getDefaultNormalizer } from "@testing-library/react";
import react,{useState} from "react";
import { useEffect } from "react/cjs/react.development";
import Card from "./Card";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
