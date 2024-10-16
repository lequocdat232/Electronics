import express from "express";
import postController from "../../controllers/post.controller";

const router = express.Router();

router.post("", postController.createDocument);
router.get("", postController.findAll);
router.get("/:id", postController.findById);
router.put("/:id", postController.updateById);
router.delete("/:id", postController.deleteById);

export default router;
