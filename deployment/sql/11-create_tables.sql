CREATE TABLE public."comments" (
	id bigserial NOT NULL,
	application_id int8 NULL,
	author varchar(255) NULL,
	created_datetime timestamp NOT NULL,
	description varchar(255) NULL,
	status varchar(255) NULL,
	updated_datetime timestamp NOT NULL,
	CONSTRAINT comments_pkey PRIMARY KEY (id)
);

CREATE TABLE public.history_items (
	id bigserial NOT NULL,
	author varchar(255) NULL,
	comment_id int8 NULL,
	created_datetime timestamp NOT NULL,
	"text" varchar(255) NULL,
	"type" varchar(255) NULL,
	updated_datetime timestamp NOT NULL,
	CONSTRAINT history_items_pkey PRIMARY KEY (id)
);
