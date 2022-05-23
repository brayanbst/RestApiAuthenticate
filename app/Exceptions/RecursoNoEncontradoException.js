'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class RecursoNoEncontradoException extends LogicalException {
  handle (error, { response }) {
    return response.status(404).json({
      message: 'MAIN_NOT_FOUND',
    })
  }
}

module.exports = RecursoNoEncontradoException
