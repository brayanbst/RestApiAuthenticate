'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      table.integer('user_id', 80).unsigned().references('id').inTable('users')
      table.string('name', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = UserSchema
