--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2024-07-05 10:02:45

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: Categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Categorias" (
    id integer NOT NULL,
    nombre character varying(150)
);


ALTER TABLE public."Categorias" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16402)
-- Name: Categorias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Categorias_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Categorias_id_seq" OWNER TO postgres;

--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 216
-- Name: Categorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Categorias_id_seq" OWNED BY public."Categorias".id;


--
-- TOC entry 217 (class 1259 OID 16403)
-- Name: Favoritos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Favoritos" (
    id integer NOT NULL,
    "idUsuario" integer NOT NULL,
    "idOfrecido" integer NOT NULL
);


ALTER TABLE public."Favoritos" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16406)
-- Name: Favoritos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Favoritos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Favoritos_id_seq" OWNER TO postgres;

--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 218
-- Name: Favoritos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Favoritos_id_seq" OWNED BY public."Favoritos".id;


--
-- TOC entry 219 (class 1259 OID 16407)
-- Name: FotosOfrecidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."FotosOfrecidos" (
    id integer NOT NULL,
    "idOfrecido" integer NOT NULL,
    foto character varying(250)
);


ALTER TABLE public."FotosOfrecidos" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16410)
-- Name: FotosOfrecidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."FotosOfrecidos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."FotosOfrecidos_id_seq" OWNER TO postgres;

--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 220
-- Name: FotosOfrecidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."FotosOfrecidos_id_seq" OWNED BY public."FotosOfrecidos".id;


--
-- TOC entry 221 (class 1259 OID 16411)
-- Name: Generos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Generos" (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public."Generos" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16414)
-- Name: Generos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Generos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Generos_id_seq" OWNER TO postgres;

--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 222
-- Name: Generos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Generos_id_seq" OWNED BY public."Generos".id;


--
-- TOC entry 223 (class 1259 OID 16415)
-- Name: Historial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Historial" (
    id integer NOT NULL,
    "idProveedor" integer NOT NULL,
    "idContratador" integer,
    fecha date,
    realizado boolean,
    "calificacionProveedor" integer,
    "resenaProveedor" character varying(150),
    "calificacionContratador" integer,
    "resenaContratador" character varying(150)
);


ALTER TABLE public."Historial" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16418)
-- Name: Historial_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Historial_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Historial_id_seq" OWNER TO postgres;

--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 224
-- Name: Historial_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Historial_id_seq" OWNED BY public."Historial".id;


--
-- TOC entry 225 (class 1259 OID 16419)
-- Name: Ofrecidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Ofrecidos" (
    id integer NOT NULL,
    idusuario integer,
    descripcion character varying(1000),
    idcategoria integer,
    tags character varying(250),
    precio integer
);


ALTER TABLE public."Ofrecidos" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16424)
-- Name: Ofrecidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Ofrecidos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Ofrecidos_id_seq" OWNER TO postgres;

--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 226
-- Name: Ofrecidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Ofrecidos_id_seq" OWNED BY public."Ofrecidos".id;


--
-- TOC entry 227 (class 1259 OID 16425)
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    email character varying(50) NOT NULL,
    nombre character varying(30) NOT NULL,
    apellido character varying(30) NOT NULL,
    direccion character varying(50),
    contrasena character varying(15) NOT NULL,
    "idGenero" integer,
    foto character varying(250),
    "FechaNacimiento" date
);


ALTER TABLE public."Usuarios" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16428)
-- Name: Usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Usuarios_id_seq" OWNER TO postgres;

--
-- TOC entry 4879 (class 0 OID 0)
-- Dependencies: 228
-- Name: Usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;


--
-- TOC entry 229 (class 1259 OID 16429)
-- Name: ZonaOfrecidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ZonaOfrecidos" (
    id integer NOT NULL,
    "idUsuario" integer NOT NULL,
    "idZona" integer NOT NULL
);


ALTER TABLE public."ZonaOfrecidos" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16432)
-- Name: ZonaTrabajador_idTrabajador_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ZonaTrabajador_idTrabajador_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ZonaTrabajador_idTrabajador_seq" OWNER TO postgres;

