import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { allCategories, type Category } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      
      if (category && typeof category === "string") {
        if (!allCategories.includes(category as Category)) {
          return res.status(400).json({ error: "Invalid category" });
        }
        const products = await storage.getProductsByCategory(category as Category);
        return res.json(products);
      }
      
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  return httpServer;
}
