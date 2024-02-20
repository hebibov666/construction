"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";
import Service from "./components/Services";
import { client } from "@/sanity/lib/client";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
const inter = Inter({ subsets: ["latin"] });
export default function Home({contact,about}) {
  return (
    <main>
    <Navbar/>
    <SliderSection/>
    <Service/>
    <AboutUs about={about}/>
    <Footer contact={contact}/>
    </main>
  );
}
export async function getServerSideProps() {
  try {
    const about = await client.fetch(
      `*[_type=="about"]{
        _id,
        description,
      }`
    );

    const contact = await client.fetch(
      `*[_type=="contact"]{
        _id,
      phone,
      email,
      facebook,
      whatsapp,
      instagram
    }`
    );

    return {
      props: {
        contact,
        about,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        contact: [],
        about: null,
      },
    };
  }
}