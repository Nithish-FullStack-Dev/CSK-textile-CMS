import dotenv from "dotenv";
import prisma from "./config/db.js";
import bcrypt from "bcryptjs";

dotenv.config();

const seedAdmin = async () => {
  try {
    // Delete existing data
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    // Create Admin
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const admin = await prisma.user.create({
      data: {
        name: "Chief Admin",
        email: "admin@csk.com",
        password: hashedPassword,
        role: "admin",
      },
    });

    console.log("✅ Admin created: admin@csk.com / admin123");

    // Add some sample products
    await prisma.product.createMany({
      data: [
        {
          name: "Blue Premium Suit",
          category: "suiting",
          price: 15000,
          image: ["https://images.unsplash.com/photo-1594932224491-ef243e023bb2?q=80&w=500"],
          description: "Premium tailored blue suit for special occasions.",
          fabric: "Wool Blend",
          colors: ["Blue"],
          tags: ["Premium", "Wedding"],
          isNewArrival: true,
          authorId: admin.id,
        },
        {
          name: "Classic White Shirt",
          category: "shirting",
          price: 2500,
          image: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500"],
          description: "Essential white shirt for every wardrobe.",
          fabric: "Egyptian Cotton",
          colors: ["White"],
          tags: ["Classic", "Office"],
          isNewArrival: false,
          authorId: admin.id,
        }
      ]
    });

    console.log("✅ Sample products created");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();