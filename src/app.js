import mongoose from "mongoose";
import express from "express";
import productRouter from  './routers/product';

const app =express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/assigment')

export const viteNodeApp = app;