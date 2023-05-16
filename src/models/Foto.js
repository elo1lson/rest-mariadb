import Sequelize, { Model } from "sequelize";
import { SequelizeMethod } from "sequelize/types/utils";
import appConfig from "../config/appConfig";

export default class Aluno extends Model {
	static init(sequelize) {
		super.init(
			{
				originalName: {
					type: Sequelize.STRING,
					defaultValue: "",
					validate: {
						notEmpty: {
							msg: ["Campo nao pode ficar vazio."],
						},
					},
				},
				filename: {
					type: Sequelize.STRING,
					defaultValue: "",
					validate: {
						notEmpty: {
							msg: ["Campo nao pode ficar vazio."],
						},
					},
				},
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return appConfig.url + "/images/" + this.getDataValue("filenamme");
					},
				},
			},
			{
				sequelize,
			},
		);
		return this;
	}

	static associate(models) {
		this.belongsTo(models.Alunos, { foreignKey: "aluno_id" });
	}
}
