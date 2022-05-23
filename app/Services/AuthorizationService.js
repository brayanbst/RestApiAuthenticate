const AccesoProhibidoException = use('App/Exceptions/AccesoProhibidoException')
const RecursoNoEncontradoExeption = use('App/Exceptions/RecursoNoEncontradoException')

class authorizationService {
    verificarPermiso (recurso, user) {
        if (!recurso) {
            throw new RecursoNoEncontradoExeption();
        }
        if (recurso && recurso.user_id !== user.id) {
            throw new AccesoProhibidoException();
        }
    }
}
module.exports = new authorizationService;