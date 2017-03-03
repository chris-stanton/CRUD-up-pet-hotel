# CRUD-up-pet-hotel

CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80)
);

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name varchar(50),
    breed varchar(50),
    color varchar(20),
    owner_id integer REFERENCES owners
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    checkin_date DATE,
    checkout_date DATE,
    pets_id integer REFERENCES pets
);


SELECT pets.owner_id, owners.first_name, owners.last_name, pets.name
FROM pets 
JOIN owners 
ON owners.id=pets.owner_id
;
