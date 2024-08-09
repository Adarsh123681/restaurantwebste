import {useState, createContext , ReactNode , useContext} from "react";
import menuItem,{menu} from "@/assets/menuItem";

interface MenuContextType {
  items: menu[];
}

const create = createContext<MenuContextType | undefined>(undefined)