--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 230
-- Name: ZonaTrabajador_idTrabajador_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ZonaTrabajador_idTrabajador_seq" OWNED BY public."ZonaOfrecidos"."idUsuario";


--
-- TOC entry 231 (class 1259 OID 16433)
-- Name: ZonaTrabajador_idZona_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ZonaTrabajador_idZona_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ZonaTrabajador_idZona_seq" OWNER TO postgres;

--
-- TOC entry 4881 (class 0 OID 0)
-- Dependencies: 231
-- Name: ZonaTrabajador_idZona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ZonaTrabajador_idZona_seq" OWNED BY public."ZonaOfrecidos"."idZona";


--
-- TOC entry 232 (class 1259 OID 16434)
-- Name: ZonaTrabajador_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ZonaTrabajador_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ZonaTrabajador_id_seq" OWNER TO postgres;

--
-- TOC entry 4882 (class 0 OID 0)
-- Dependencies: 232
-- Name: ZonaTrabajador_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ZonaTrabajador_id_seq" OWNED BY public."ZonaOfrecidos".id;


--
-- TOC entry 233 (class 1259 OID 16435)
-- Name: Zonas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Zonas" (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public."Zonas" OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 16438)
-- Name: Zonas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Zonas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Zonas_id_seq" OWNER TO postgres;

--
-- TOC entry 4883 (class 0 OID 0)
-- Dependencies: 234
-- Name: Zonas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Zonas_id_seq" OWNED BY public."Zonas".id;


--
-- TOC entry 4669 (class 2604 OID 16439)
-- Name: Categorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categorias" ALTER COLUMN id SET DEFAULT nextval('public."Categorias_id_seq"'::regclass);


--
-- TOC entry 4670 (class 2604 OID 16440)
-- Name: Favoritos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos" ALTER COLUMN id SET DEFAULT nextval('public."Favoritos_id_seq"'::regclass);


--
-- TOC entry 4671 (class 2604 OID 16441)
-- Name: FotosOfrecidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FotosOfrecidos" ALTER COLUMN id SET DEFAULT nextval('public."FotosOfrecidos_id_seq"'::regclass);


--
-- TOC entry 4672 (class 2604 OID 16442)
-- Name: Generos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Generos" ALTER COLUMN id SET DEFAULT nextval('public."Generos_id_seq"'::regclass);


--
-- TOC entry 4673 (class 2604 OID 16443)
-- Name: Historial id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Historial" ALTER COLUMN id SET DEFAULT nextval('public."Historial_id_seq"'::regclass);


--
-- TOC entry 4674 (class 2604 OID 16444)
-- Name: Ofrecidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ofrecidos" ALTER COLUMN id SET DEFAULT nextval('public."Ofrecidos_id_seq"'::regclass);


--
-- TOC entry 4675 (class 2604 OID 16445)
-- Name: Usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);


--
-- TOC entry 4676 (class 2604 OID 16446)
-- Name: ZonaOfrecidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ZonaOfrecidos" ALTER COLUMN id SET DEFAULT nextval('public."ZonaTrabajador_id_seq"'::regclass);


--
-- TOC entry 4677 (class 2604 OID 16447)
-- Name: ZonaOfrecidos idUsuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ZonaOfrecidos" ALTER COLUMN "idUsuario" SET DEFAULT nextval('public."ZonaTrabajador_idTrabajador_seq"'::regclass);


--
-- TOC entry 4678 (class 2604 OID 16448)
-- Name: ZonaOfrecidos idZona; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ZonaOfrecidos" ALTER COLUMN "idZona" SET DEFAULT nextval('public."ZonaTrabajador_idZona_seq"'::regclass);


--
-- TOC entry 4679 (class 2604 OID 16449)
-- Name: Zonas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Zonas" ALTER COLUMN id SET DEFAULT nextval('public."Zonas_id_seq"'::regclass);


--
-- TOC entry 4848 (class 0 OID 16399)
-- Dependencies: 215
-- Data for Name: Categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Categorias" VALUES (1, 'Salud y belleza');
INSERT INTO public."Categorias" VALUES (2, 'Reparaciones');
INSERT INTO public."Categorias" VALUES (3, 'Cuidado de personas');
INSERT INTO public."Categorias" VALUES (4, 'Class pariculares');


