"use client";
import React from "react";
import Grid from "./Grid";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Grid container>{children}</Grid>;
};

export default Container;
