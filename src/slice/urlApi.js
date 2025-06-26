import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiPath = "http://urls-sh-backend.vercel.app/urls";

export const createUrl = createAsyncThunk(
  "urls/createUrl",
  async (urlData, { rejectWithValue }) => {
    try {
      const res = await axios.post(apiPath, urlData, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchUrls = createAsyncThunk(
  "urls/fetchUrls",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(apiPath, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteUrl = createAsyncThunk(
  "urls/deleteUrl",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(apiPath + "/" + id, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUrl = createAsyncThunk(
  "urls/updateUrl",
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        apiPath + "/" + url.id,
        { shortUrl: url.shortUrl },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
