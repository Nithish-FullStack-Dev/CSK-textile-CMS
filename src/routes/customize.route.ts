import express from "express";
import {
  getCustomizeShirts,
  createCustomizeMaterial,
  getCustomize,
  getCustomizeSuit,
  getCustomizeWedding,
  updateCustomizeMaterial,
  deleteCustomizeMaterial,
} from "../controllers/customize.controller.js";

const router = express.Router();

router.route("/add").post(createCustomizeMaterial);

router
  .route("/")
  //   .post(createInquiry)
  .get(getCustomize);

router
  .route("/shirts")
  //   .post(createInquiry)
  .get(getCustomizeShirts);

router
  .route("/suits")
  //   .post(createInquiry)
  .get(getCustomizeSuit);

router
  .route("/wedding")
  //   .post(createInquiry)
  .get(getCustomizeWedding);

router.route("/:id").put(updateCustomizeMaterial);

router.route("/delete/:id").delete(deleteCustomizeMaterial);

export default router;