--
-- TOC entry 4850 (class 0 OID 16403)
-- Dependencies: 217
-- Data for Name: Favoritos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4852 (class 0 OID 16407)
-- Dependencies: 219
-- Data for Name: FotosOfrecidos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4854 (class 0 OID 16411)
-- Dependencies: 221
-- Data for Name: Generos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Generos" VALUES (1, 'Masculino');
INSERT INTO public."Generos" VALUES (2, 'Femenino');
INSERT INTO public."Generos" VALUES (3, 'No binario');
INSERT INTO public."Generos" VALUES (4, 'Prefiero no decir');
INSERT INTO public."Generos" VALUES (5, 'Otro');


--
-- TOC entry 4856 (class 0 OID 16415)
-- Dependencies: 223
-- Data for Name: Historial; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Historial" VALUES (1, 1, 2, '2023-01-01', true, 4, 'Buen cuidado de mi abuela durante el día.', 5, 'Cliente satisfecho');
INSERT INTO public."Historial" VALUES (2, 2, 3, '2023-01-02', true, 3, 'Las clases de matemáticas fueron muy útiles.', 4, 'Cliente cordial');
INSERT INTO public."Historial" VALUES (3, 3, 4, '2023-01-03', true, 5, 'El tratamiento facial me dejó la piel muy suave.', 5, 'Cliente satisfecho');
INSERT INTO public."Historial" VALUES (4, 4, 5, '2023-01-04', false, 2, 'La reparación del electrodoméstico tardó un poco más de lo esperado.', 3, 'Cliente comprensivo');
INSERT INTO public."Historial" VALUES (5, 5, 3, '2023-01-05', true, 4, 'Muy buen servicio de asistencia domiciliaria.', 4, 'Cliente cordial');
INSERT INTO public."Historial" VALUES (6, 3, 2, '2023-01-06', false, 3, 'Excelentes clases de inglés, aprendí mucho.', 2, 'Cliente insatisfecho');
INSERT INTO public."Historial" VALUES (7, 2, 1, '2023-01-07', true, 5, 'Me encantó el servicio de peluquería en casa.', 4, 'Cliente cordial');
INSERT INTO public."Historial" VALUES (8, 1, 4, '2023-01-08', false, 2, 'La reparación del techo fue aceptable, pero podría mejorar en algunos detalles.', 3, 'Cliente comprensivo');
INSERT INTO public."Historial" VALUES (9, 4, 2, '2023-01-09', true, 4, 'El masaje fue increíble, definitivamente lo recomendaría.', 5, 'Cliente satisfecho');
INSERT INTO public."Historial" VALUES (10, 3, 5, '2023-01-10', false, 3, 'La reparación del grifo no fue del todo satisfactoria.', 2, 'Cliente insatisfecho');
INSERT INTO public."Historial" VALUES (11, 5, 1, '2023-01-11', true, 5, 'El cuidado de mi abuela fue excelente, gracias por su atención.', 5, 'Cliente satisfecho');
INSERT INTO public."Historial" VALUES (12, 2, 3, '2023-01-12', false, 4, 'Las clases de matemáticas fueron geniales, el profesor explicaba muy bien.', 5, 'Cliente satisfecho');
INSERT INTO public."Historial" VALUES (13, 1, 5, '2023-01-13', true, 3, 'Me encantó el servicio de peluquería en casa.', 4, 'Cliente cordial');
INSERT INTO public."Historial" VALUES (14, 3, 2, '2023-01-14', false, 2, 'La reparación del techo fue aceptable, pero podría mejorar en algunos detalles.', 3, 'Cliente comprensivo');
INSERT INTO public."Historial" VALUES (15, 5, 1, '2023-01-15', true, 4, 'El cuidado de mi abuela fue excelente, gracias por su atención.', 4, 'Cliente cordial');


