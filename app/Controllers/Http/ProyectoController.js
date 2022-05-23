'use strict'

const Proyect = use('App/Models/Proyecto');
const AuthorizationService = use('App/Services/AuthorizationService')
class ProyectoController {
    async index ({ auth }) {
        const user = await auth.getUser();
        console.log(user.id);
       return await user.proyectos().fetch();
    }

    async create ({ auth, request }) {
        const user = await auth.getUser();
        const { name } = request.all();
        const project = new Proyect();
        project.fill({
            name,
        });
        await user.proyectos().save(project);
        return project;
    }

    async destroy ({ auth,  response, params }) {
        const { id } = params;
        const user = await auth.getUser();
        const proyect = await Proyect.find(id);
        AuthorizationService.verificarPermiso(proyect, user);
        await proyect.delete();
        return proyect;    
    }

    async update ({ params, auth, request }) {
        const user = await auth.getUser();
        const { id } = params;
        const proyect = await Proyect.find(id);
        AuthorizationService.verificarPermiso(proyect, user);
        proyect.merge(request.only('name'));
        await proyect.save();
        return proyect;
    }
}

module.exports = ProyectoController
