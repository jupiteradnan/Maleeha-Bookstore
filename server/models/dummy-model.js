module.exports = (sequelize, Types) => {
  const addon_translation = sequelize.define(
    "addon_translation",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Types.INTEGER,
      },
      title: {
        allowNull: false,
        type: Types.STRING,
      },
      locale: {
        allowNull: false,
        type: Types.STRING,
      },
    },
    {
      underscored: true,
    }
  );

  addon_translation.associate = function (models) {
    addon_translation.belongsTo(models.addon, { foreignKey: "addon_id" });
  };
  return addon_translation;
};