--
-- TOC entry 4858 (class 0 OID 16419)
-- Dependencies: 225
-- Data for Name: Ofrecidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Ofrecidos" VALUES (2, 1, 'Masaje relajante para aliviar el estrés', 1, NULL, 1900);
INSERT INTO public."Ofrecidos" VALUES (4, 3, 'Cuidado de ancianos en domicilio durante el día', 3, NULL, 4000);
INSERT INTO public."Ofrecidos" VALUES (6, 5, 'Tratamiento facial para rejuvenecer la piel', 1, NULL, 6000);
INSERT INTO public."Ofrecidos" VALUES (7, 6, 'Reparación de electrodomésticos en el hogar', 2, NULL, 5000);
INSERT INTO public."Ofrecidos" VALUES (8, 7, 'Asistencia domiciliaria para personas con discapacidad', 3, NULL, 8200);
INSERT INTO public."Ofrecidos" VALUES (9, 8, 'Clases de inglés para principiantes', 4, NULL, 6500);
INSERT INTO public."Ofrecidos" VALUES (10, 9, 'Servicio de peluquería a domicilio', 1, NULL, 7800);
INSERT INTO public."Ofrecidos" VALUES (11, 10, 'Reparación de techo dañado por filtraciones', 2, NULL, 9000);
INSERT INTO public."Ofrecidos" VALUES (3, 2, 'Reparación de grifo con fugas en el baño', 2, 'agua fuga reparacion plomeria', 8000);
INSERT INTO public."Ofrecidos" VALUES (5, 4, 'Clases particulares de matemáticas para estudiantes de secundaria', 4, 'profesora profe aprender', 7000);
INSERT INTO public."Ofrecidos" VALUES (1, 1, 'hage trabajos de electricidad', 2, 'fuga de electricidad', 2500);


--
-- TOC entry 4860 (class 0 OID 16425)
-- Dependencies: 227
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Usuarios" VALUES (1, 'julieta@gmail.com', 'Juan', 'Gómez', 'Calle 123', 'clave123', 1, 'https://thispersondoesnotexist.com/', '1985-03-15');
INSERT INTO public."Usuarios" VALUES (2, 'maria.lopez@example.com', 'María', 'López', 'Avenida 456', 'password456', 2, 'https://thispersondoesnotexist.com/', '1988-07-22');
INSERT INTO public."Usuarios" VALUES (3, 'carlos.martinez@example.com', 'Carlos', 'Martínez', 'Plaza Principal', 'contraseña789', 3, 'https://thispersondoesnotexist.com/', '1990-11-10');
INSERT INTO public."Usuarios" VALUES (4, 'ana.rodriguez@example.com', 'Ana', 'Rodríguez', 'Calle 789', '123456', 4, 'https://thispersondoesnotexist.com/', '1983-09-05');
INSERT INTO public."Usuarios" VALUES (5, 'pedro.sanchez@example.com', 'Pedro', 'Sánchez', 'Avenida Central', 'abc123', 5, 'https://thispersondoesnotexist.com/', '1986-12-30');
INSERT INTO public."Usuarios" VALUES (6, 'laura.hernandez@example.com', 'Laura', 'Hernández', 'Calle 567', 'qwerty', 1, 'https://thispersondoesnotexist.com/', '1989-05-20');
INSERT INTO public."Usuarios" VALUES (7, 'roberto.diaz@example.com', 'Roberto', 'Díaz', 'Avenida 890', '123abc', 2, 'https://thispersondoesnotexist.com/', '1992-04-18');
INSERT INTO public."Usuarios" VALUES (8, 'sofia.martinez@example.com', 'Sofía', 'Martínez', 'Plaza del Sol', 'password123', 3, 'https://thispersondoesnotexist.com/', '1995-10-08');
INSERT INTO public."Usuarios" VALUES (9, 'diego.garcia@example.com', 'Diego', 'García', 'Calle Luna', 'abcd1234', 4, 'https://thispersondoesnotexist.com/', '1979-11-27');
INSERT INTO public."Usuarios" VALUES (10, 'ana.fernandez@example.com', 'Ana', 'Fernández', 'Avenida del Bosque', 'pass1234', 4, 'https://thispersondoesnotexist.com/', '1983-09-05');
INSERT INTO public."Usuarios" VALUES (11, 'daniel.gonzalez@example.com', 'Daniel', 'González', 'Calle 10', 'password', 5, 'https://thispersondoesnotexist.com/', '1987-02-14');
INSERT INTO public."Usuarios" VALUES (12, 'luisa.molina@example.com', 'Luisa', 'Molina', 'Avenida 20', 'clave', 1, 'https://thispersondoesnotexist.com/', '1993-08-03');
INSERT INTO public."Usuarios" VALUES (13, 'javier.perez@example.com', 'Javier', 'Pérez', 'Calle 30', 'contraseña', 2, 'https://thispersondoesnotexist.com/', '1984-06-25');
INSERT INTO public."Usuarios" VALUES (14, 'elena.ruiz@example.com', 'Elena', 'Ruiz', 'Avenida 40', '12345678', 3, 'https://thispersondoesnotexist.com/', '1998-09-12');
INSERT INTO public."Usuarios" VALUES (15, 'pablo.lopez@example.com', 'Pablo', 'López', 'Calle 50', 'abcdefgh', 4, 'https://thispersondoesnotexist.com/', '1991-03-08');
INSERT INTO public."Usuarios" VALUES (16, 'maiukuper@gmail.com', 'maia', 'kupersmid', 'Yatay 240', 'maiukuper123', 1, '', '2007-06-08');
INSERT INTO public."Usuarios" VALUES (20, 'ju@gmail.com', 'maia', 'kupersmid', 'Yatay 240', 'maiukuper123', 1, '', '2007-06-08');


