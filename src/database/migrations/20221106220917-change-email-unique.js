/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn("Alunos", "email", {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		});
	},

	async down() {},
};
