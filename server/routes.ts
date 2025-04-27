import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form data
      const contact = await storage.createContact(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        return res.status(400).json({ 
          success: false, 
          message: "Validation error",
          errors: error.errors 
        });
      }
      
      // Handle other errors
      console.error("Error handling contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