--
-- TOC entry 4862 (class 0 OID 16429)
-- Dependencies: 229
-- Data for Name: ZonaOfrecidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."ZonaOfrecidos" VALUES (7, 4, 1);
INSERT INTO public."ZonaOfrecidos" VALUES (8, 2, 2);
INSERT INTO public."ZonaOfrecidos" VALUES (9, 3, 3);
INSERT INTO public."ZonaOfrecidos" VALUES (10, 3, 4);
INSERT INTO public."ZonaOfrecidos" VALUES (11, 3, 1);
INSERT INTO public."ZonaOfrecidos" VALUES (12, 4, 4);


--
-- TOC entry 4866 (class 0 OID 16435)
-- Dependencies: 233
-- Data for Name: Zonas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Zonas" VALUES (1, 'almagro');
INSERT INTO public."Zonas" VALUES (2, 'Palermo');
INSERT INTO public."Zonas" VALUES (3, 'Recoleta');
INSERT INTO public."Zonas" VALUES (4, 'Belgrano');
INSERT INTO public."Zonas" VALUES (5, 'San Telmo');
INSERT INTO public."Zonas" VALUES (6, 'La Boca');
INSERT INTO public."Zonas" VALUES (7, 'Puerto Madero');
INSERT INTO public."Zonas" VALUES (8, 'Caballito');
INSERT INTO public."Zonas" VALUES (9, 'Villa Crespo');
INSERT INTO public."Zonas" VALUES (10, 'Colegiales');
INSERT INTO public."Zonas" VALUES (11, 'Almagro');
INSERT INTO public."Zonas" VALUES (12, 'Villa Urquiza');
INSERT INTO public."Zonas" VALUES (13, 'Barracas');
INSERT INTO public."Zonas" VALUES (14, 'NuÃ±ez');
INSERT INTO public."Zonas" VALUES (15, 'Saavedra');
INSERT INTO public."Zonas" VALUES (16, 'Villa Devoto');
INSERT INTO public."Zonas" VALUES (17, 'Flores');
INSERT INTO public."Zonas" VALUES (18, 'Parque Chacabuco');
INSERT INTO public."Zonas" VALUES (19, 'Parque Patricios');
INSERT INTO public."Zonas" VALUES (20, 'Mataderos');
INSERT INTO public."Zonas" VALUES (21, 'Villa del Parque');
INSERT INTO public."Zonas" VALUES (22, 'Villa Lugano');
INSERT INTO public."Zonas" VALUES (23, 'Villa PueyrredÃ³n');
INSERT INTO public."Zonas" VALUES (24, 'Villa Luro');
INSERT INTO public."Zonas" VALUES (25, 'Villa Santa Rita');
INSERT INTO public."Zonas" VALUES (26, 'Parque Avellaneda');
INSERT INTO public."Zonas" VALUES (27, 'Villa General Mitre');
INSERT INTO public."Zonas" VALUES (28, 'Villa Real');
INSERT INTO public."Zonas" VALUES (29, 'Villa Riachuelo');
INSERT INTO public."Zonas" VALUES (30, 'Versalles');
INSERT INTO public."Zonas" VALUES (31, 'Monte Castro');


