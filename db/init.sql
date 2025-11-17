CREATE TABLE IF NOT EXISTS person (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);

INSERT INTO person (name, email) VALUES ('Alice', 'alice@example.com');

