class Acceso {
    constructor(id, year, empleado, month, day, minuto, hora, tipo, fecha, horaReal, minutoReal) {
        this.id = id;
        this.year = year;
        this.empleado = empleado;
        this.month = month;
        thia.day = day;
        this.minuto = minuto;
        this.hora = hora;
        this.tipo = tipo;
        this.fecha = fecha;
        this.horaReal = horaReal;
        this.minutoReal = minutoReal;
    }
}
class Employee {
    constructor(id, nombre, apellidos, dni, identificador, fechaAlta, fechaBaja, day) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.identificador = identificador;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.day = day;
    }
}

class Day {
    constructor(id, lunes, martes, miercoles, jueves, viernes, sabado, domingo, especial, descripcion) {
        this.id = id;
        this.lunes = lunes
        this.martes = martes
        this.miercoles = miercoles
        this.jueves = jueves
        this.viernes = viernes
        this.sabado = sabado
        this.domingo = domingo
        this.especial = especial
        this.descripcion = descripcion;
    }

}
class Status {
    constructor(id, descripcion, tipo, color) {
        this.id = id
        this.descripcion = descripcion
        this.tipo = tipo
        this.color = color

    }
}
class User {
    constructor(id, user, password, enabled, rol) {
        this.id = idthis.user = user
        this.password = password
        this.enabled = enabled
        this.rol = rol
    }
}
class Rol {
    constructor(id, rol) {
        this.id = id
        this.rol = rol
    }
}
class Calendar {
    constructor(id, fecha, status) {
        this.id = id
        this.fecha = fecha
        this.status = status
    }
}
class EmployeeStatus {
    constructor(id, employee, status, calendar, day) {
        this.id = id
        this.employee = employee
        this.status = status;
        this.calendar = calendar
        this.day = day
    }
}


class Login {
    constructor(user, password) {
        this.user = user
        this.password = password
    }
}