--
-- TOC entry 4884 (class 0 OID 0)
-- Dependencies: 216
-- Name: Categorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Categorias_id_seq"', 4, true);


--
-- TOC entry 4885 (class 0 OID 0)
-- Dependencies: 218
-- Name: Favoritos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Favoritos_id_seq"', 17, true);


--
-- TOC entry 4886 (class 0 OID 0)
-- Dependencies: 220
-- Name: FotosOfrecidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."FotosOfrecidos_id_seq"', 1, false);


--
-- TOC entry 4887 (class 0 OID 0)
-- Dependencies: 222
-- Name: Generos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Generos_id_seq"', 5, true);


--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 224
-- Name: Historial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Historial_id_seq"', 15, true);


--
-- TOC entry 4889 (class 0 OID 0)
-- Dependencies: 226
-- Name: Ofrecidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Ofrecidos_id_seq"', 11, true);


--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 228
-- Name: Usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Usuarios_id_seq"', 20, true);


--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 230
-- Name: ZonaTrabajador_idTrabajador_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ZonaTrabajador_idTrabajador_seq"', 1, false);


--
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 231
-- Name: ZonaTrabajador_idZona_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ZonaTrabajador_idZona_seq"', 1, false);


--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 232
-- Name: ZonaTrabajador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ZonaTrabajador_id_seq"', 12, true);


--
-- TOC entry 4894 (class 0 OID 0)
-- Dependencies: 234
-- Name: Zonas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Zonas_id_seq"', 31, true);


--
-- TOC entry 4681 (class 2606 OID 16451)
-- Name: Categorias Categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categorias"
    ADD CONSTRAINT "Categorias_pkey" PRIMARY KEY (id);


--
-- TOC entry 4683 (class 2606 OID 16453)
-- Name: Favoritos Favoritos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos"
    ADD CONSTRAINT "Favoritos_pkey" PRIMARY KEY (id);


--
-- TOC entry 4685 (class 2606 OID 16455)
-- Name: FotosOfrecidos FotosOfrecidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FotosOfrecidos"
    ADD CONSTRAINT "FotosOfrecidos_pkey" PRIMARY KEY (id);


--
-- TOC entry 4687 (class 2606 OID 16457)
-- Name: Generos Generos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Generos"
    ADD CONSTRAINT "Generos_pkey" PRIMARY KEY (id);


--
-- TOC entry 4689 (class 2606 OID 16459)
-- Name: Historial Historial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Historial"
    ADD CONSTRAINT "Historial_pkey" PRIMARY KEY (id);


--
-- TOC entry 4691 (class 2606 OID 16461)
-- Name: Ofrecidos Ofrecidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Ofrecidos"
    ADD CONSTRAINT "Ofrecidos_pkey" PRIMARY KEY (id);


--
-- TOC entry 4693 (class 2606 OID 16463)
-- Name: Usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);


--
-- TOC entry 4695 (class 2606 OID 16465)
-- Name: ZonaOfrecidos ZonaOfrecidos _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ZonaOfrecidos"
    ADD CONSTRAINT "ZonaOfrecidos _pkey" PRIMARY KEY (id);


--
-- TOC entry 4697 (class 2606 OID 16467)
-- Name: Zonas Zonas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Zonas"
    ADD CONSTRAINT "Zonas_pkey" PRIMARY KEY (id);


--
-- TOC entry 4700 (class 2606 OID 16468)
-- Name: FotosOfrecidos foto_idOfrecidos; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."FotosOfrecidos"
    ADD CONSTRAINT "foto_idOfrecidos" FOREIGN KEY ("idOfrecido") REFERENCES public."Ofrecidos"(id) NOT VALID;


