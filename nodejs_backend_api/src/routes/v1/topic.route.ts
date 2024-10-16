import express from "express";
import topicController from "../../controllers/topic.controller";

const router = express.Router();

router.post("", topicController.createDocument);
router.get("", topicController.findAll);
router.get("/:id", topicController.findById);
router.put("/:id", topicController.updateById);
router.delete("/:id", topicController.deleteById);

export default router;
