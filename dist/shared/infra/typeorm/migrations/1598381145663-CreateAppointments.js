"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateAppointments1598381145663 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'appointments',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'provider',
        type: 'varchar'
      }, {
        name: 'date',
        type: 'timestamp with time zone'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('appointments');
  }

}
/**
 * Linha do tempo
 *
 * 1ª semana: Criou tabela de Agendamentos;
 * 2ª semana: Criou tabela de Usuários;
 * (Novo Dev)3ª semana: Edição na tabela de Agendamentos
 * 4ª semana: Compras
 *
 * As Migrations padroniza os bancos de dados para serem iguais entre o time de desenvolvimento
 *
 */


exports.default = CreateAppointments1598381145663;