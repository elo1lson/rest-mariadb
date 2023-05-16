import multer from "multer";
import multerConfig from "../config/multer";

import Photo from "../models/Foto";
const upload = multer(multerConfig).single("foto");

class Home {
	async store(req, res) {
		return upload(req, res, async (err) => {
			if (err) {
				return res.status(400).json({
					errors: [err.code],
				});
			}
			try {
				const { originalName, fileName } = req.file;
				const { aluno_id } = req.body;
				const photo = await Photo.create({ originalName, fileName, aluno_id });
				return res.json(photo);
			} catch (e) {
				return res.status(400).json({
					errors: ["Aluno nao existe."],
				});
			}
		});
	}
}
export default new Home();
