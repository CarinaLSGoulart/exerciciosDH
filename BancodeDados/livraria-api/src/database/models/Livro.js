const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define(
        "Livro",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                notNull: true,
            },
            titulo: {
                type: DataTypes.STRING,
                notNull: true,
            },
            quantidadePaginas: {
                type: DataTypes.INTEGER,
                notNull: true,
            },
            autor: {
                type: DataTypes.STRING,
                notNull: true,
            },
            anoLancamento: {
                type: DataTypes.STRING,
                notNull: true,
            },
            estoque: {
                type: DataTypes.INTEGER,
                notNull: true,
            }
        },
        {
            tableName: "livros",
            timestamps: false,
            underscored: true,
        },
    )
    return Livro;
}
