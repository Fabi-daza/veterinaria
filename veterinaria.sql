CREATE TABLE region (
	idregion SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(100)
    );
    
CREATE TABLE comuna (
	idcomuna SERIAL PRIMARY KEY NOT NULL,
    idregion INTEGER NOT NULL,
    nombre VARCHAR(100)
    );
     
CREATE TABLE horario(
	idhorario SERIAL PRIMARY KEY NOT NULL,
    descripcion VARCHAR(400)
    );

CREATE TABLE reserva(
	idreserva SERIAL PRIMARY KEY NOT NULL,
    rut VARCHAR(15),
    nombre VARCHAR(100),
    nombremascota VARCHAR(100),
    email VARCHAR(100),
    idcomuna INTEGER,
    idregion INTEGER,
    fecha DATE,
    idhorario INTEGER,
    recordatorio BOOLEAN,
    web BOOLEAN,
    tv BOOLEAN,
    amigos BOOLEAN
    );
    
INSERT INTO horario(descripcion) VALUES
	('8:00 a 9:00'), ('9:00 a 10:00'),
    ('10:00 a 11:00'),('11:00 a 12:00'),
    ('13:00 a 14:00'),('14:00 a 15:00'),
    ('15:00 a 16:00'),('16:00 a 17:00'),
    ('17:00 a 18:00')
    ;
INSERT INTO region(nombre) VALUES
	('Metropolitana'),
    ('Valparaiso'),
    ('Coquimbo')
    ;
INSERT INTO comuna(idregion,nombre) VALUES
	(1,'Maipu'),(1,'Puente Alto'),(1,'Santiago'),
    (1,'Pudahuel'),(2,'Valparaiso'),(2, 'Viña del Mar'),
    (2,'Quillota'),(3,'Coquimbo'),(3, 'La Serena')
    ;

--FUNCIONES

CREATE OR REPLACE FUNCTION fn_valida_fecha_reserva(DATE, INTEGER)
RETURNS BOOLEAN AS $$
DECLARE 
	_fechareserva ALIAS FOR $1;
    _horareserva ALIAS FOR $2;
    _existe INTEGER;
BEGIN	
	IF _fechareserva IS NULL THEN
    	RETURN FALSE;
	ELSIF _horareserva IS NULL THEN
    	RETURN FALSE;
    END IF;
    
    SELECT COUNT(*) INTO _existe
    FROM reserva
    WHERE fecha = _fechareserva AND idhorario = _horareserva;
    
    IF _existe > 0 THEN
    	RETURN FALSE;
    ELSE RETURN TRUE;
    END IF;
END
$$ LANGUAGE plpgsql;