--
-- TOC entry 4701 (class 2606 OID 16473)
-- Name: Historial idCont_idUsario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Historial"
    ADD CONSTRAINT "idCont_idUsario" FOREIGN KEY ("idContratador") REFERENCES public."Usuarios"(id) NOT VALID;


--
-- TOC entry 4698 (class 2606 OID 16478)
-- Name: Favoritos idOfre_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos"
    ADD CONSTRAINT "idOfre_usuario" FOREIGN KEY ("idOfrecido") REFERENCES public."Usuarios"(id) NOT VALID;


--
-- TOC entry 4702 (class 2606 OID 16483)
-- Name: Historial idProv_idUsuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Historial"
    ADD CONSTRAINT "idProv_idUsuario" FOREIGN KEY ("idProveedor") REFERENCES public."Usuarios"(id) NOT VALID;


--
-- TOC entry 4699 (class 2606 OID 16488)
-- Name: Favoritos idUs_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Favoritos"
    ADD CONSTRAINT "idUs_usuario" FOREIGN KEY ("idUsuario") REFERENCES public."Usuarios"(id) NOT VALID;


--
-- TOC entry 4703 (class 2606 OID 16493)
-- Name: ZonaOfrecidos idUsuarios_usuariosId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ZonaOfrecidos"
    ADD CONSTRAINT "idUsuarios_usuariosId" FOREIGN KEY ("idUsuario") REFERENCES public."Usuarios"(id) NOT VALID;


--
-- TOC entry 4704 (class 2606 OID 16498)
-- Name: ZonaOfrecidos idZonas_zonasId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ZonaOfrecidos"
    ADD CONSTRAINT "idZonas_zonasId" FOREIGN KEY ("idZona") REFERENCES public."Zonas"(id) NOT VALID;


-- Completed on 2024-07-05 10:02:46

--
-- PostgreSQL database dump complete
--

DROP PROCEDURE IF EXISTS Likear(INTEGER, INTEGER, OUT INTEGER);

CREATE OR REPLACE PROCEDURE Likear(
  IN idUsuario INTEGER,
  IN idOfrecido INTEGER,
  OUT resultado INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF EXISTS (
        SELECT 1 
        FROM public."Favoritos" 
        WHERE "idUsuario" = idUsuario AND "idOfrecido" = idOfrecido
    ) THEN
        DELETE FROM public."Favoritos" 
        WHERE "idUsuario" = idUsuario AND "idOfrecido" = idOfrecido;
        
        resultado := -1; -- Indicar que se eliminó el registro existente

    ELSE
        INSERT INTO public."Favoritos"("idUsuario", "idOfrecido")
        VALUES (idUsuario, idOfrecido);

        resultado := 1; -- Indicar que se insertó un nuevo registro
    END IF;
END;
$$;

DROP PROCEDURE IF EXISTS registrarse(character varying, character varying, character varying, character varying, character varying, integer, character varying, date);
CREATE OR REPLACE PROCEDURE Registrarse(
    IN p_email character varying,
    IN p_nombre character varying,
    IN p_apellido character varying,
    IN p_direccion character varying,
    IN p_contrasena character varying,
    IN p_idGenero integer,
    IN p_foto character varying,
    IN p_fechaNacimiento date,
    OUT p_resultado INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF EXISTS (
        SELECT 1 
        FROM public."Usuarios" 
        WHERE "email" = p_email
    ) THEN
        p_resultado := -1; -- Indicar que ya existe
    ELSE
        INSERT INTO public."Usuarios"(
            email, 
            nombre, 
            apellido, 
            direccion, 
            contrasena, 
            "idGenero", 
            foto, 
            "FechaNacimiento"
        ) VALUES (
            p_email,
            p_nombre,
            p_apellido,
            p_direccion,
            p_contrasena,
            p_idGenero,
            p_foto,
            p_fechaNacimiento
        );

        p_resultado := 1; -- Indicar que se insertó un nuevo registro
    END IF;
END;
$$;